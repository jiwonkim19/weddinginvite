import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Dropdown,
  ToggleButton,
  ButtonGroup
} from 'react-bootstrap';

const RsvpCheck = () => {
  return (
    <Form>
    <Form.Group>
    <Form.Label>RSVP</Form.Label>
    <Form.Check
    inline
    type="checkbox"
    label="Accept"/>
    <Form.Check
    inline
     type="checkbox"
    label="Decline"/>
  </Form.Group>
  </Form>
  )
}

const FoodCheck = () => {
  return (
    <Form>
    <Form.Label>Lunch Selection</Form.Label>
    <Form.Group>
    <Form.Check
    inline
     type="checkbox"
    label="Beef"/>
    <Form.Check
    inline
     type="checkbox"
    label="Chicken"/>
     <Form.Check
     disabled={false}
     inline
     type="checkbox"
    label="Fish"/>
     <Form.Check
     disabled={true}
     inline
     type="checkbox"
    label="Vegetarian"/>
  </Form.Group>
  </Form>
 

  )
}

const RSVP = () => {
  const { name } = useParams();
  const [rsvp, setRsvp] = useState({
    attendance: '',
    food: '',
  });

  const navigate = useNavigate();

  return (
    <div>
<RsvpCheck />
<FoodCheck />
    </div>
  );
};

export default RSVP;
