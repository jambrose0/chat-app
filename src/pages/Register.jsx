import React from 'react'
import add from '../img/add.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'


export const Register = () => {

const [err, setErr] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault()
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;
  const file = e.target[3].files[0];
  
  try{
 
    //authenticates users via email and password
const res = await createUserWithEmailAndPassword(auth, email, password);
//allows for upload of files
const storage = getStorage();



  }catch(err){
    setErr(true);

  }

}



  return (
    <div className='formContainer'>
        <div className='formWrapper'>
           <span className='logo'>Panda Chat</span>
           <span className='title'>Register Here</span>
            
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' />
        <input type="email"  placeholder='email'/>
        <input type="password" placeholder='password' />
        <input style={{display:"none"}} type="file" id='file'/>
        <label htmlFor='file'><img src={add} alt="" /><span>Add a Profile Pic</span></label>
     <button>Sign Up</button>
     {err && <span>Something went wrong</span>}
     <p>Do you already have an account? Login</p>
    </form>

        </div>
        
        </div>
  )
}
export default Register;