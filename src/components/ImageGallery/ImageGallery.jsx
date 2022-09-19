import { Component } from "react";
import { GalleryImage } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Circles } from "react-loader-spinner";
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
    render() {
        return (
            <GalleryImage>

                {this.state.gallery === '' ? (
                    <p>Enter name images!</p>
                ) : (
                    <ImageGalleryItem gallery={this.state.gallery}/>
                )}

            </GalleryImage>
        )
    }
}