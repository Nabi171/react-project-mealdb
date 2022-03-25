import React, { useState } from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import ReactModal from '../ReactModal/ReactModal';
import '../Mealdb/Mealdb.css'
// import ReactModal from '../ReactModal/ReactModal';

// const { cart, setcart } = useState([]);

const Mealdb = (props) => {
    console.log(props);
    const { strMealThumb, strInstructions, strMeal } = props.meal;

    // const handleAddtoModal = (meal) => {

    // }
    return (

        < div className='bg-dark header-container' >
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card >
                            <Card.Img variant="top" className='w-75 mx-auto rounded-circle ' src={strMealThumb} />
                            <Card.Body>
                                <Card.Title>{strMeal}</Card.Title>
                                <Card.Text>
                                    {strInstructions}
                                </Card.Text>
                                {/* <Button onClick={() => handleAddtoMod(props.meal)} className="btn btn-dark">Details</Button> */}
                                <ReactModal meal={props.meal}></ReactModal>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    );
};

export default Mealdb;