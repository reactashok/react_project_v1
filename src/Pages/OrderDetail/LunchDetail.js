import React,{useEffect} from 'react';
import orderImage from '../../Images/dinner.jpg';
import mealsimage from '../../Images/lunch/meals.jpg';
import Grid from '@mui/material/Grid';
import NonvegMealsimage from '../../Images/lunch/NonvegMeals.jpg';
import parrotaimage from '../../Images/lunch/parrota.jpg';
import EggBiriyaniimage from '../../Images/lunch/EggBiriyani.jpg';
import chickenbiriyaniimage from '../../Images/lunch/chickenbiriyani.jpg';
import muttonBiriyaniimage from '../../Images/lunch/muttonBiriyani.jpg';
import Chicken65image from '../../Images/lunch/Chicken 65.jpg';
import chickenGravyimage from '../../Images/lunch/chicken Gravy.jpg';
import beefbiriyaniimage from '../../Images/lunch/beefbiriyani.jpg';
import Button from "@material-ui/core/Button";
import '../../Styles/Style.css';
import { makeStyles } from '@material-ui/core/styles';
import { height } from '@mui/system';
import hotelImage from '../../Images/HotelLogo.jpg';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { jsPDF } from "jspdf";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
var itemsOrdered = [];

const useStyles = makeStyles((theme) => ({
   


    
    btns:{
       
        '& > *': {

        },
        marginTop: "10px",
        color:"white",
        backgroundColor:"black",
        marginBottom:"15px",
        marginLeft:"20px",
        
        
        
    },
   
 
}))

