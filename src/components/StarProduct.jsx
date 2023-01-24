import React from 'react';

import "../styles/StarProduct.css";


const StarProduct = ({imageSrc,url,index})=>{
    return (
    
         < a href={url}><img src = {imageSrc} alt = {`${index} Product`} /></a>

    )

}

const StarProducts = ({starProduct}) => {
    console.log(starProduct[0]);
  return (
    <div className='starProduct'>
        {/* {starProduct.map((item,index)=>(
            <StarProduct key = {item.image} imageSrc={item.image} index= {index} url = {item.url} />
        ))}
       */}
       <div> <a href = {starProduct[0].url} > <img src={starProduct[0].image} alt="1st Product" /></a> </div>
        <div>
            <a href={starProduct[1].url}> <img src={starProduct[1].image} alt="2nd product" /></a>
            <a href={starProduct[2].url}> <img src = {starProduct[2].image} alt = "3rd Product" /></a>
            <a href={starProduct[3].url}> <img src={starProduct[3].image} alt = "4th product "></img></a>
        </div>
    </div>
  )
}

export default StarProducts