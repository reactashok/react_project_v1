import React, { useState, useEffect } from 'react';
import orderImage from '../../Images/dinner.jpg';
import idlyimage from '../../Images/breakfastimage/idly3.jpg';
import Grid from '@mui/material/Grid';
import  dosaimage from'../../Images/breakfastimage/dosa.jpg';
import gheepodiIdlyimage from '../../Images/breakfastimage/gheepodiIdly.jpg';
import GheeRoastimage from '../../Images/breakfastimage/GheeRoast.jpg';
import kadubuIdlyimage from '../../Images/breakfastimage/kadubuIdly.jpg';
import oniondosaimage from '../../Images/breakfastimage/oniondosa.jpg';
import pongalimage from '../../Images/breakfastimage/pongal.jpg';
import pooriimage from '../../Images/breakfastimage/poori.jpg';
import ulluthavadaiimage from '../../Images/breakfastimage/ulluthavadai.jpg';
import Button from "@material-ui/core/Button";
import '../../Styles/Style.css';
import { makeStyles } from '@material-ui/core/styles';
import { height } from '@mui/system';
import hotelImage from '../../Images/HotelLogo.jpg'
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import { CheckSharp } from '@mui/icons-material';
import Invoice from '../Invoice/Invoice';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { jsPDF } from "jspdf";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const html2canvas = require('html2canvas');
const { onePageCanvas } = require('canvas')
var itemsOrdered = [];

const useStyles = makeStyles((theme) => ({
   


    
    btns:{
       
        '& > *': {
        
        },
        marginTop: "12px",
        color:"white",
        backgroundColor:"black",
        marginBottom:"11px",
       
        
        
    },
   
 
}))

