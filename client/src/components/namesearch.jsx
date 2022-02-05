import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";


const NameSearch = () => {
    const [name, setName] = useState('')
    const [matchname, setmatchname] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }


    //fetch from db, backend to find matching name that was input
    const getRSVP = (name) => {

        return fetch(`/name/${name}`)
            .then(resp => {
                return resp.json()
            })
    }

    // if (hi[1] === null) { link to rsvp form} 

    let navigate = useNavigate()

    return (
        <div
            style={{
                textAlign: "center",
                maxWidth: "950px",
                margin: "0 auto",
                border: "1px solid #e6e6e6",
                padding: "40px 25px",
                marginTop: "50px"
            }}
        >
            <h1>JI-WON and JAMES</h1>
            <h2>RSVP</h2>
            <form>
                <div>
                    <h3>ENTER THE NAME ON YOUR INVITATION</h3>
                    <input type="text" id="name" name="guestname"
                        placeholder="e.g.John and Jane Smith"
                        onChange={
                            handleChange
                        } />
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()
                            getRSVP(name)
                            .then(hi => {
                                if
                                    (hi.rsvp === 'accept'
                                ) {
                                    navigate(`/rsvp/${name}`)
                                } else {
                                    <h3>No Match Found</h3>
                                }
                            })
                        }}

                    >Find RSVP
                    </button>
                </div>
            </form>
        </div>
    )
}
export default NameSearch
