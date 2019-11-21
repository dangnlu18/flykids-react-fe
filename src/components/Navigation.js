import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Nav = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
text-align: center;
align-items: center;
background-color: #932F6D;
`

const Navigation = (props) => {
  const history = useHistory();
  const handleClick = e =>{
    localStorage.removeItem('token')
    history.push('/signin')
  }

  return (
    <div>
      <Nav>
        <h1>KidsFly!</h1>
        <div>
          <Link to='/trips' className='atags'>
            Trips
          </Link>
        </div>
        <div>
          <Link to='/login' className='atags'>
            Log In
          </Link>
        </div>
        <div onClick={handleClick} className='atags'>
          Logout
        </div>
      </Nav>
    </div>
  )
}

export default Navigation
