import React, { useState } from 'react'
import styled from 'styled-components'

export const LoginForm = ({Login, error}) => {

    const [details, setDetails] = useState({name: "", email: "", password: ""})

    const submitHandler = (e) => {
        e.preventDefault()

        Login(details)
    }

  return (
    <Wrapper>        
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' onChange={({target}) => setDetails({...details, name: target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' onChange={({target}) => setDetails({...details, email: target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='pwd' onChange={({target}) => setDetails({...details, password: target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    max-width: 500px;
    height: 400px;
    background-color: #fff784;
    .form-inner{
        h2{
            color: #232323;
        }
        .form-group{

        }
    }
`
