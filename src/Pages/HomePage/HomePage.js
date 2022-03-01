import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LoginImage from '../../Images/LoginImage.jpg';
import '../../Styles/Style.css';
import dosa from "../../Images/Image.png"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Login from '../Login/Login';
import himage from '../../Images/himage.jpg';
import nimage from '../../Images/nellai.png';
// import hnimage from '../../Images/imageshn.jpg';
import TextField from "@material-ui/core/TextField";
import CloseIcon from '@mui/icons-material/Close';
import TextTransitions from '../../Component/TextTransitions';
import hotelImage from '../../Images/HotelLogo.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import facebook from '../../Images/face.png';
import insta from '../../Images/insta.png';
import twitt from '../../Images/twitt.png';
import { red } from '@material-ui/core/colors';
import { Navigate ,useNavigate} from 'react-router-dom';
 




const useStyles = makeStyles((theme) => ({
   
root: {
	textAlign: "center",

},
textinput:
{
 
 border:"0px 0px 0px 2px solid red",
 backgroundColor:     "antiquewhite"


},
textlabel:
{

    marginRight:"20px",
    color:"white"
},
// textinput:focus:
// {
//     boxShadow: "0px 0px 0px 2px blue",
// },
btns:{
	'& > *': {
	margin: theme.spacing(1),
	},
	marginTop: "50px",
    color:"white",
    backgroundColor:"black",
}
}));
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
var keyPressed= 0
 function HomePage() {
  const navigate = useNavigate();
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
     const [redirect, setRedirect] = React.useState(false)
const classes = useStyles();
const anchor="right";
const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    
  });
  const[usernameerror, setusernameerror] = React.useState(false)
  const[usernameerrormsg, setusernameerrormsg] = React.useState("") 
  const[passworderror,setpassworderror] = React.useState(false)
  const[passworderrormsg,setpassworderrormsg] = React.useState("")
  const userNameChange = (event) =>{
    setUsername(event.target.value)
    setusernameerror(false)

    }
    const passwordChange = (event) => {
        setPassword(event.target.value)
        setpassworderror(false)
     
    }
    const submit = (event) => {
        if(username=== undefined|| username=== ""||username===null)
        {
            setusernameerrormsg("Enter userName")
            setusernameerror(true)
        }
     
          if(password=== undefined|| password=== "" ||password===null)
          {
            setpassworderrormsg("Enter password")
            setpassworderror(true)
          }
     

   else if (username === "Ashok" && password === "123456") {
        //  setRedirect(true)
        //  const navigate = useNavigate();
 navigate('/menu', { state: {  username :username} });
// navigate('/menu');
          }
          else {
            toggleDrawer(anchor, true)
              alert("Invalid login Credentials")
          }
        }
const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
   if(keyPressed !== 0)
   {
       return
   }
    setState({ ...state, [anchor]: open });
  };
//   const list = (anchor) => (
    
//     );



return (
<>
 { redirect ? <Navigate to="/menu" params={{ testvalue: "hello" }}/>: null}
   
    <Grid container >
      
      <Grid item xs={12}>
      <div className='display'>
      <Grid item xs={6}>
      <div className={classes.root}>

<div className="hottelname" >
<Grid item xs={6}>
 <div className='log'>   
 <img src={hotelImage}/> 
  
 </div>
{/* <img className="himage" src={ himage}/> <i>otel</i>
</div>
<div>
<img className="nimage"  src={ nimage}/> <i>ellai</i>  */}

</Grid>

<Grid item xs={3}></Grid>
<Grid item xs={2}>
    
<div className={classes.btns}>
    <Button 
            onClick={toggleDrawer(anchor, true)}
            
            >
    <div className='lettercolor'>Login</div>
    </Button>
    </div>
    </Grid>
    <Grid item xs={1}></Grid>
    </div>
    <div className='texttransition'>
    <TextTransitions/>
    </div>
    <p className="quotes"> Meals Memories are Made Here </p>
    <div className="logoname" >
    <Grid item xs={3}>  
    </Grid>
    <Grid item xs={1}>
        <a href="https://www.facebook.com"><img className="facebook"  src={facebook }/></a>
    
    </Grid>
    <Grid item xs={1}>  
    </Grid>
    <Grid item xs={1}>
     {/* <div className="socialicon"> */}
   
    
     <a href="https://twitter.com/"><img className="twitt"  src={twitt }/></a>
       

      

    </Grid>
    <Grid item xs={1}>  
    </Grid>
    <Grid item xs={1}>
    <a href="https://www.instagram.com/accounts/emailsignup/?hl=en"><img className="insta"  src={insta }/> </a> 
   
    </Grid>
    
    <Grid item xs={4}>
        </Grid>
        
    </div>
    <div className="addressname" >
    <Grid item xs={3}>  
    </Grid>
    <Grid item xs={5}> 
    <p>Ward No 6, Trivandrum Rd, Block 9, Vannarpettai, Tirunelveli, Tamil Nadu 627001</p> 
    </Grid>
    <Grid item xs={4}>  
    </Grid>
    </div>

    
    <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer( true)}
          >
             
      <Typography>
      <div className='close'>
                  < CloseIcon   onClick={toggleDrawer(anchor, false)} className='color' />
             </div>
          <div>
          <h2 className='loginhead'>Login </h2>
          </div>
        </Typography>
        <img className='dosaimage' src={dosa}
        //  <p className='logintext'>or login to your account </p>
       
      // onKeyDown={toggleDrawer(anchor, false)}
      // onFocus ={toggleDrawer(anchor, true)}
       />
    
    <div className="padding-down arrowdown"> 
      <Box className='drawer'
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 625 }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        // onFocus ={toggleDrawer(anchor, true)}
      >
         {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className=''>
          Login Form
        </Typography> */}
        <div className='drawlogin'>
     
        <div className="padding-down">
            <div >
          <label className={classes.textlabel}>USERNAME</label>
           <TextField 
    
           id="username"  value={username} onChange={userNameChange}
           className={classes.textinput}
           />
           </div>
           <div className="errormsg">{usernameerror?usernameerrormsg:null}</div>

    
         </div>
         <div className="padding-down">
         <label className={classes.textlabel}>PASSWORD</label>
           <TextField
          
           id="password"   className={classes.textinput} value={password} onChange={passwordChange}
           
           />
           <div className="errormsg">{passworderror?passworderrormsg:null}</div>
           </div>
           

          <div className='drawboxlogin '>
             <Button 
         onClick={submit}
             
             ><div      className="button"> LOGIN </div></Button>
             </div>
          
        </div>
      </Box>
    </div>
      <div className='backarrow'> <ArrowBackIcon onClick={toggleDrawer(anchor, false)} /> </div>
       </Drawer>
      
          

</div>
      </Grid>
      <Grid item xs={6}>
      <img className='image' src={LoginImage}/>
      </Grid>
      </div>
      </Grid>
    </Grid>
    </>
);
}
export default  HomePage 
