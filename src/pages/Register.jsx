import React from 'react'
// import "./style.scss"

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
           <span className='logo'>Panda Chat</span>
           <span className='title'>Register Here</span>
            
    <form>
        <input type="text" placeholder='username' />
        <input type="email"  placeholder='email'/>
        <input type="password" placeholder='password' />
        <input type="file" />
     <button>Sign Up</button>
     <p>Do you already have an account? Login</p>
    </form>

        </div>
        
        </div>
  )
}
