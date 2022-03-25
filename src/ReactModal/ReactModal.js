import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAlignRight } from '@fortawesome/free-solid-svg-icons'
// import { fa-thin } from '@fortawesome/free-solid-svg-icons'
const ReactModal = (props) => {
    const { strMealThumb, strInstructions, strMeal, strTags, strCategory, strArea } = props.meal;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faAlignRight} ></FontAwesomeIcon>

                {/* <FontAwesomeIcon icon="fa-solid " /> */}
                Details
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex align-items-center justify-content-between fw-bold me-4 p-4'>
                        <img className=' rounded-circle w-50' src={strMealThumb} alt=''></img>
                        <div>
                            <p><span className='text-danger'>Tags</span>:{strTags}</p>
                            <p><span className='text-danger'>Type</span>:{strCategory}</p>
                            <p><span className='text-danger'>Region</span>:{strArea}</p>
                        </div>
                    </div>
                    <p>{strInstructions}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;