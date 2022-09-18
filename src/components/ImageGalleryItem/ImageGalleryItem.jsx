import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ gallery }) => {
    return gallery.map(data => {
        return (
            <GalleryItem
              key={data.id}
            >
                <GalleryItemImage
                  src={data.webformatURL}
                  alt={DOMMatrixReadOnly.tags}
                  width="180"
                />
            </GalleryItem>
        )
    })
}

export default ImageGalleryItem;