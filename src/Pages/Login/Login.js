import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import '../../Styles/Style.css'
export default function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [redirect, setRedirect] = React.useState(false)

    const userNameChange = (event) =>{

        // if (event.target.value === "") {
        //     document.getElementById("username")
        // }
        // else {
        //     document.getElementById("username")
        // }
setUsername(event.target.value)
    }
    const passwordChange = (event) => {
        // if (event.target.value === "") {
        //     document.getElementById("password")
        // }
        // else {
        //     document.getElementById("password")
        // }
         setPassword(event.target.value)
     
    }
    const submit = (event) => {
    if (username === "Ashok" && password === "123456") {
        setRedirect(true)
          }
          else {

              alert("Invalid login Credentials")
          }
        }

    return (
        <>
        <div className='padding-down'>
           <TextField 
           label="UserName" id="username" className="textbox" value={username} onChange={userNameChange}
           
           />
         <br></br>
           <TextField
           label="PassWord" id="password" className="textbox" value={password} onChange={passwordChange}
           
           />
           </div>
          <div>
             <Button 
             className="button" onClick={submit}
             
             >Login</Button>
             </div>
             </>
    //     <TextField
    //     id="standard-required"
    //     label="UserName"
    //     InputProps={{
    //       readOnly: false
    //     }}
    //   />
    //   <TextField
    //   id="standard-required"
    //   label="PassWord"
    //   InputProps={{
    //     readOnly: false
    //   }}
    // />
    )
         
}