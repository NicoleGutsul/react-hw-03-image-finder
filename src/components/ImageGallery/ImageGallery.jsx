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

    toggleModal = () => {
        this.setState(state => ({
            modal: !state.modal,
        }));
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