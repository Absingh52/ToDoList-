import React from "react";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useState,useEffect } from "react";
import TypingEffect from "./Type";



const List=({className ,style,bar,button,black})=>{
    const [inputValue,setInput]=useState("")
    const  [submitValue,setSubmit]=useState([])
      const [time,setTime]=useState(new Date())

      useEffect(()=>{
            const interval=setInterval(()=>{
                  setTime(new Date())
            },1000)

            return ()=>clearInterval(interval)
      },[])
      const date=time.getDate()
      const month=time.getMonth()+1
      const year=time.getFullYear()
      const hours=time.getHours()
      const minutes=time.getMinutes()
      const seconds=time.getSeconds()
      const timeOfDay=hours>=12?"PM":"AM"
      
      const formatTime=()=>{
         const formattedHours=hours %12||12;
         const formattedMinutes=minutes.toString().padStart(2,"0")
         const formattedSeconds=seconds.toString().padStart(2,"0")
         const formattedDate=date.toString().padStart(2,"0")
         const formattedMonth=month.toString().padStart(2,"0") 
         const formattedYear=year.toString().padStart(2,"0")
         return `${formattedDate}/${formattedMonth}/${formattedYear},${formattedHours}:${formattedMinutes}:${formattedSeconds} ${timeOfDay}`
      }

  const handleChange =(e)=>{
        setInput(e.target.value)
  }
  const handleSubmit=()=>{
   if(inputValue.trim() !==""){
      const currentValue=inputValue;
      setSubmit(s=>[...s,currentValue])
    
      setInput("")
   }
}
const handleKey=(e)=>{
    if(e.key==='Enter'){
        handleSubmit()
    }}

const removeHandler=(index)=>{
   setSubmit(s=>s.filter((_,i)=>i!==index))
}
const markHandler=(index)=>{
      
      setSubmit(s=>s.map((item,i)=>{
          if(i===index){
              return <strike>{item}</strike>
          }
          return item
      }))
}
 return(
    <div  className={`${className} flex flex-col justify-center items-center lg:p-0 md:p-[1.8em] gap-12`}>
      <TypingEffect style={style}/>
     <div className="  md:flex-row sm:flex-row  sm:gap-0 gap-5  flex flex-col justify-center items-center">
     <input style={{...bar,...style}} type="text" className="w-[20em] h-[2.3em] sm:w-[33em] px-[2em] rounded-[14px] sm:rounded-l-[2em] sm:rounded-r-none inputbar text-[1.1em] font-[400] cursor-pointer  " value={inputValue} 
        onChange={handleChange}
        onKeyDown={handleKey} 
        placeholder="Add a task." />
        <button style={{...button,...black}} value={submitValue} onClick={()=>{handleSubmit();}} className="w-[8em] get h-[2.5em] text-[1.1em] rounded-[14px] sm:rounded-r-[2em] sm:rounded-l-none font-[500]">I Got This!</button>
     </div>
        <div style={style} className="text-xl">{formatTime()}</div>
      <ul  className="flex flex-col justify-center items-center gap-4   h-[100%] font-[350]">
        {submitValue.map((item,index)=> 
      <li style={bar} className="mark flex justify-between items-center w-full max-w-[30em] min-h-[3em] rounded-[2em] px-[1.3em] py-[em] " key={index}>
        <div style={style} className="text-2xl  w-[10%]  flex-1 flex-nowrap break-words p-1"> {item} </div>
           <button style={{...button,...black}} className=" w-10 h-10 flex items-center justify-center text-[19px] my-[5px] rounded-full p-0 m-2 shrink-0 " onClick={item!==""? ()=>markHandler(index) :null} > <TiTick></TiTick> </button>
         
           <button style={{...button,...black}} className=" w-10 h-10 flex items-center justify-center text-[19px] my-[5px] rounded-full p-0 m-0 shrink-0 " onClick={item!==""?()=>removeHandler(index):null}><MdDelete></MdDelete> </button>
      
      </li>)}
      </ul>
    </div>
 )

}
export default List;