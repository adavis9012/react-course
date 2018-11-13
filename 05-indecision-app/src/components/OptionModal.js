import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} // Open or close modal
        onRequestClose={props.handleClearSelectedOption} // Allow exit with Esc
        contentLabel="Selected Option" // Accesibility
        closeTimeoutMS={200} //ms
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button 
            className="button"
            onClick={props.handleClearSelectedOption}>
            Okay
        </button>
    </Modal>
)

export default OptionModal;