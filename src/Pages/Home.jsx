import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, Col, Button, Card, Image, Alert, Row } from 'react-bootstrap';


export  function Home() {
  return (

   
    <Link to="/anime">
    <Button>Anime</Button>
    </Link>
  )
}
