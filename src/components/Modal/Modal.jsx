import { Component } from "react";
import { Overlay, ModalList } from "./Modal.styled";

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }

    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <Overlay>
                <ModalList>
                    <img src={this.props.Url} alt={this.props.Tags}/>
                </ModalList>
            </Overlay>
        )
    }
}