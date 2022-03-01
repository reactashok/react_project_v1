import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';

import hotelImage from '../../Images/HotelLogo.jpg';
import breakfast from '../../Images/break4.jpg';
import lunch from '../../Images/lunch1.jpg';
import dinner from '../../Images/dinner.jpg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BreakfastTextTransitions from '../../Component/BreakfastTextTransitions';
import LunchTextTransitions from '../../Component/LunchTextTransitions';
import DinnerTextTransitions from '../../Component/DinnerTextTransitions';
import ResturantclosedTextTransitions from '../../Component/ResturantclosedTextTransitions';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

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
    btns:{
       
        '& > *': {
        margin: theme.spacing(1),
        },
        marginTop: "50px",
        color:"white",
        backgroundColor:"black",
        textAlign:"center"
        // '&$disabled': {
        //     opacity:0.5,
        //  },
        
    },
    disabledbtns :{
        "&.Mui-disabled": {
            opacity:0.5,
    },
    }
   

}))
export default function Menu(){
    const classes = useStyles();
    const navigate = useNavigate();
    const[breakfastShow,setBreakfast] = React.useState(false)
    const[lunchShow,setLunch] = React.useState(false)
    const[dinnerShow,setDinner] = React.useState(false)
    const[resturentclosed,setresturentclosed] = React.useState(false) 
    const {state} = useLocation();
const { username} = state
    
    useEffect(() => {
         console.log(state)
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;    
        var hours = today.getHours()
     console.log(hours,"hours")
     if( hours >= 6 && hours <= 24)
     {
         
     }
     if(  hours >= 7 && hours <= 11 )
     {
         setBreakfast(true)
         setLunch(false)
         setDinner(false)
         setresturentclosed (false)
         console.log("breakfast")
     }
    else if(hours >= 12 && hours <= 16 )
     {
         setBreakfast(false)
         setLunch(true)
         setDinner(false)
         setresturentclosed (false)
         console.log("lunch")
     }
    else if(hours >= 18 && hours <= 23 )
     {
         setBreakfast(false)
         setLunch(false)
         setDinner(true)
         setresturentclosed (false)
         console.log("dinner")

     }
     else{
     setresturentclosed (true)
     setBreakfast(false)
     setLunch(false)
     setDinner(false)
    }

     }
       
      );
      useEffect(() => {
        localStorage.removeItem ("itemsinlocalstorage")
        console.log("came")
       },[])
       const lunchDetails =()=>
       {
        navigate("/LunchDetail" ,{state:{username :state.username}})
       }

       const BreakfastDetail = ()=>{
           navigate("/BreakfastDetail",{state:{username : state.username}})
       }
       const DinnerDetails =()=>{
           navigate("/DinnerDetail",{state:{username :state.username}})
       }
return (
    <div>
    
     <Grid item xs={12}> 
     <div style={{display:"flex"}}>
     <Grid item xs={3}>
     <img style={{height :"50px"}} src={hotelImage}/> </Grid>
     <Grid item xs={3}> </Grid>
     <Grid item xs={3}> </Grid>
     {/* <Grid item xs={3}> <p>Welcome Ashok</p> </Grid> */}
     <Grid item xs={3}> <div className='propsname'>Welcome  {state.username}</div> </Grid>
     </div>
     </Grid>
     {/* <div className="hottelname"> */}
     <p className='brludi'> Eat breakfast Like a King, Lunch Like a Prince, and Dinner Like a Pauper</p>
     <Grid item xs={12}>
         <div className='menu' >
     <Grid item xs={1}>
         
         </Grid>
         <Grid item xs={2}>
         <img  className="break" src={breakfast}/> 
         
        
         
         </Grid>
         <Grid item xs={2}>
         
     </Grid>
     <Grid item xs={2}>
     <img className="lunch" src={lunch}/>
     
     </Grid>
     <Grid item xs={2}>
         
     </Grid>
     <Grid item xs={2}>
     <img className="dinner" src={dinner}/>
     </Grid>
     <Grid item xs={2.5}>

     </Grid>
     </div>
     </Grid>
     <Grid item xs={12}> 
     
     <div className="menulogin">
     {/* <Grid item xs={.80}></Grid> */}
     <Grid item xs={2}></Grid>
      <Grid item xs={2}> <div className={classes.btns} 
     
      ><Button 
            onClick={BreakfastDetail}
            // onClick={toggleDrawer(anchor, true)}
            className={classes.disabledbtns}
            disabled={dinnerShow || lunchShow || resturentclosed}  
            >
    <div className='lettercolor'>BREAKFAST</div>
    </Button> </div> </Grid>
    {/* <Grid item xs={2.60}></Grid> */}
    <Grid item xs={2}></Grid>
      <Grid item xs={2}>
      <div className={classes.btns}><Button 
            // onClick={toggleDrawer(anchor, true)}
            disabled={dinnerShow || breakfastShow ||resturentclosed} 
            className={classes.disabledbtns}
            onClick={lunchDetails}
            >
    <div className='lettercolor'>LUNCH</div>
    </Button>
    </div>
      </Grid>
      {/* <Grid item xs={2.60}></Grid> */}
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
      <div className={classes.btns}>

      <Button 
            // onClick={toggleDrawer(anchor, true)}
            className={classes.disabledbtns}
            disabled={lunchShow || breakfastShow || resturentclosed}
            onClick={DinnerDetails}
            >
    <div className='lettercolor'>DINNER</div>
    </Button>
    </div>
      </Grid>
      <Grid item xs={2}></Grid>
      </div>
     </Grid>
     <div className="foodtext">
     <div> 
     {breakfastShow ?  <BreakfastTextTransitions/>:null}
        
     </div>
     <div>
        {lunchShow? <LunchTextTransitions/> :null}

     </div>
     <div> 
     {dinnerShow ?<DinnerTextTransitions/> :null}
     </div>
     {/* </div> */}
     <div>
         {resturentclosed? <ResturantclosedTextTransitions/> :null}
     </div>
     </div>

    
    </div>
)
}