import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} // Open or close modal
        onRequestClose={props.handleClearSelectedOption} // Allow exit with Esc
        contentLabel="Selected Option" // Accesibility
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>
            Okay
        </button>
    </Modal>
)

export default OptionModal;