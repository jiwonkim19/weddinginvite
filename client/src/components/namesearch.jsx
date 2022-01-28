import React, { useState, useEffect } from 'react'

const NameSearch = () => {
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setEntry(event.target.value)
    }

    //fetch from db, backend to find matching name that was input

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
                    <h1>ENTER THE NAME ON YOUR INVITATION</h1>
                    <input type="text" id="name" name="guestname"
                        placeholder="e.g.John and Jane Smith" onChange={
                            handleChange
                        } />
                    <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault()
                          fetch('/guestlist')
                          .then(resp => {
                            return resp.json()
                          })
                          .then(resp => {
                            setList(resp)
                          })}}
                          
                    >Find RSVP
                    </button>
                </div>
            </form>
            <ol>
                <li>MATCHING NAME</li>
            </ol>
        </div>
    )
}
export default NameSearch