function LunchDetail(){
    
    const classes = useStyles();
    const[meals,setmeals] = React.useState("")
    const[totalCostofMeals,settotalCostofMeals] = React.useState(0.00)
    const[clickMealscheckbox,setclickMealsCheckbox] = React.useState()
    const[nonvegmeals,setnonvegmeals] = React.useState("")
    const[totalCostofNonvegMeals,settotalCostofNonvegMeals] = React.useState(0.00)
    const[clickNonvegMealscheckbox,setclickNonvegMealsCheckbox] = React.useState()
    const[parrota,setparrota] = React.useState("")
    const[totalCostofParrota,settotalCostofParrota] = React.useState(0.00)
    const[clickParrotacheckbox,setclickParrotaCheckbox] = React.useState()
    const[eggbiriyani,seteggbiriyani] = React.useState("")
    const[totalCostofEggBiriyani,settotalCostofEggBiriyani] = React.useState(0.00)
    const[clickEggBiriyanicheckbox,setclickEggBiriyaniCheckbox] = React.useState()
    const[chickenbiriyani,setchickenbiriyani] = React.useState("")
    const[totalCostofChickenBiriyani,settotalCostofChickenBiriyani] = React.useState(0.00)
    const[clickchickenbiriyanicheckbox,setclickchickenbiriyaniCheckbox] = React.useState()
    const[muttonbiriyani,setmuttonbiriyani] = React.useState("")
    const[totalCostofMuttonBiriyani,settotalCostofMuttonBiriyani] = React.useState(0.00)
    const[clickMuttonBiriyanicheckbox,setclickMuttonBiriyaniCheckbox] = React.useState()
    const[chicken65,setchicken65] = React.useState("")
    const[totalCostofChicken65,settotalCostofChicken65] = React.useState(0.00)
    const[clickChicken65checkbox,setclickChicken65Checkbox] = React.useState()
    const[beefbiriyani,setbeefbiriyani] = React.useState("")
    const[totalCostofBeefBiriyani,settotalCostofBeefBiriyani] = React.useState(0.00)
    const[clickBeefBiriyanicheckbox,setclickBeefBiriyaniCheckbox] = React.useState()
    const[selectedmeals,setselectedmeals] = React.useState(false)
    const[notselectedmeals,setnotselectedmeals] = React.useState(true)
    const[selectednonvegmeals,setselectednonvegmeals] = React.useState(false)
    const[notselectednonvegmeals,setnotselectednonvegmeals] = React.useState(true)
    const[selectedparrota,setselectedparrota] = React.useState(false)
    const[notselectedparrota,setnotselectedparrota] = React.useState(true)
    const[selectedeggbiriyani,setselectedeggbiriyani] = React.useState(false)
    const[notselectedeggbiriyani,setnotselectedeggbiriyani] = React.useState(true)
    const[selectedchickenbiriyani,setselectedchickenbiriyani] = React.useState(false)
    const[notselectedchickenbiriyani,setnotselectedchickenbiriyani] = React.useState(true)
    const[selectedmuttonbiriyani,setselectedmuttonbiriyani] = React.useState(false)
    const[notselectedmuttonbiriyani,setnotselectedmuttonbiriyani] = React.useState(true)
    const[selectedbeefbiriyani,setselectedbeefbiriyani] = React.useState(false)
    const[notselectedbeefbiriyani,setnotselectedbeefbiriyani] = React.useState(true)
    const[selectedchicken65,setselectedchicken65] = React.useState(false)
    const[notselectedchicken65,setnotselectedchicken65] = React.useState(true)
    const[selectedchickengravy,setselectedchickengravy] = React.useState(false)
    const[notselectedchickengravy,setnotselectedchickengravy] = React.useState(true)
    const {state} = useLocation();
const { username} = state
useEffect(() => {
    localStorage.removeItem ("itemsinlocalstorage")
   },[])
    const numberofMeals = (event) =>{
        setmeals(event.target.value)
        settotalCostofMeals(70*event.target.value)
        console.log(totalCostofMeals)
    }
    const mealscheckbox = (event) =>{
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = meals + "meals" + " " + meals + "*" + "70.00" + "=" + totalCostofMeals 
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    
    
    const numberofNonvegMeals = (event) =>{
        setnonvegmeals(event.target.value)
        
        settotalCostofNonvegMeals(175*event.target.value)
        console.log(totalCostofNonvegMeals)
    }
    const nonvegmealscheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = nonvegmeals + "nonvegmeals" + " " + nonvegmeals + "*" + "175.00" + "=" + totalCostofNonvegMeals
    
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    
    const numberofParrota = (event) =>{
        setparrota(event.target.value)
        
        settotalCostofParrota(15*event.target.value)
        console.log(totalCostofParrota)
    }
    const parrotacheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = parrota + "parrota" + " " + parrota + "*" + "15.00" + "=" + totalCostofParrota 
        
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    
    
    const numberofEggBiriyani = (event) =>{
        seteggbiriyani(event.target.value)
        
        settotalCostofEggBiriyani(80*event.target.value)
        console.log(totalCostofEggBiriyani)
    }
    const EggBiriyanicheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected =eggbiriyani + "eggbiriyani" + " " + eggbiriyani + "*" + "80.00" + "=" + totalCostofEggBiriyani
          
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }


    const numberofChickenBiriyani = (event) =>{
        setchickenbiriyani(event.target.value)

        settotalCostofChickenBiriyani(150*event.target.value)
        console.log(totalCostofChickenBiriyani)
    }
    const chickenbiriyanicheckbox = (event) =>{
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = chickenbiriyani + "chickenbiriyani" + " " + chickenbiriyani + "*" + "150.00" + "=" + totalCostofChickenBiriyani 
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }


    const numberofMuttonBiriyani = (event) =>{
        setmuttonbiriyani(event.target.value)
        
        settotalCostofMuttonBiriyani(245*event.target.value)
        console.log(totalCostofMuttonBiriyani)
    }
    const MuttonBiriyanicheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = muttonbiriyani + "muttonbiriyani" + " " + muttonbiriyani + "*" + "90.00" + "=" + totalCostofMuttonBiriyani 
            
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
      }
     }
     
    const numberofBeefBiriyani = (event) =>{
        setbeefbiriyani(event.target.value)
        
        settotalCostofBeefBiriyani(170*event.target.value)
        console.log(totalCostofBeefBiriyani)
    }
    const beefbiriyanicheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = beefbiriyani + "beefbiriyani" + " " + beefbiriyani + "*" + "45.00" + "=" + totalCostofBeefBiriyani 
            
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    
    const numberofChicken65 = (event) =>{
        setchicken65(event.target.value)
        
        settotalCostofChicken65(95*event.target.value)
        console.log(totalCostofChicken65)
    }
    const chicken65checkbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = chicken65 + "chicken65" + " " + chicken65 + "*" + "25.00" + "=" + totalCostofChicken65 
            
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    const[chickengravy,setchickengravy] = React.useState("")
    const[totalCostofChickenGravy,settotalCostofChickenGravy] = React.useState(0.00)
    const[clickChickenGravycheckbox,setclicChickenGravyCheckbox] = React.useState()
    const numberofChickenGravy = (event) =>{
        setchickengravy(event.target.value)
         
        settotalCostofChickenGravy(120*event.target.value)
        console.log(totalCostofChickenGravy)
    }
    const chickengravycheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = chickengravy + "chickengravy" + " " + chickengravy + "*" + "10.00" + "=" + totalCostofChickenGravy 

            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    const clickaddmeals =()=>{
        var x= document.getElementById("meals").name
        if(x==="add"){
            if(meals>0){
        setselectedmeals(true)
        setnotselectedmeals(false)
        var itemsOrdered={
            name  :"Meals",
            total :totalCostofMeals,
            price : 45,
            qty   :meals,
            id    :10,
}
if(localStorage.getItem("itemsinlocalstorage")==="" || localStorage.getItem("itemsinlocalstorage")=== undefined|| localStorage.getItem("itemsinlocalstorage")=== null)
 
{var tick=[]
    }
    else{
        var tick= JSON.parse(localStorage.getItem("itemsinlocalstorage"))
    }
    tick.push(itemsOrdered)
    localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please Select Items")
}
}
    else{
        setselectedmeals(false)
        setnotselectedmeals(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""|| localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0; i<check.length;i++){
                if(check[i].id===10){
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                }
            }
        }


    }
}
const clickaddnonvegmeals =()=>{
    var x= document.getElementById("nonvegmeals").name
    if(x==="add"){
        if(nonvegmeals>0){
        setselectednonvegmeals(true)
        setnotselectednonvegmeals(false)
        var itemsOrdered={
            name  :"nonvegmeals",
            total :totalCostofNonvegMeals,
            price :175,
            qty   :nonvegmeals,
            id    :11,
}
if(localStorage.getItem("itemsinlocalstorage")=== ""|| localStorage.getItem("itemsinlocalstorage")=== undefined|| localStorage.getItem("itemsinlocalstorage")=== null)
 {
    var tick=[]
}
  else{
      var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
  }
  tick.push(itemsOrdered)
  localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please Select Items")
}
    }
    else{
        setselectednonvegmeals(false)
        setnotselectednonvegmeals(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""|| localStorage.getItem("itemsinlocalstorage")!==undefined|| localStorage.getItem("itemsinlocalstorage")!==null ){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
                if(check[i].id===11){
                 check.splice(i,1)
                 var removeditems=[]
                 removeditems=check
                 localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                }
            }
        }

    }
}
const clickaddparrota =()=>{
    var x= document.getElementById("parrota").name
    if(x==="add"){
        if(parrota>0){
        setselectedparrota(true)
        setnotselectedparrota(false)
        var itemsOrdered={
            name  :"Parrota",
            total :totalCostofParrota,
            price : 15,
            qty   :parrota,
            id    :12,
} 
if(localStorage.getItem("itemsinlocalstorage")===""||localStorage.getItem("itemsinlocalstorage")===undefined|| localStorage.getItem("itemsinlocalstorage")===null)
{
    var tick=[]
}  
else{
var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
    }
    tick.push(itemsOrdered)
    localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please Select Items")
}
}
    else{
        setselectedparrota(false)
        setnotselectedparrota(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined|| localStorage.getItem("itemsinlocalstorage")!==null){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
                if(check[i].id===12){
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                }
            }
        }
    }
}
const clickaddeggbiriyani =()=>{
    var x= document.getElementById("eggbiriyani").name
    if(x==="add"){
        if(eggbiriyani>0){
        setselectedeggbiriyani(true)
        setnotselectedeggbiriyani(false)
        var itemsOrdered={
            name  :"eggbiriyani",
            total :totalCostofEggBiriyani,
            price : 80,
            qty   :eggbiriyani,
            id    :13,
} 
if(localStorage.getItem("itemsinlocalstorage")=== ""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null)
{
    var tick=[]
}
else{
    var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
}
tick.push(itemsOrdered)
localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please Select Items")
}
    }
    else{
        setselectedeggbiriyani(false)
        setnotselectedeggbiriyani(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
                if(check[i].id===13){
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                }
            }
        }
    }
}
const clickaddchickenbiriyani =()=>{
    var x= document.getElementById("chickenbiriyani").name
    if(x==="add"){
        if(chickenbiriyani>0){
        setselectedchickenbiriyani(true)
        setnotselectedchickenbiriyani(false)
        var itemsOrdered={
            name  :"chickenbiriyani",
            total :totalCostofChickenBiriyani,
            price  :150,
            qty   :chickenbiriyani,
            id    :14,
} 
if(localStorage.getItem("itemsinlocalstorage")===""||localStorage.getItem("itemsinlocalstorage")=== undefined|| localStorage.getItem("itemsinlocalstorage")=== null)
{
    var tick=[]
}
else{
var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
    }
    tick.push(itemsOrdered)
    localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please select items")
}
}
    else{
        setselectedchickenbiriyani(false)
        setnotselectedchickenbiriyani(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
                if(check[i].id===14){
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                }
            }
        }
    }
}
const clickaddmuttonbiriyani =()=>{
    var x= document.getElementById("muttonbiriyani").name
    if(x==="add"){
        if(muttonbiriyani>0){
    setselectedmuttonbiriyani(true)
    setnotselectedmuttonbiriyani(false)
    var itemsOrdered={
        name  :"muttonbiriyani",
        total :totalCostofMuttonBiriyani,
        price    :245,
        qty   :muttonbiriyani,
        id    :15,
} 
if(localStorage.getItem("itemsinlocalstorage")=== undefined|| localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")===null)
{
    var tick=[]
}
else{
    var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
}
tick.push(itemsOrdered)
localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("please select items")
}
}
else{
    setselectedmuttonbiriyani(false)
    setnotselectedmuttonbiriyani(true)
    var check=[]
    if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
        check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
        for(var i=0;i<check.length;i++){
            if(check[i].id===15){
                check.splice(i,1)
                var removeditems=[]
                removeditems=check
                localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
            }
        }
    }
}
}
const clickaddbeefbiriyani =()=>{
    var x= document.getElementById("beefbiriyani").name
    if(x==="add"){
        if(beefbiriyani>0){
        setselectedbeefbiriyani(true)
        setnotselectedbeefbiriyani(false)
        var itemsOrdered={
            name  :"beefbiriyani",
            total :totalCostofBeefBiriyani,
            price    :170,
            qty   :beefbiriyani,
            id    :16,
    } 
    if(localStorage.getItem("itemsinlocalstorage")===""||localStorage.getItem("itemsinlocalstorage")===undefined ||localStorage.getItem("itemsinlocalstorage")===null)
    {
        var tick=[]
    }
    else{

    var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
}
  tick.push(itemsOrdered)
  localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please Select Items")
}
    }
    else{
        setselectedbeefbiriyani(false)
        setnotselectedbeefbiriyani(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            var i=[]
            for(i=0;i<check.length;i++){
                if(check[i].id===16){
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                }
            }
        }
    }
}
const clickaddchicken65 =()=>{
    var x= document.getElementById("chicken65").name
    if(x==="add"){
        if(chicken65>0){
        setselectedchicken65(true)
        setnotselectedchicken65(false)
        var itemsOrdered={
            name  :"chicken65",
            total :totalCostofChicken65,
            price    :95,
            qty   :chicken65,
            id    :17,
    } 
    if(localStorage.getItem("itemsinlocalstorage")===""||localStorage.getItem("itemsinlocalstorage")===undefined ||localStorage.getItem("itemsinlocalstorage")===null)
{
    var tick=[]
}   
else{
    var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
}
tick.push(itemsOrdered)
localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please Sedlect Items")
}
}
    else{
        setselectedchicken65(false)
        setnotselectedchicken65(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage){
            var check= JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
                if(check[i].id===17){
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem('itemsinlocalstorage',JSON.stringify(removeditems))

                }
            }

        }
    }
}
const clickaddchickengravy =()=>{
    var x= document.getElementById("chickengravy").name
    if(x==="add"){
        if(chickengravy>0){
        setselectedchickengravy(true)
        setnotselectedchickengravy(false)
        var itemsOrdered={
            name  :"chickengravy",
            total :totalCostofChickenGravy,
            price :120,
            qty   :chickengravy,
            id    :18,
    } 
    if(localStorage.getItem("itemsinlocalstorage")===""||localStorage.getItem("itemsinlocalstorage")===undefined ||localStorage.getItem("itemsinlocalstorage")===null)
{ 
    var tick=[]
}    
else{
    var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
}
tick.push(itemsOrdered)
localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
}
else{
    alert("Please Select Items")
}
}
    else{
        setselectedchickengravy(false)
        setnotselectedchickengravy(true)
        var check=[]
     if(localStorage.getItem("itemsinlocalstorage") !== "" || localStorage.getItem("itemsinlocalstorage")!== undefined || localStorage.getItem("itemsinlocalstorage")!== null)
     {
        check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
        console.log(check,"arry befor deletion")

        for(var i=0; i<check.length; i++){
            console.log(check[i]);
        if(check[i].id===18){
       check.splice(i,1)
       console.log(check,"arry after deletion")
       var removeditems=[]
       removeditems=check
       localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
        }
        }

     }


    }
}

