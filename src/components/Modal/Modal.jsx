import { Component } from "react";
import { Overlay, ModalList } from "./Modal.styled";

export default class Modal extends Component {
    render() {
        return (
            <Overlay>
                <ModalList>
                    <img src={} alt={}/>
                </ModalList>
            </Overlay>
        )
    }
}