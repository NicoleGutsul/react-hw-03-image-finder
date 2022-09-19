import { Component } from "react";
import { GalleryImage } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Circles } from "react-loader-spinner";
import { ButtonLoadMore } from "../LoadMore/LoadMore";
import Modal from "../Modal/Modal";
import { FetchData } from "../../FetchData/FetchData";

export default class ImageGallery extends Component {
    state = {
        gallery: [],
        page: 1,
        loading: false,
        modal: false,
        currentUrl: '',
        currentTags: '',
        total: 0,
        totalHits: 0,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.setState({ loading: true });
            FetchData(this.props.inputFilter, this.state.page)
            .then(gallery => {
                this.setState(prevState => ({
                    gallery: [...prevState.gallery, gallery.hits],
                    loading: false,
                    total: prevState.total + gallery.hits.length,
                    totalHits: gallery.totalHits,
                }));
            })
            .catch(error => this.setState({ error }));
        }
        if (prevProps.inputFilter !== this.props.inputFilter) {
            this.setState({loading: true, gallery: [], page: 1, total: 0});
            FetchData(this.props.inputFilter, this.state.page)
              .then(gallery => {
                this.setState(prevState => ({
                    gallery: [...prevState.gallery, ...gallery.hits],
                    loading: false,
                    total: prevState.total + gallery.hits.length,
                    totalHits: gallery.totalHits,
                }));
              })
              .catch(error => this.setState({ error }));
        }
    }

    toggleModal = () => {
        this.setState(state => ({
            modal: !state.modal,
        }));
    }

    getImage = (webformatURL, tags) => {
        this.setState({ currentUrl: webformatURL, currentTags: tags});
    }

    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
    };
    render() {
        return (
            <GalleryImage>

                {this.state.gallery === '' ? (
                    <p>Enter name images!</p>
                ) : (
                    <ImageGalleryItem gallery={this.state.gallery}/>
                )}
                {(this.state.gallery !== '') &
                (this.state.gallery.total !== 0) &
                (this.state.totalHits !== this.state.total) ? (
                <ButtonLoadMore onClick={this.loadMore} />
                ) : (
                ''
                )}

            </GalleryImage>
        )
    }
}