const getRowStyle = params => {
    if (params.node.rowIndex % 2 === 0) {
        return { background: ' #e66a2c' };
    }
};
const pdf =()=>
{ const input = document.getElementById("pdf-element");
const pdf = new jsPDF({ unit: "px", format: "letter", userUnit: "px" });
pdf.html(input, { html2canvas: { scale: 0.57 } }).then(() => {
pdf.save("test.pdf");
});

}
function getFields(input, field) {
var output = [];
for (var i=0; i < input.length ; ++i)
    output.push(input[i][field]);
return output;
}


const reducer = (accumulator, curr) => accumulator + curr;  


return(

<div>

<Grid item xs={12}> 
     <div style={{display:"flex"}}>
     <Grid item xs={3}>
     <img style={{height :"50px"}} src={hotelImage}/> </Grid>
     <Grid item xs={3}> </Grid>
     <Grid item xs={3}> </Grid>
     <Grid item xs={3}> <div className='propsname'>Welcome  {state.username}</div> </Grid>
     </div>
     </Grid>


<Grid container >
<Grid item xs={12}>
<div style={{ display:'flex'}}>
<Grid item xs={8}>
        <Grid item xs={12}>
        <div className='flex'>
            <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='meals' src={mealsimage}></img></div> 
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Meals</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs70.00</p>

    </div>
  
    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number' disabled={selectedmeals} min="0" id="checked" value={meals} onChange={numberofMeals} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofMeals} </p>
    </div>
  {notselectedmeals && <div className={classes.btns}>
    
        <Button 
           onClick={clickaddmeals}
           id="meals"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedmeals &&  <div className={classes.btns}>
    
    <Button 
       onClick={clickaddmeals}
       id="meals"
       name="Remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
    </div>
    </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='NonvegMeals' src={ NonvegMealsimage}></img></div> 
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Non Veg Meals</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs175.00</p>

    </div>
  
    </div>
    <div className='foodnamedisplay'>
    <div >
   
   <input type='number'disabled={selectednonvegmeals} min="0" id="checked" value={nonvegmeals} onChange={numberofNonvegMeals} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofNonvegMeals} </p>
    </div>
 {notselectednonvegmeals &&   <div className={classes.btns}>
    
        <Button 
           onClick={clickaddnonvegmeals}
           id="nonvegmeals"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectednonvegmeals &&   <div className={classes.btns}>
    
        <Button 
           onClick={clickaddnonvegmeals}
           id="nonvegmeals"
           name="Remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='parrota' src={parrotaimage}></img> </div> 
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Parrota</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs15.00</p>

    </div>

    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number'disabled={selectedparrota} min="0" id="checked"value={parrota} onChange={numberofParrota} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofParrota} </p>
    </div>
  {notselectedparrota &&  <div className={classes.btns}>
    
        <Button 
           onClick={clickaddparrota}
           id="parrota"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedparrota &&  <div className={classes.btns}>
    
        <Button 
           onClick={clickaddparrota}
           id="parrota"
           name="Remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        
        </div>
        </Grid>
   

        <Grid item xs={12}>
            
        <div className='flex'>
            <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='EggBiriyani' src={EggBiriyaniimage}></img></div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Egg Biriyani</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs80.00</p>

    </div>

    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number'disabled={selectedeggbiriyani} min="0" id="checked"value={eggbiriyani} onChange={numberofEggBiriyani} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofEggBiriyani} </p>
    </div>
  {notselectedeggbiriyani &&  <div className={classes.btns}>
        
        <Button 
           onClick={clickaddeggbiriyani}
           id="eggbiriyani"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedeggbiriyani &&  <div className={classes.btns}>
        
        <Button 
           onClick={clickaddeggbiriyani}
           id="eggbiriyani"
           name="Remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='chickenbiriyani' src={chickenbiriyaniimage}></img> </div> <div className='foodnamedisplay'>
        
        <div >

   <p>Chicken Biriyani</p>

</div>
<div className='paddingleftprice'>

    <p>Rs150.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div>

<input type='number'disabled={selectedchickenbiriyani} min="0" id="checked" value={chickenbiriyani} onChange={numberofChickenBiriyani} className='inputnumberpoint' />

</div>
<div className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofChickenBiriyani} </p>
</div>
 {notselectedchickenbiriyani && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddchickenbiriyani}
       id="chickenbiriyani"
       name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedchickenbiriyani && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddchickenbiriyani}
       id="chickenbiriyani"
       name="Remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
</div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='muttonBiriyani' src={muttonBiriyaniimage}></img></div> <div className='foodnamedisplay'>
        
        <div>

   <p>Mutton Biriyani</p>

</div>
<div className='paddingleftprice'>

    <p>Rs245.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div>

<input type='number'disabled={selectedmuttonbiriyani} min="0" id="checked"value={muttonbiriyani} onChange={numberofMuttonBiriyani} className='inputnumberpoint' />

</div>
<div className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofMuttonBiriyani} </p>
</div>
{notselectedmuttonbiriyani && <div className={classes.btns}>
    
    <Button 
      onClick={clickaddmuttonbiriyani} 
      id="muttonbiriyani"
      name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedmuttonbiriyani && <div className={classes.btns}>
    
    <Button 
      onClick={clickaddmuttonbiriyani} 
      id="muttonbiriyani"
      name="Remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
</div></Grid>
        
        </div>
        </Grid>
    
   
        <Grid item xs={12}>
        <div className='flex'>
        <Grid item xs={1}></Grid>   
        <Grid item xs={3}> <div> <img className='beefbiriyani' src={beefbiriyaniimage}></img> </div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Beef Biriyani</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs170.00</p>

    </div>
  
    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number' disabled={selectedbeefbiriyani} min="0" id="checked"value={beefbiriyani} onChange={numberofBeefBiriyani} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofBeefBiriyani} </p>
    </div>
    {notselectedbeefbiriyani && <div className={classes.btns}>
        
        <Button 
           onClick={clickaddbeefbiriyani}
           id="beefbiriyani"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedbeefbiriyani && <div className={classes.btns}>
        
        <Button 
           onClick={clickaddbeefbiriyani}
           id="beefbiriyani"
           name="Remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}

    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='Chicken65' src={Chicken65image}></img></div><div className='foodnamedisplay'>
        
        <div >

   <p>Chicken 65</p>

</div>
<div className='paddingleftprice'>

    <p>Rs95.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div>

<input type='number'disabled={selectedchicken65} min="0" id="checked"value={chicken65} onChange={numberofChicken65} className='inputnumberpoint' />

</div>
<div className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofChicken65} </p>
</div>
{notselectedchicken65 && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddchicken65}
       id="chicken65"
       name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedchicken65 && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddchicken65}
       id="chicken65"
       name="Remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
</div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}><div><img className='chickenGravy' src={chickenGravyimage}></img></div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Chicken Gravy </p>
  
   </div>
   <div className='paddingleftprice ' >
    
        <p>Rs120.00</p>

    </div>
  
    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number'disabled={selectedchickengravy} min="0" id="checked"value={chickengravy} onChange={numberofChickenGravy} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofChickenGravy} </p>
    </div>
  { notselectedchickengravy &&  <div className={classes.btns}>
    
        <Button 
           onClick={clickaddchickengravy}
           id="chickengravy"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    { selectedchickengravy &&  <div className={classes.btns}>
    
        <Button 
           onClick={clickaddchickengravy}
           id="chickengravy"
           name="Remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>

        </div>
        </Grid>
        </Grid>
        
        <Grid item xs={4}>
            {JSON.parse(localStorage.getItem("itemsinlocalstorage"))!==null?
           <div id="pdf-element"> 
           <div className='invoiceimg'><img  src={hotelImage}/> </div>
           <p className='invoice'>Invoice</p>
        <div className="ag-theme-alpine" style={{height: 300, width: 400, marginLeft:100}}> 
        
           <AgGridReact
                rowData={JSON.parse(localStorage.getItem("itemsinlocalstorage"))}
                getRowStyle={getRowStyle}
                >
                <AgGridColumn  field="name"></AgGridColumn>
               
                <AgGridColumn width="60px" field="qty"></AgGridColumn>
                <AgGridColumn width="69px" field="price"></AgGridColumn>
                <AgGridColumn width="69px" field="total"></AgGridColumn>
           </AgGridReact>
          <div className='flexes'> <p>Total : </p>
           <p>
               <></>
{getFields(JSON.parse(localStorage.getItem("itemsinlocalstorage")), "total").reduce(reducer)}</p>
</div>
<p className='eatquote'>Eat As Much As You Like!</p>
<button className='pdfbutton' onClick={pdf}>Pdf</button>
   
           </div>
       </div>: null}
       
            </Grid>
        </div>



        </Grid>
    </Grid>
</div>
)

}

export default  LunchDetail