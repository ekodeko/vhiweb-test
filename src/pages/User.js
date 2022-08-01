import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Loader from '../components/Loader'

function Home() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);


    function getUsers() {
        axios.get('https://reqres.in/api/users?page=2')
            .then((res)=>{
                setUsers(res.data.data)
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    useEffect(() => {
      getUsers()
    }, [])
    
  return (
    loading ?
    <Loader/>
    :
    <Container className='pt-5'>
      <Row>
        {
          users?.map((val, id) => {
                  return <Col md="3" className='mb-5' key={id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={val.avatar} />
                                <Card.Body>
                                  <Card.Title>{val.first_name +' '+val.last_name}</Card.Title>
                                  <Card.Text>
                                    {val.email}
                                  </Card.Text>
                                  <NavLink className={'btn btn-primary'} to={`/user/${val.id}`}>Detail</NavLink>
                                </Card.Body>
                              </Card> 
                        </Col>
            })
        }
      </Row>
    </Container>
  )
}

export default Home