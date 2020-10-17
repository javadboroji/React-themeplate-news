import React from 'react'
import Data from "../../data.json"



export default function SiadebarSport() {
    return (
        <>
            <h6 className="text-dark bg-warning  p-1 text-center w-100">اخبار جهان </h6>
             <ul style={{padding:0}}>
             {Data.sidebarWorldNews.map((item,i)=>{
                     return(<li key={i} className="d-flex p-2 items border-bottom">
                        <img src={ require("../../image/"+item.src) } alt="image" />
                        <p className="text-secondary pr-2">{item.description}</p>
                        </li>)
                 })}
             </ul>
        </>
    )
}