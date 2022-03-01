import React,{useEffect} from 'react';
import orderImage from '../../Images/dinner.jpg';
import chappathiimage from '../../Images/dinner/Chappathi.jpg';
import Grid from '@mui/material/Grid';
import { jsPDF } from "jspdf";
import  arabianhutimage from '../../Images/dinner/Arabianhut.jpg';

import chickenbiryaniimage from '../../Images/dinner/Chickenbiryani.jpg';

import Chickennoodelsimage from '../../Images/dinner/Chickennoodels.jpg';

import masaladosaimage from '../../Images/dinner/masaladosa.jpg';

import Muttonbiryaniimage from '../../Images/dinner/Muttonbiryani.jpg';

import nattukozhibiryaniimage from '../../Images/dinner/nattukozhi biryani.jpg';

import parrotaimage from '../../Images/dinner/parrota.jpg';
import vegnoodelsimage from '../../Images/dinner/vegnoodels.jpg';
import ulluthavadaiimage from '../../Images/breakfastimage/ulluthavadai.jpg';
import Button from "@material-ui/core/Button";
import '../../Styles/Style.css';
import { makeStyles } from '@material-ui/core/styles';
import { height } from '@mui/system';
import hotelImage from '../../Images/HotelLogo.jpg'
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
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

function DinnerDetail(){
    
    const classes = useStyles();
    const[chappathi,setchappathi] = React.useState("")
    const[totalCostofChappathi,settotalCostofChappathi] = React.useState(0.00)
    const[clickChappathicheckbox,setclickChappathiCheckbox] = React.useState()
    const[arabianhut,setarabianhut] = React.useState("")
    const[totalCostofArabianhut,settotalCostofArbianhut] = React.useState(0.00)
    const[clickArabianhutcheckbox,setclickArabianhutCheckbox] = React.useState()
   
    const[chickenbiryani,setchickenbiryani] = React.useState("")
    const[totalCostofChickenbiryani,settotalCostofChickenbiryani] = React.useState(0.00)
    const[clickChickenbiryanicheckbox,setcliCkchickenbiryaniCheckbox] = React.useState()
    const[chickennoodels,setchickennoodels] = React.useState("")
    const[totalCostofChickennoodels,settotalCostofChickennoodels] = React.useState(0.00)
    const[clickChickennoodelscheckbox,setclickChickennoodelsCheckbox] = React.useState()
    const[masaladosai,setmasaladosai] = React.useState("")
    const[totalCostofMasaladosai,settotalCostofMasaladosai] = React.useState(0.00)
    const[clickMasaladosaicheckbox,setclickMasaladosaCheckbox] = React.useState()
    const[muttonbiryani,setmuttonbiryani] = React.useState("")
    const[totalCostofMuttonbiryani,settotalCostofMuttonbiryani] = React.useState(0.00)
    const[clickMuttonbiryanicheckbox,setclickMuttonbiryaniCheckbox] = React.useState()
    const[nattukozhibiryani,setnattukozhibiryani] = React.useState("")
    const[totalCostofNattukozhibiryani,settotalCostofNattukozhibiryani] = React.useState(0.00)
    const[clickNattukozhibiryaniCheckbox,setclickNattukozhibiryaniCheckbox] = React.useState()
    const[parrota,setparrota] = React.useState("")
    const[totalCostofParrota,settotalCostofParrota] = React.useState(0.00)
    const[clickParrotacheckbox,setclickParrotaCheckbox] = React.useState()
    const[vegnoodels,setvegnoodels] = React.useState("")
    const[totalCostofVegnoodels,settotalCostofVegnoodels] = React.useState(0.00)
    const[clickVegnoodelsCheckbox,setclickVegnoodelsCheckbox] = React.useState()
    const[selectedchappathi,setselectedchappathi] = React.useState(false)
    const[notselectedchappathi,setnotselectedchappathi] = React.useState(true)
    const[selectedarabianhut,setselectedarabianhut] = React.useState(false)
    const[notselectedarabianhut,setnotselectedarabianhut] = React.useState(true)
    const[selectedchickenbiryani,setselectedchickenbiryani] = React.useState(false)
    const[notselectedchickenbiryani,setnotselectedchickenbiryani] = React.useState(true)
    const[selectedchickennoodels,setselectedchickennoodels] = React.useState(false)
    const[notselectedchickennoodels,setnotselectedchickennoodels] = React.useState(true)
    const[selectedmasaladosai,setselectedmasaladosai] = React.useState(false)
    const[notselectedmasaladosai,setnotselectedmasaladosai] = React.useState(true)
    const[selectedmuttonbiryani,setselectedmuttonbiryani] = React.useState(false)
    const[notselectedmuttonbiryani,setnotselectedmuttonbiryani] = React.useState(true)
    const[selectednattukozhibiryani,setselectednattukozhibiryani] = React.useState(false)
    const[notselectednattukozhibiryani,setnotselectednattukozhibiryani] = React.useState(true)
    const[selectedparrota,setselectedparrota] = React.useState(false)
    const[notselectedparrota,setnotselectedparrota] = React.useState(true)
    const[selectedvegnoodels,setselectedvegnoodels] = React.useState(false)
    const[notselectedvegnoodels,setnotselectedvegnoodels] = React.useState(true)
    const {state} = useLocation();
const { username} = state
useEffect(() => {
    localStorage.removeItem ("itemsinlocalstorage")
    console.log("came")
   },[])

    const numberofChappathi = (event) =>{
        setchappathi(event.target.value)
        
        settotalCostofChappathi(10*event.target.value)
        console.log(totalCostofChappathi)
    }
    const chappathicheckbox = (event) =>{
      
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = chappathi + "chappathi" + " " + chappathi + "*" + "7.00" + "=" + totalCostofChappathi 
            
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    
   
    const numberofArabianhut = (event) =>{
        setarabianhut(event.target.value)
        settotalCostofArbianhut(45*event.target.value)
        console.log(totalCostofArabianhut)
    }
    const arabianhutcheckbox = (event) =>{
    
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = arabianhut + "arabianhut" + " " + arabianhut + "*" + "45.00" + "=" + totalCostofArabianhut
          
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    const numberofChickenbiryani = (event) =>{
        setchickenbiryani(event.target.value)
        settotalCostofChickenbiryani(180*event.target.value)
        console.log(totalCostofChickenbiryani)
    }
    const chickenbiryanicheckbox = (event) =>{
    
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = chickenbiryani + "chickenbiryani" + " " + chickenbiryani + "*" + "180.00" + "=" + totalCostofChickenbiryani

            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
      
      
    
    
   
    const numberofChickennoodels = (event) =>{
        setchickennoodels(event.target.value)
        // var totalCost = 
        settotalCostofChickennoodels(160*event.target.value)
        console.log(totalCostofChickennoodels)
    }
    const Chickennoodelscheckbox = (event) =>{

        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected =chickennoodels + "chickennoodels" + " " + chickennoodels + "*" + "160.00" + "=" + totalCostofChickennoodels
          
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    
    const numberofmasaladosai = (event) =>{
        setmasaladosai(event.target.value)

        settotalCostofMasaladosai(60*event.target.value)
        console.log(totalCostofMasaladosai)
    }
    const masaladosacheckbox = (event) =>{

        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = masaladosai + "masaladosai" + " " + masaladosai + "*" + "60.00" + "=" + totalCostofMasaladosai 
            
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    
    const numberofMuttonbiryani = (event) =>{
        setmuttonbiryani(event.target.value)
    
        settotalCostofMuttonbiryani(220*event.target.value)
        console.log(totalCostofMuttonbiryani)
    }
    const Muttonbiryanicheckbox = (event) =>{
       
      
    
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = muttonbiryani + "muttonbiryani" + " " + muttonbiryani + "*" + "220.00" + "=" + totalCostofMuttonbiryani 
    
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
      }
     }
    
    const numberofNattukozhibiryani = (event) =>{
        setnattukozhibiryani(event.target.value)
        
        settotalCostofNattukozhibiryani(250*event.target.value)
        console.log(totalCostofNattukozhibiryani)
    }
    const nattukozhibiryanicheckbox = (event) =>{
    
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = nattukozhibiryani + "nattukozhibiryani" + " " + nattukozhibiryani + "*" + "250.00" + "=" + totalCostofNattukozhibiryani
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
        
        settotalCostofParrota(25*event.target.value)
        console.log(totalCostofParrota)
    }
    const parrotacheckbox = (event) =>{
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = parrota + "parrota" + " " + parrota + "*" + "25.00" + "=" + totalCostofParrota
            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }

    const numberofVegnoodels = (event) =>{
        setvegnoodels(event.target.value)
         
        settotalCostofVegnoodels(90*event.target.value)
        console.log(totalCostofVegnoodels)
    }
    const vegnoodelscheckbox = (event) =>{
        console.log(event,"checkbox")
        if(event.target.checked)
        {
          
           var itemsSelected = vegnoodels + "vegnoodels" + " " + vegnoodels + "*" + "90.00" + "=" + totalCostofVegnoodels

            console.log(itemsSelected,"itemsSelected")
            itemsOrdered.push(JSON.stringify(itemsSelected))
            console.log(JSON.parse(itemsOrdered),"itemsSelected2")
            
            localStorage.setItem("itemsOrdered",JSON.parse(itemsOrdered))
        } 
        else{
           
        }
    }
    const clickaddchappathi =()=>{
        var x= document.getElementById("chappathi").name
        if(x==="add"){
            if(chappathi>0){
            setselectedchappathi(true)
            setnotselectedchappathi(false)
            var itemsOrdered={
                total:totalCostofChappathi,
                name:"Chappathi",
                price:10,
                id:19,
                qty:chappathi
          }
          if(localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")==="" || localStorage.getItem("itemsinlocalstorage")===null)
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
            setnotselectedchappathi(true)
            setselectedchappathi(false)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined|| localStorage.getItem("itemsinlocalstorage")!==null ){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===19){
                        check.splice(i,1)
                        var removeditems=[]
                        removeditems=check
                        localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                    }
                }
                
            }
        }
    }
    const clickaddarabianhut =()=>{
        var x= document.getElementById("arabianhut").name
        if(x==="add"){
            if(arabianhut>0){
            setselectedarabianhut(true)
            setnotselectedarabianhut(false)
            var itemsOrdered={
                total:totalCostofArabianhut,
                name:"Arabianhut",
                price : 45,
                id:20,
                qty:arabianhut
          }
          if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")===undefined || localStorage.getItem("itemsinlocalstorage")=== null)
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
            setselectedarabianhut(false)
            setnotselectedarabianhut(true)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined|| localStorage.getItem("itemsinlocalstorage")!==null ){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===20){
                        check.splice(i,1)
                        var removeditems=[]
                        removeditems=check
                        localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                    }
                }
            }
        }
    }
    const clickaddchickenbiryani =()=>{
        var x= document.getElementById("chickenbiryani").name
        if(x==="add"){
            if(chickenbiryani>0){
            setselectedchickenbiryani(true)
            setnotselectedchickenbiryani(false)
            var itemsOrdered={
                total:totalCostofChickenbiryani,
                name:"Chickenbiryani",
                price:180,
                id:21,
                qty:chickenbiryani
          }
          if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null)
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
            alert("Please Selet Items")
        }
        }
        else{
            setselectedchickenbiryani(false)
            setnotselectedchickenbiryani(true)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===21){
                        check.splice(i,1)
                        var removeditems=[]
                        removeditems=check
                        localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                    }
                }

            }
        }
    }
    const clickaddchickennoodels =()=>{
        var x= document.getElementById("chickennoodels").name
        if(x==="add"){
            if(chickennoodels>0){
            setselectedchickennoodels(true)
            setnotselectedchickennoodels(false)
            var itemsOrdered={
                total:totalCostofChickennoodels,
                name:"Chickennoodels",
                price:160,
                id:22,
                qty:chickennoodels
          }
          if(localStorage.getItem("itemsinlocalstorage")=== undefined||localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== null)
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
            alert("please Select Items")
        }
        }
        else{
            setselectedchickennoodels(false)
            setnotselectedchickennoodels(true)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!== ""||localStorage.getItem("itemsinlocalstorage")!==undefined|| localStorage.getItem("itemsinlocalstorage")!==null){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===22){
                        check.splice(i,1)
                        var removeditems=[]
                        removeditems=check
                        localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                    }
                }
            }
        }
    }
    const clickaddmasaladosai =()=>{
        var x= document.getElementById("masaladosai").name
        if(x==="add"){
            if(masaladosai>0){
            setselectedmasaladosai(true)
            setnotselectedmasaladosai(false)
            var itemsOrdered={
                total :totalCostofMasaladosai,
                name  :"Masaladosai",
                price :60,
                id    :23,
                qty   :masaladosai
          }
          if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null)
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
            setselectedmasaladosai(false)
            setnotselectedmasaladosai(true)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===23){
                        check.splice(i,1)
                        var removeditems=[]
                        removeditems=check
                        localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                    }
                }
            }
        }
    }
    const clickaddmuttonbiryani =()=>{
        var x= document.getElementById("muttonbiryani").name
        if(x==="add"){
            if(muttonbiryani>0){
            setselectedmuttonbiryani(true)
            setnotselectedmuttonbiryani(false)
            var itemsOrdered={
                total :totalCostofMuttonbiryani,
                name  :"Muttonbiryani",
                price :220,
                id    :24,
                qty   :muttonbiryani
          }
          if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null)
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
            alert("Pleas Select items")
        }
        }
        else{
            setselectedmuttonbiryani(false)
            setnotselectedmuttonbiryani(true)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===24){
                        check.splice(i,1)
                        var removeditems=[]
                        removeditems=check
                        localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                    }

                }
            }
        }
    }
    const clickaddnattukozhibiryani =()=>{
        var x= document.getElementById("nattukozhibiryani").name
        if(x==="add"){
            if(nattukozhibiryani>0){
            setselectednattukozhibiryani(true)
            setnotselectednattukozhibiryani(false)
            var itemsOrdered={
                total :totalCostofNattukozhibiryani,
                name  :"NattukozhiBiryani",
                price :250,
                id    :25,
                qty   :nattukozhibiryani
          }
          if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null)
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
            setselectednattukozhibiryani(false)
            setnotselectednattukozhibiryani(true)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null ){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===25)
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
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
                total :totalCostofParrota,
                name  :"Parrota",
                price : 25,
                id    :26,
                qty   :parrota
          }
          if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null)
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
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined||localStorage.getItem("itemsinlocalstorage")!==null){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===26){
                        check.splice(i,1)
                        var removeditems=[]
                        removeditems=check
                        localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))
                    }
                }
            }
        }
    }
    const clickaddvegnoodels =()=>{
        var x= document.getElementById("vegnoodels").name
        if(x==="add"){
            if(vegnoodels>0){
            setselectedvegnoodels(true)
            setnotselectedvegnoodels(false)
            var itemsOrdered={
                total   :totalCostofVegnoodels,
                name    :"Vegnoodels",
                price   :90,
                id      :27,
                Qty     :vegnoodels
          }
          if(localStorage.getItem("itemsinlocalstorage")===""|| localStorage.getItem("itemsinlocalstorage")=== undefined || localStorage.getItem("itemsinlocalstorage")=== null)
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
            setselectedvegnoodels(false)
            setnotselectedvegnoodels(true)
            var check=[]
            if(localStorage.getItem("itemsinlocalstorage")!==""||localStorage.getItem("itemsinlocalstorage")!==undefined|| localStorage.getItem("itemsinlocalstorage")!==null){
                check=JSON.parse(localStorage.getItem("itemsinlocalstorage"))
                for(var i=0;i<check.length;i++){
                    if(check[i].id===27)
                    check.splice(i,1)
                    var removeditems=[]
                    removeditems=check
                    localStorage.setItem("itemsinlocalstorage",JSON.stringify(removeditems))

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
     <Grid item xs={3}> <div className='propsname'>Welcome {state.username} </div> </Grid>
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
        <Grid item xs={3}> <div> <img className='chappathi' src={chappathiimage}></img></div> 
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Chappathi</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs 10.00</p>

    </div>

    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number'disabled={selectedchappathi} min="0" id="checked"value={chappathi} onChange={numberofChappathi} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofChappathi} </p>
    </div>
 {notselectedchappathi &&   <div className={classes.btns}>
        
        <Button 
           onClick={clickaddchappathi}
           id="chappathi"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedchappathi &&   <div className={classes.btns}>
        
        <Button 
           onClick={clickaddchappathi}
           id="chappathi"
           name="remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div>
    </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='arabianhut' src={ arabianhutimage}></img></div> 
        <div className='foodnamedisplay'>
        
            <div>
   
       <p>Arabianhut</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs 45.00</p>

    </div>

    </div>
    <div className='foodnamedisplay'>
    <div>
   
   <input type='number'disabled={selectedarabianhut} min="0" id="checked"value={arabianhut} onChange={numberofArabianhut} className='inputnumberpoint' />

</div>
    <div  className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofArabianhut} </p>
    </div>
  {notselectedarabianhut &&  <div className={classes.btns}>
    
        <Button 
           onClick={clickaddarabianhut}
           id="arabianhut"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedarabianhut &&  <div className={classes.btns}>
    
        <Button 
           onClick={clickaddarabianhut}
           id="arabianhut"
           name="remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='chickenbiryani' src={chickenbiryaniimage}></img> </div> 
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Chickenbiryani</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs180.00</p>

    </div>
   
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
   
   <input type='number'disabled={selectedchickenbiryani} min="0"  value={chickenbiryani} onChange={numberofChickenbiryani} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth' >
        <p>Total :Rs.{totalCostofChickenbiryani} </p>
    </div>
  {notselectedchickenbiryani &&   <div className={classes.btns}>
        
        <Button 
           onClick={clickaddchickenbiryani}
           id="chickenbiryani"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedchickenbiryani &&   <div className={classes.btns}>
        
        <Button 
           onClick={clickaddchickenbiryani}
           id="chickenbiryani"
           name="remove"
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
        <Grid item xs={3}> <div> <img className='Chickennoodels' src={Chickennoodelsimage}></img></div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Chicken Noodels</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs160.00</p>

    </div>
   
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
   
   <input type='number'disabled={selectedchickennoodels} min="0" id="checked"value={chickennoodels} onChange={numberofChickennoodels} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth' >
        <p>Total :Rs.{totalCostofChickennoodels} </p>
    </div>
  {notselectedchickennoodels &&  <div className={classes.btns}>
        
        <Button 
         onClick={clickaddchickennoodels}
         id="chickennoodels"
         name="add"  
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedchickennoodels &&  <div className={classes.btns}>
        
        <Button 
         onClick={clickaddchickennoodels}
         id="chickennoodels"
         name="remove"  
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='masaladosa' src={masaladosaimage}></img> </div> <div className='foodnamedisplay'>
        
        <div>

   <p>Masala Dosa</p>

</div>
<div className='paddingleftprice'>

    <p>Rs60.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div className='paddingleft'>

<input type='number'disabled={selectedmasaladosai} min="0" id="checked"value={masaladosai} onChange={numberofmasaladosai} className='inputnumberpoint' />

</div>
<div  className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofMasaladosai} </p>
</div>
{notselectedmasaladosai &&  <div className={classes.btns}>
    
    <Button 
       onClick={clickaddmasaladosai}
       id="masaladosai"
       name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedmasaladosai &&  <div className={classes.btns}>
    
    <Button 
       onClick={clickaddmasaladosai}
       id="masaladosai"
       name="remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
</div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='Muttonbiryani' src={Muttonbiryaniimage}></img></div> <div className='foodnamedisplay'>
        
        <div >

   <p>Muttonbiryani</p>

</div>
<div className='paddingleftprice'>

    <p>Rs220.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div className='paddingleft'>

<input type='number'disabled={selectedmuttonbiryani} min="0" id="checked"value={muttonbiryani} onChange={numberofMuttonbiryani} className='inputnumberpoint' />

</div>
<div  className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofMuttonbiryani} </p>
</div>
{notselectedmuttonbiryani && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddmuttonbiryani}
       id="muttonbiryani"
       name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedmuttonbiryani && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddmuttonbiryani}
       id="muttonbiryani"
       name="remove"
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
        <Grid item xs={3}> <div> <img className='nattukozhibiryani' src={nattukozhibiryaniimage}></img> </div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>Nattukozhibiryani</p>
  
   </div>
   <div className='paddingleftprice'>
    
        <p>Rs250.00</p>

    </div>
   
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
   
   <input type='number'disabled={selectednattukozhibiryani} min="0" id="checked"value={nattukozhibiryani} onChange={numberofNattukozhibiryani} className='inputnumberpoint' />

</div>
    <div className='paddingleft totalpricewidth' >
        <p>Total :Rs.{totalCostofNattukozhibiryani} </p>
    </div>
   {notselectednattukozhibiryani && <div className={classes.btns}>
        
        <Button 
           onClick={clickaddnattukozhibiryani}
           id="nattukozhibiryani"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectednattukozhibiryani && <div className={classes.btns}>
        
        <Button 
           onClick={clickaddnattukozhibiryani}
           id="nattukozhibiryani"
           name="remove"
            >
    <div className='addorderbutton'>REMOVE</div>
    </Button>
    </div>}
    </div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}> <div> <img className='parrota' src={parrotaimage}></img></div><div className='foodnamedisplay'>
        
        <div >

   <p>Parrota</p>

</div>
<div className='paddingleftprice'>

    <p>Rs25.00</p>

</div>

</div>
<div className='foodnamedisplay'>
<div className='paddingleft'>

<input type='number'disabled={selectedparrota} min="0" id="checked"value={parrota} onChange={numberofParrota} className='inputnumberpoint' />

</div>
<div  className='paddingleft totalpricewidth'>
    <p>Total :Rs.{totalCostofParrota} </p>
</div>
{notselectedparrota && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddparrota}
       id="parrota"
       name="add"
        >
<div className='addorderbutton'>ADD</div>
</Button>
</div>}
{selectedparrota && <div className={classes.btns}>
    
    <Button 
       onClick={clickaddparrota}
       id="parrota"
       name="remove"
        >
<div className='addorderbutton'>REMOVE</div>
</Button>
</div>}
</div></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}><div><img className='vegnoodels' src={vegnoodelsimage}></img></div>
        <div className='foodnamedisplay'>
        
            <div >
   
       <p>vegnoodels</p>
  
   </div>
   <div className='paddingleftprice'>
 
        <p>Rs90.00</p>

    </div>
  
    </div>
    <div className='foodnamedisplay'>
    <div className='paddingleft'>
  
   
  <input type='number' disabled={selectedvegnoodels} min="0" id="checked" value={vegnoodels} onChange={numberofVegnoodels} className='inputnumberpoint' />

</div>
    <div  className='paddingleft totalpricewidth'>
        <p>Total :Rs.{totalCostofVegnoodels} </p>
    </div>
   {notselectedvegnoodels && <div className={classes.btns}>
        
        <Button 
           onClick={clickaddvegnoodels}
           id="vegnoodels"
           name="add"
            >
    <div className='addorderbutton'>ADD</div>
    </Button>
    </div>}
    {selectedvegnoodels && <div className={classes.btns}>
        
        <Button 
           onClick={clickaddvegnoodels}
           id="vegnoodels"
           name="remove"
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
</div>
)

}

export default  DinnerDetail