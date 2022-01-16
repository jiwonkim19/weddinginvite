import React, { useState, useEffect } from 'react'
import Client from '../lib/client.js'

const Foo = () => {
  const client = new Client('http://localhost:3000')
  const [foo, setFoo] = useState('')

  useEffect(() => {
    client.fetchFoo()
      .then(resp => {
        setFoo(resp.foo)
      })
  }, [])

  return (
    <div>{foo}</div>
  )
}

export default Foo
