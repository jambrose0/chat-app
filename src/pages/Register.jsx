import React from 'react'
//ON 7:20 OF VIDEO


export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
           <span className='logo'>Panda Chat</span>
           <span className='title'>Register Here</span>
            
    <form>
        <input type="text" placeholder='display' />
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
