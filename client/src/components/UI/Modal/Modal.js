import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import cssClasses from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={cssClasses.backdrop} onClick={props.closeModal}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={cssClasses.modal}>
            <div className={cssClasses.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop {...props} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay {...props} >{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;