import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>NO HAY CLIENTES CREADOS</h1>
      <Link to="/client/create">crear</Link>
    </>
  )
}

export default Home
