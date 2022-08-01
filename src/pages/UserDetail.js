import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom';
import Loader from '../components/Loader';


function Home() {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);


    function getUser() {
        axios.get('https://reqres.in/api/users/'+id)
            .then((res)=>{
                setUser(res.data.data)
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    useEffect(() => {
        getUser()
    }, [])
    
  return (
    loading ? 
    <Loader/>
    :
    <Container className='pt-5'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{user.first_name +' '+user.last_name}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <NavLink className={'btn btn-primary'} to={`/user`}>Back</NavLink>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Home