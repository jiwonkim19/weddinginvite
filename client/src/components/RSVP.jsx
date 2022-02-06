import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
} from 'react-bootstrap';

const RSVP = () => {
  const { name } = useParams();
  const [rsvp, setRsvp] = useState({
    attendance: '',
    food: '',
  });

  const navigate = useNavigate();

  return (

    <Form  style={{
      textAlign: "center",
      maxWidth: "950px",
      margin: "0 auto",
      border: "1px solid #e6e6e6",
      padding: "40px 25px",
      marginTop: "50px"
  }}
>
      <Form.Group className="mb-3">
        <Form.Label>Hi {name}! We would love to see you!</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Attendance</Form.Label>
        <Form.Select
          onChange={e => {
            setRsvp({
              ...rsvp,
              attendance: e.target.value
            })
          }}
        >
          <option>Pick one...</option>
          <option value="accept">Accept</option>
          <option value="decline">Decline</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Lunch Preference</Form.Label>
        <Form.Select
          onChange={e => {
            setRsvp({
              ...rsvp,
              food: e.target.value
            })
          }}
        >
          <option>Pick one...</option>
          <option value="beef">Beef</option>
          <option value="chicken">Chicken</option>
          <option value="fish">Fish</option>
          <option value="vegetarian">Vegetarian</option>
        </Form.Select>
      </Form.Group>
      <Button
        onClick={(e)=> {
          e.preventDefault();

          // TODO: handle failed submission
          fetch(`/rsvp/${name}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rsvp })
          });

          navigate('/confirmed');
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default RSVP;