function BreakfastDetail(){
    
    const classes = useStyles();
    const[idly,setidly] = React.useState("")
    const[totalCostofIdly,settotalCostofIdly] = React.useState(0.00)
    const[clickIdlycheckbox,setclickIdlyCheckbox] = React.useState()
    const[dosa,setdosa] = React.useState("")
    const[totalCostofDosa,settotalCostofDosa] = React.useState(0.00)
    const[clickDosacheckbox,setclickDosaCheckbox] = React.useState()
    
    const[gheepodiidly,setgheepodiidly] = React.useState("")
    const[totalCostofGheePodiIdly,settotalCostofGheePodiIdly] = React.useState(0.00)
    const[clickGheePodiIdlycheckbox,setclickGheePodiIdlyCheckbox] = React.useState()
    const[gheeroast,setgheeroast] = React.useState("")
    const[totalCostofGheeRoast,settotalCostofGheeRoast] = React.useState(0.00)
    const[clickGheeRoastcheckbox,setclickGheeRoastCheckbox] = React.useState()
    const[kadubuidly,setkadubuidly] = React.useState("")
    const[totalCostofkadubuIdly,settotalCostofkadubuIdly] = React.useState(0.00)
    const[clickkadubuidlycheckbox,setclickkadubuidlyCheckbox] = React.useState()
    const[oniondosa,setoniondosa] = React.useState("")
    const[totalCostofOnionDosa,settotalCostofOnionDosa] = React.useState(0.00)
    const[clickOnionDosacheckbox,setclickOnionDosaCheckbox] = React.useState()
    const[pongal,setpongal] = React.useState("")
    const[totalCostofPongal,settotalCostofPongal] = React.useState(0.00)
    const[clickPongalcheckbox,setclickPongalCheckbox] = React.useState()
    const[poori,setpoori] = React.useState("")
    const[totalCostofPoori,settotalCostofPoori] = React.useState(0.00)
    const[clickPooricheckbox,setclickPooriCheckbox] = React.useState()
    const[selected,setselected] = React.useState(false)
    const[notselected,setnotselected] = React.useState(true)
    const [selecteddosa,setselecteddosa] = React.useState(false)
    const [notselecteddosa, setnotselecteddosa] = React.useState(true)
    const [selectedpodiidly,setselectedpodiidly] = React.useState(false)
    const[notselectedpodiidly,setnotselectedpodiidly] = React.useState(true)
    const[selectedgheeroast,setselectedgheeroast] = React.useState(false)
    const[notselectedgheeroast,setnotselectedgheeroast] = React.useState(true)
    const[selectedkadubuidly,setselectedkadubuidly] = React.useState(false)
    const[notselectedkadubuidly,setnotselectedkadubuidly] = React.useState(true)
    const[selectedoniondosa,setselectedoniondosa] = React.useState(false)
    const[notselectedoniondosa,setnotselectedoniondosa] = React.useState(true)
    const[selectedpongal,setselectedpongal ] = React.useState(false)
    const[notselectedpongal,setnotselectedpongal] = React.useState(true)
    const[selectedpoori,setselectedpoori] = React.useState(false)
    const[notselectedpoori,setnotselectedpoori] = React.useState(true)
    const[selectedulluthuvadai,setselectedulluthuvadai] = React.useState(false)
    const[notselectedulluthuvadai,setnotselectedulluthuvadai] = React.useState(true)
    const {state} = useLocation();
const { username} = state
   
useEffect(() => {
 localStorage.removeItem ("itemsinlocalstorage")
},[])
    const numberofIdly = (event) =>{
        setidly(event.target.value)
        
        settotalCostofIdly(7*event.target.value)
        
    }
    const idlycheckbox = (event) =>{
      
    
        if(event.target.checked)
        {
          
           var itemsSelected = idly + "idly" + " " + idly + "*" + "7.00" + "=" + totalCostofIdly 
        
            itemsOrdered.push(JSON.stringify(itemsSelected))
            
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    
   
    const numberofDosa = (event) =>{
        setdosa(event.target.value)
        settotalCostofDosa(45*event.target.value)
     
    }
    const dosacheckbox = (event) =>{

       
        if(event.target.checked)
        {
          
           var itemsSelected = dosa + "dosa" + " " + dosa + "*" + "45.00" + "=" + totalCostofDosa
          
            localStorage.setItem(idly + "dosa" + " " + dosa + "*" + "45.00" + "=" + totalCostofDosa)
     
            itemsOrdered.push(JSON.stringify(itemsSelected))
           
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    const numberofGheePodiIdly = (event) =>{
        setgheepodiidly(event.target.value)
         
        settotalCostofGheePodiIdly(70*event.target.value)
   
    }
    const gheepodiidlycheckbox = (event) =>{
    
      
        if(event.target.checked)
        {
          
           var itemsSelected = gheepodiidly + "gheepodiidly" + " " + gheepodiidly + "*" + "45.00" + "=" + totalCostofGheePodiIdly
          
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
      
      
    
    
   
    const numberofGheeRoast = (event) =>{
        setgheeroast(event.target.value)
        
        settotalCostofGheeRoast(80*event.target.value)
        console.log(totalCostofGheeRoast)
    }
    const GheeRoastcheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected =gheeroast + "gheeroast" + " " + gheeroast + "*" + "80.00" + "=" + totalCostofDosa

            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    
    const numberofkadubuIdly = (event) =>{
        setkadubuidly(event.target.value)
        
        settotalCostofkadubuIdly(60*event.target.value)
        console.log(totalCostofkadubuIdly)
    }
    const kadubuidlycheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = kadubuidly + "kadubuidly" + " " + kadubuidly + "*" + "60.00" + "=" + totalCostofkadubuIdly 
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    
    const numberofOnionDosa = (event) =>{
        setoniondosa(event.target.value)
        
        settotalCostofOnionDosa(90*event.target.value)
        console.log(totalCostofIdly)
    }
    const OnionDosacheckbox = (event) =>{

        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = oniondosa + "oniondosa" + " " + oniondosa + "*" + "90.00" + "=" + totalCostofOnionDosa 

            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
      }
     }
    
    const numberofPongal = (event) =>{
        setpongal(event.target.value)
        
        settotalCostofPongal(45*event.target.value)
        console.log(totalCostofPongal)
    }
    const pongalcheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = pongal + "pongal" + " " + pongal + "*" + "45.00" + "=" + totalCostofPongal 
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    
    const numberofPoori = (event) =>{
        setpoori(event.target.value)
        
        settotalCostofPoori(25*event.target.value)
        console.log(totalCostofPoori)
    }
    const pooricheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = poori + "poori" + " " + poori + "*" + "25.00" + "=" + totalCostofPoori 
        
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    const[ulluthuvadai,setulluthuvadai] = React.useState("")
    const[totalCostofUlluthuVadai,settotalCostofUlluthuVadai] = React.useState(0.00)
    const[clickUlluthuVadaicheckbox,setclickUlluthuVadaiCheckbox] = React.useState()
    const numberofUlluthuVadai = (event) =>{
        setulluthuvadai(event.target.value)
        
        settotalCostofUlluthuVadai(10*event.target.value)
        console.log(totalCostofUlluthuVadai)
    }
    const ulluthuvadaicheckbox = (event) =>{
       
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = ulluthuvadai + "ulluthuvadai" + " " + ulluthuvadai + "*" + "10.00" + "=" + totalCostofUlluthuVadai 
            
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
 const onClickAddIdly = () =>{
     console.log("came")
     var x= document.getElementById("idly").name
     console.log(x)
     if(x==="Add"){
         if(idly>0){

        
        console.log("came inside add")
     setselected(true)
     setnotselected(false)
    var itemsOrdered={
          total:totalCostofIdly,
          name:"Idly",
          price:7,
          id:1,
          qty:idly
    }
   if(localStorage.getItem("itemsinlocalstorage")=== "" ||localStorage.getItem("itemsinlocalstorage")=== undefined  ||localStorage.getItem("itemsinlocalstorage")=== null){
       var tick=[]
   }
   else{
      var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
   }
   tick.push(itemsOrdered)
   localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick) )

     }
     else{
         alert("please Select Items")
     }
    }
     else
     {  console.log("came inside else")
         setnotselected(true)
         setselected(false)
         var check=[]
         if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
             check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
             for(var i=0;i<check.length;i++){
                 if(check[i].id===1){
                     check.splice(i,1)
                     var removeditems=[]
                     removeditems=check
                     localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                 }
             }
         }
     }
 }
 const onClickAddDosa =() =>{
     var x= document.getElementById("Dosa").name
     if(x==="Add"){
         if(dosa>0){
         setselecteddosa(true)
         setnotselecteddosa(false)
         var itemsOrdered={
             name  :"Dosa",
             total :totalCostofDosa,
              price:45,
             qty   :dosa,
             id    :2,
 }
 if(localStorage.getItem("itemsinlocalstorage")=== "" || localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null){
     var tick=[]
 }
 else{
     var tick=JSON.parse (localStorage.getItem("itemsinlocalstorage"))
 }
 tick.push(itemsOrdered)
 localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick) )
}
else{
    alert("please Select Items")
}

     }
     else {
         setnotselecteddosa(true)
         setselecteddosa(false)
         var check=[]
         if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null ){
             check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
             for(var i=0;i<check.length;i++){
                 if(check[i].id===2){
                     check.splice(i,1)
                     var removeditems=[]
                     removeditems=check
                     localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                 }
             }
         }
     }
     
 }
 const onclickaddpodiidly =() =>{
     var x= document.getElementById("podiidly").name
     if(x==="add"){
         if(gheepodiidly>0){
         setselectedpodiidly(true)
         setnotselectedpodiidly(false)
         var itemsOrdered={
            name  :"gheepodiidly",
            total :totalCostofGheePodiIdly,
            price:  70,
            qty   :gheepodiidly,
            id    :3,
         }
         if(localStorage.getItem("itemsinlocalstorage")===" " || localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null){
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
         setselectedpodiidly(false)
         setnotselectedpodiidly(true)
         var check=[]
         if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
             check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
             for(var i=0;i<check.length;i++){
                 if(check[i].id===3){
                     check.splice(i,1)
                     var removeditems=[]
                     removeditems=check
                     localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                 }
             }

         }
     }
 }
 const onclickaddgheeroast = () =>{
     var x= document.getElementById("gheeroast").name
     if(x==="add"){
         if(gheeroast>0){
        setselectedgheeroast(true)
        setnotselectedgheeroast(false)
        var itemsOrdered={
            name  :"GheeRoast",
            total :totalCostofGheeRoast,
            price: 80,
            qty   :gheeroast,
            id    :4,
        }
        if(localStorage.getItem("itemsinlocalstorage")===""||localStorage.getItem("itemsinlocalstorage")=== undefined|| localStorage.getItem("itemsinlocalstorage")===null ){
            var tick=[]
        }
        else{
        var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
    }
       tick.push(itemsOrdered)
       localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
    }
    else{
        alert("please Select Items")
    }
     }
     else{
         setselectedgheeroast(false)
         setnotselectedgheeroast(true)
         var check=[]
         if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
             check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
             for(var i=0;i<check.length;i++){
                 if(check[i].id===4){
                     check.splice(i,1)
                     var removeditems=[]
                     removeditems=check
                     localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                 }
             }

         }
     }
 }
 const onclickaddkadubuidly =()=>{
     var x= document.getElementById("kadubuidly").name
     if(x==="add"){
         if(kadubuidly>0){
        setselectedkadubuidly(true)
        setnotselectedkadubuidly(false)
        var itemsOrdered={
            name  :"Kadubu Idly",
            total :totalCostofkadubuIdly,
            price: 60,
            qty   :gheepodiidly,
            id    :5,
     }
     if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")===null){
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
        setselectedkadubuidly(false)
        setnotselectedkadubuidly(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null ){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
             if(check[i].id===5){
                 check.splice(i,1)
                 var removeditems=[]
                 removeditems=check
                 localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
             }
            }
            
        }
     }
 }
 const onclickaddoniondosa =() =>{
     var x= document.getElementById("oniondosa").name
     if(x==="add"){
         if(oniondosa>0){
        setselectedoniondosa(true)
        setnotselectedoniondosa(false)
        var itemsOrdered={
            name  :"oniondosa",
            total :totalCostofOnionDosa,
            price :90,
            qty   :oniondosa,
            id    :6,
     }
     if(localStorage.getItem("itemsinlocalstorage")=== ""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null){
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
        setselectedoniondosa(false)
        setnotselectedoniondosa(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined|| localStorage.getItem("itemsinlocalstorage")!==null ){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
                if(check[i].id===6)
                check.splice(i,1)
                var removeditems=[]
                removeditems=check
                localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
            }


        }
     }
 }
 const onclickaddpongal =()=>{
     var x= document.getElementById("pongal").name
     if(x==="add"){
         if(pongal>0){
        setselectedpongal(true)
        setnotselectedpongal(false)
        var itemsOrdered={
            name  :"pongal",
            total :totalCostofPongal,
             price:45,
            qty   :pongal,
            id    :7,
     }
     if(localStorage.getItem("itemsinlocalstorage")==="" || localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")===null){
         var tick=[]
     }
     else{
         var tick=JSON.parse (localStorage.getItem("itemsinlocalstorage"))
     }
       tick.push(itemsOrdered)
       localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
    }
    else{
        alert("Please Select Items")
    }
     }
     else{
         setselectedpongal(false)
         setnotselectedpongal(true)
         var check=[]
         if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null ){
             check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
             for(var i=0;i<check.length;i++){
                 if(check[i].id===7){
                     check.splice(i,1)
                     var removeditems=[]
                     removeditems=check
                     localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                 }
             }
         }
     }
 }
const clickaddpoori =()=>{
    var x= document.getElementById("poori").name
    if(x==="add"){
        if(poori>0){
        setselectedpoori(true)
        setnotselectedpoori(false)
        var itemsOrdered={
            name  :"poori",
            total :totalCostofOnionDosa,
            price :  25,
            qty   :poori,
            id    :8,
     }
     if(localStorage.getItem("itemsinlocalstorage")==="" || localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")===null){
         var tick=[]
     }
     else{
         var tick=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
     }
     tick.push(itemsOrdered)
     localStorage.setItem("itemsinlocalstorage",JSON.stringify(tick))
    }
    else{
        alert("please Select Items")
    }
    }
    else{
        setselectedpoori(false)
        setnotselectedpoori(true)
        var check=[]
        if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
            check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
            for(var i=0;i<check.length;i++){
                if(check[i].id===8){
                check.splice(i,1)
                var removeditems=[]
                removeditems=check
                localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
            }
        }

        }
    }
}
const clickonaddulluthuvadai =()=>{
    var x= document.getElementById("ulluthuvadai").name
    if(x==="add"){
        if(ulluthuvadai>0){
        setselectedulluthuvadai(true)
        setnotselectedulluthuvadai(false)
        var itemsOrdered={
            name  :"ulluthuvadai",
            total :totalCostofUlluthuVadai,
           price : 10,
            qty  :ulluthuvadai,
            id    :9,
     }
     if(localStorage.getItem("itemsinlocalstorage")==="" || localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null){
         var tick=[]
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
    setselectedulluthuvadai(false)
    setnotselectedulluthuvadai(true)
    var check=[]
    if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null ){
        check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
        for(var i=0;i<check.length;i++){
            if(check[i].id===9){
                check.splice(i,1)
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
{ 
//     const input = document.getElementById("pdf-element");
// const pdf = new jsPDF({ unit: "px", format: "letter", userUnit: "px" });
// pdf.html(input, { html2canvas: { scale: 0.57 

// } }).then(() => {
// pdf.save("test.pdf");


// });

var pdf = new jsPDF('p', 'pt', 'a4');
pdf.html(document.getElementById('pdf-element'), {
   callback: (pdf) => {
     pdf.save('web.pdf');
   },
   background: '#000',
   format: 'PNG',
   pagesplit: true
});
}

const makePdf = ()=>
{
    var quotes = document.getElementById('pdf-element');

    html2canvas(quotes, {
        onrendered: function(canvas) {

        //! MAKE YOUR PDF
        var pdf = new jsPDF('p', 'pt', 'letter');

        for (var i = 0; i <= quotes.clientHeight/980; i++) {
            //! This is all just html2canvas stuff
            var srcImg  = canvas;
            var sX      = 0;
            var sY      = 980*i; // start 980 pixels down for every new page
            var sWidth  = 900;
            var sHeight = 980;
            var dX      = 0;
            var dY      = 0;
            var dWidth  = 900;
            var dHeight = 980;

            window.onePageCanvas = document.createElement("canvas");
            onePageCanvas.setAttribute('width', 900);
            onePageCanvas.setAttribute('height', 980);
            var ctx = onePageCanvas.getContext('2d');
            // details on this usage of this function: 
            // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
            ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

            // document.body.appendChild(canvas);
            var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

            var width         = onePageCanvas.width;
            var height        = onePageCanvas.clientHeight;

            //! If we're on anything other than the first page,
            // add another page
            if (i > 0) {
                pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
            }
            //! now we declare that we're working on that page
            pdf.setPage(i+1);
            //! now we add content to that page!
            pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));

        }
        //! after the for loop is finished running, we save the pdf.
        pdf.save('test.pdf');
    }
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
     <div className='paddingdown'>
<Grid container >
<Grid item xs={12}>
    <div style={{ display:'flex'}}>
        <Grid item xs={8}>
        <Grid item xs={12}>
        <div className='flex'>
            <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='idly' src={idlyimage}></img></div> 
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Idly</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs 7.00</p>

    </div>

    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number'disabled={selected} min="0" id="checked"value={idly} onChange={numberofIdly} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofIdly} </p>
    </div>
  {notselected && <div className={classes.btns}>
        <Button 
           onClick={onClickAddIdly}
           name="Add"
           id="idly"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selected && <div className={classes.btns}>
        <Button 
           onClick={onClickAddIdly}
           name="Remove"
           id="idly"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    
    </div>
    </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='dosa' src={ dosaimage}></img></div> 
        <div className='foodnamedisplay'>
        
            <div>
   
       <p>Dosa</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs 45.00</p>

    </div>

    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number'disabled={selecteddosa} min="0" id="checked"value={dosa} onChange={numberofDosa} className='inputnumberpoint' />

</div>
    <div  className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofDosa} </p>
    </div>
 {notselecteddosa &&  <div className={classes.btns}>
        <Button 
           onClick={onClickAddDosa}
           name="Add"
           id="Dosa"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selecteddosa &&  <div className={classes.btns}>
        <Button 
           onClick={onClickAddDosa}
           name="Remove"
           id="Dosa"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='podiidly' src={gheepodiIdlyimage}></img> </div> 
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>GheePodi Idly</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs70.00</p>

    </div>
   
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
   
   <input type='number' min="0" disabled={selectedpodiidly}  value={gheepodiidly} onChange={numberofGheePodiIdly} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth' >
        <p>Total :Rs.{totalCostofGheePodiIdly} </p>
    </div>
   {notselectedpodiidly && <div className={classes.btns}>
       <Button 
            onClick={onclickaddpodiidly}
            id="podiidly"
            name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedpodiidly && <div className={classes.btns}>
       <Button 
            onClick={onclickaddpodiidly}
            id="podiidly"
            name="Remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div>
    {/* </div> */}
    </Grid>
</div>
       </Grid>
   

        <Grid item xs={12}>
        <div className='flex'>
            <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='gheeroast' src={GheeRoastimage}></img></div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Ghee Roast</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs80.00</p>

    </div>
   
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
   
   <input type='number'disabled={selectedgheeroast} min="0" id="checked"value={gheeroast} onChange={numberofGheeRoast} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth' >
        <p>Total :Rs.{totalCostofGheeRoast} </p>
    </div>
   {notselectedgheeroast && <div className={classes.btns}>
        
        <Button 
           onClick={onclickaddgheeroast}
           id="gheeroast"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedgheeroast && <div className={classes.btns}>
        
        <Button 
           onClick={onclickaddgheeroast}
           id="gheeroast"
           name="remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='kadubu' src={kadubuIdlyimage}></img> </div> <div className='foodnamedisplay'>
        
        <div>

   <p>Kadubu Idly</p>

</div>
<div className='paddingleftprice'>

    <p>Rs60.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div className='paddingleft'>

<input type='number'disabled={selectedkadubuidly} min="0" id="checked"value={kadubuidly} onChange={numberofkadubuIdly} className='inputnumberpoint' />

</div>
<div  className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofkadubuIdly} </p>
</div>
   {notselectedkadubuidly  &&  <div className={classes.btns}>
    
    <Button 
       onClick={onclickaddkadubuidly}
       id="kadubuidly"
       name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedkadubuidly  &&  <div className={classes.btns}>
    
    <Button 
       onClick={onclickaddkadubuidly}
       id="kadubuidly"
       name="remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
</div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='oniondosa' src={oniondosaimage}></img></div> <div className='foodnamedisplay'>
        
        <div >

   <p>Onion Dosa</p>

</div>
<div className='paddingleftprice'>

    <p>Rs90.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div className='paddingleft'>

<input type='number'disabled={selectedoniondosa} min="0" id="checked"value={oniondosa} onChange={numberofOnionDosa} className='inputnumberpoint' />

</div>
<div  className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofOnionDosa} </p>
</div>
 {notselectedoniondosa && <div className={classes.btns}>
    <Button 
       onClick={onclickaddoniondosa}
       id="oniondosa"
       name='add'
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedoniondosa && <div className={classes.btns}>

    <Button 
       onClick={onclickaddoniondosa}
       id="oniondosa"
       name='remove'
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
        <Grid item xs={3}> <div> <img className='pongal' src={pongalimage}></img> </div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Pongal</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs45.00</p>

    </div>
   
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
   
   <input type='number'disabled={selectedpongal} min="0" id="checked"value={pongal} onChange={numberofPongal} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth' >
        <p>Total :Rs.{totalCostofPongal} </p>
    </div>
   { notselectedpongal && <div className={classes.btns}>
        
        <Button 
        onClick={onclickaddpongal} 
        id="pongal"
        name="add"  
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    { selectedpongal && <div className={classes.btns}>
        
        <Button 
        onClick={onclickaddpongal} 
        id="pongal"
        name="remove"  
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='poori' src={pooriimage}></img></div><div className='foodnamedisplay'>
        
        <div >

   <p>Poori</p>

</div>
<div className='paddingleftprice'>

    <p>Rs25.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div className='paddingleft'>

<input type='number'disabled={selectedpoori} min="0" id="checked"value={poori} onChange={numberofPoori} className='inputnumberpoint' />

</div>
<div  className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofPoori} </p>
</div>
{notselectedpoori && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddpoori}
       id="poori"
       name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedpoori && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddpoori}
       id="poori"
       name="remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
</div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}><div><img className='ulluthuvadai' src={ulluthavadaiimage}></img></div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Ulluthu Vadai</p>
  
   </div>
   <div className='paddingleftprice'>
 
        <p>Rs10.00</p>

    </div>
  
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
  
   
  <input type='number'disabled={selectedulluthuvadai} min="0" id="checked"value={ulluthuvadai} onChange={numberofUlluthuVadai} className='inputnumberpoint' />

</div>
    <div  className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofUlluthuVadai} </p>
    </div>
   {notselectedulluthuvadai &&<div className={classes.btns}>
        
        <Button 
           onClick={clickonaddulluthuvadai}
           id="ulluthuvadai"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedulluthuvadai &&<div className={classes.btns}>
        
        <Button 
           onClick={clickonaddulluthuvadai}
           id="ulluthuvadai"
           name="Remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div>
    </Grid>
   </div> 
    </Grid>  
   </Grid>
   <Grid item xs={4}>
            {JSON.parse(localStorage.getItem("itemsinlocalstorage"))!==null?
            <>
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
             
{getFields(JSON.parse(localStorage.getItem("itemsinlocalstorage")), "total").reduce(reducer)}</p>
</div>
<p className='eatquote'>Eat As Much As You Like!</p>

   
           </div>
       </div> 

      <button className='pdfbutton' onClick={pdf}>Pdf</button> 
       </>
       
       : null}
       
            </Grid>
            </div>
     </Grid>
    </Grid>
    </div>
</div>
)

}

export default  BreakfastDetail