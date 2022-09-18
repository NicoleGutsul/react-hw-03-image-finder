import { Component } from "react";
import { GalleryImage } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
    state = {
        gallery: [],
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