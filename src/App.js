import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Cart from './Components/Cart';
import Home from './containers/Home'
import { LoginForm } from './containers/Login'


const App = () => {
    const [post, setPost] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/db.json")
        .then(response => response.json())
        .then(rez => setPost(rez.pizzas))
        .catch(err => alert(err))
    }, [])

    const adminUser = {
        email: "abdubositjs@gmail.com",
        password: "0000"
    }

    const [user, setUser] = useState({email: "", pwd: ""})
    const [error, setError] = useState("")
    
    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password === adminUser.password){
            console.log("kirdi");
            setUser({name: details.name, email: details.email})
        } else {
            console.log("kirmadi");
        }
    }
    
    return (
        <div className="wrapper">
            {(user.email != "") ? (
                <div>
                    <Header />
                    <Routes >
                        <Route path='/'
                            element={
                                <Home post={post} />}
                                />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </div>
            ) : (
                <LoginForm 
                    Login={Login}
                    error={error}
                />
            )}
        </div>
    )
}

export default App;