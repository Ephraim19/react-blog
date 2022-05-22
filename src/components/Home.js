import React from 'react'
import { auth,provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'

function Home({ setIsAuth }) {

    const signInWithGoogle = () => {
        signInWithPopup(auth,provider).then((result) => {
            localStorage.setItem("isAuth",true)
            setIsAuth(true)
        })
    }

  return (
    <div className='loginPage'>
        <p>Login with google</p>
        <button className='login-with-google-btn' onClick={ signInWithGoogle }>
            Sign in with google
        </button>
    </div>

  )
}

export default Home