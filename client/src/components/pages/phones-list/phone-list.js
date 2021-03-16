import React, { Component } from 'react'

import PhonesService from './../../../service/phones.service'
import { Spinner, Container, Row } from 'react-bootstrap'
import PhoneCard from './phone-card/phone-card'
import { Link } from 'react-router-dom'

import './phone-list.css'

class PhoneList extends Component {
  constructor() {
    super()

    this.state = {
      phones: undefined
    }

    this.phonesService = new PhonesService()
  }

  componentDidMount() {
    this.phonesService
      .getAllPhones()
      .then(res => this.setState({ phones: res.data }))
      .catch(err => console.log(err))
  }

  render() {

    return (

      <>
        <header className='phones-list-hero'>
          <h2>Nuestros smartphones</h2>
          <div className='addPhone-Btn-Div'>
            <Link to='/new' className='add-btn'>Añadir nuevo teléfono</Link>
          </div>
          <video playsInline autoPlay muted loop className='phones-List-Video'>
            <source src={`https://res.cloudinary.com/jordi-ironhack/video/upload/v1615897649/fotos-webuild/Phone-List_x45u1y.mp4`} type='video/mp4' />
          </video>
        </header>
        <Container className='phonesList-container'>
          <Row className="phone-list-row">
            {this.state.phones ?
              this.state.phones.map((elm) => <PhoneCard key={elm._id} {...elm} />)
              :
              <Spinner></Spinner>
            }
          </Row>
        </Container>
      </>



    )
  }
}

export default PhoneList;
