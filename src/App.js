import List  from './component/List';
import {useState,react,useEffect} from 'react';
import './App.css';
const App=()=>{
   const [bgColor,setBgColor]=useState({backgroundImage:"linear-gradient(100deg, rgb(212, 241, 255), rgb(255, 255, 255))"})
   const [textColor,setFontColor]=useState({color:"black"})
   const [bar,setBar]=useState({backgroundColor:"#AEB1B4"})
   const [buttonColor,setButtonColor]=useState({backgroundColor:"white"})
   
   const[blck,setBlck]=useState({color:""})
    const colorHandler=(color,font,bgcl,buttonClr)=>{
        setBgColor({backgroundImage:color})
        setFontColor({color:font})
        setBar({backgroundColor:bgcl})
        setButtonColor({backgroundColor:buttonClr})
        
    }
    const Button=(clr)=>{
        setBlck({color:clr})
      }
      return(
        <div style={bgColor} className='w-[100vw] h-[100vh] p-[10px]]  App'>
           <div className='gap-5 flex flex-row justify-center md:justify-center lg:justify-end sm:justify-center   w-full p-9'>
             <button className="lg:w-[2.5rem] lg:h-[2.5rem] w-[2.3rem] h-[2.3rem] bg-custom-gradient1  border-[1px]  rounded-full btn" onClick={()=>{ Button("black"); colorHandler(" linear-gradient(100deg, rgb(87, 86, 86), rgb(6, 46, 63))","rgb(247, 226, 223)","#181a1a","rgb(247, 226, 223)","black")}}></button>
            <button className="lg:w-[2.5rem] lg:h-[2.5rem] w-[2.3rem] h-[2.3rem] bg-custom-gradient2 border-[1px] rounded-full btn" onClick={()=>{ Button("black"); colorHandler("linear-gradient(100deg, rgb(212, 241, 255), rgb(255, 255, 255))","black","#AEB1B4","white","black")}}></button>
            <button className="lg:w-[2.5rem] lg:h-[2.5rem] w-[2.3rem] h-[2.3rem] bg-custom-gradient3 border-[1px] rounded-full btn" onClick={()=>{Button("white");colorHandler("linear-gradient(100deg, rgb(0, 18, 20), rgb(0, 31, 41))","white","#01394c","#002837")}}>
              </button></div>
  
            <div  className=" flex flex-col justify-center items-center   ">
           
          
           <List style={textColor} bar={bar} button={buttonColor}  black={blck} className=" "/>
             
        </div>
        </div>
       
    )
      
    }
   
 


export default App;
