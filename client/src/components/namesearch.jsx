import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const NameSearch = () => {
    const [name, setName] = useState('')
    const [matchname, setmatchname] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    //fetch from db, backend to find matching name that was input
    const getName = (name) => {
         fetch(`/name/${name}`)
            .then(resp => {
                return resp.json()
            })
            .then(hi => {
                setmatchname(hi)
            })
            console.log(matchname)
    }

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
                            getName(name)
                        }}

                    >Find RSVP
                    </button>
                </div>
            </form>
            <ol>
                <li>{matchname}</li>
            </ol>
            <Link to="/foo">FOO</Link>
        </div>
    )
}
export default NameSearch
