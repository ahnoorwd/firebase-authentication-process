import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    const [newuser,setuser] = useState(null);
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const handleloginwithgoogle = ()=>{
       
        
     signInWithPopup(auth,provider)
     .then((result)=>{
        console.log(result.user);
        setuser(result.user);
     })
     .catch(error=>{
        console.log("ERROR IS OCCURED", error);
        setuser(null);
     })
    }

    const handlelogingithub = () =>{
     signInWithPopup(auth,gitprovider)
     .then((result)=>{
        console.log(result.user);
        setuser(result.user);
     })
     .catch(error=>{
        console.log("ERROR IS OCCURED", error);
        setuser(null);
     })
    }


    const handlelogout = () =>{
        signOut(auth)
        .then(()=>{
            console.log('signout is done');
            setuser(null)
        })
        .catch(error=>{
            console.log('ERROR IS FINDING HERE',error);
        })
    }
    return (
        <div style={{'marginTop':'20px'}}>
           
            {
               newuser?<button   onClick={handlelogout}>Logout</button>
               :
               <>
               <button  onClick={handleloginwithgoogle}>Login With Google</button>
               <button style={{'marginLeft':'20px'}}  onClick={handlelogingithub}>Login With Github</button>

               </>
            }

            {
            newuser && <div>
                 <h4>{newuser.displayName}</h4>
                 <p>{newuser.email}</p>
                 <img   src={newuser.photoURL} alt="" />
                
            </div>
            
            }
        </div>
    );
};

export default Login;