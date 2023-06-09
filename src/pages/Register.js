import React, { useContext, useState } from "react";
import { register_member } from "../sevices/auth.service";
import UserContext from "../store/context";
import api from "../sevices/api";


const Register = (props)=>{
    const {state,dispatch} = useContext(UserContext);
    const [user,setUser] = useState({name:"",email:"",password:""});
    const handleInput = (event)=>{
        user[event.target.name] = event.target.value;
        setUser(user);
    }
    const register = async (e)=>{
        e.preventDefault();
        const u = await register_member(user);
        dispatch({type:"AUTH_LOGIN",payload:u.token});
        state.token = u.token;
        setTimeout(()=>{dispatch({type:"HIDE_LOADING"})},1000);
        localStorage.setItem("state",JSON.stringify(state));
        api.defaults.headers.common["Authorization"] = `Bearer ${u.token}`;
    
    }


    return(
        <section>
              <div className='container'>
                  <div className="row">
                      <div className ="col-md-4"></div>
                      <div className="col-md-4">
                  
          <form onSubmit={register} method="post">
          <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" onChange={handleInput} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={handleInput} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleInput} name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            <div className="col-md-4"></div>
            </div>
          </div>
        </section>
    )
}
export default Register;