import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Dropdown,
  ToggleButton,
  ButtonGroup
} from 'react-bootstrap';


const RsvpCheck = ({ attendance,setAttendance }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>RSVP</Form.Label>
        <Form.Check
          inline
          type="radio"
          label="Accept"
          name='group1'
          checked={attendance === 'accept'}
          onClick={() => {
            setAttendance('accept')
          }}
        />
        <Form.Check
          inline
          type="radio"
          label="Decline"
          name='group1'
          checked={attendance === 'decline'}
          onClick={() => {
            setAttendance('decline')
          }}
        />
      </Form.Group>
    </Form>
  )
}

const FoodCheck = ({food,setFood}) => {
  return (
    <Form>
      <Form.Label>Lunch Selection</Form.Label>
      <Form.Group>
        <Form.Check
          inline
          type="radio"
          label="Beef"
          name='group2'
          checked={food === 'beef'}
          onClick={() => {
             setFood('beef')
           }}/>
        <Form.Check
          inline
          type="radio"
          label="Chicken"
          name='group2'
          checked={food === 'chicken'}
          onClick={() => {
            setFood('chicken')
          }}
           />
        <Form.Check
          inline
          type="radio"
          label="Fish"
          name='group2'
          checked={food === 'fish'}
          onClick={() => {
            setFood('fish')
          }}
           />
        <Form.Check
          inline
          type="radio"
          label="Vegetarian"
          name='group1'
          checked={food === 'vegetarian'}
          onClick={() => {
            setFood('vegetarian')
          }}
           />
      </Form.Group>
    </Form>


  )
}

const RSVP = () => {
  const { name } = useParams();
  // const [rsvp, setRsvp] = useState({
  //   attendance: attendance,
  //   food: food,
  // });

  const navigate = useNavigate();
  const [food,setFood] = useState('beef')
  const [attendance,setAttendance] = useState('accept')

  return (
    <div>
      <RsvpCheck attendance={attendance} setAttendance={setAttendance} />
      <FoodCheck food={food} setFood={setFood} />
    </div>
  );
};

export default RSVP;


