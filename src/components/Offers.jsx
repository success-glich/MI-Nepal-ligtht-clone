import React from 'react'
import "../styles/Offers.css";

const Offer= ({src,index,link})=>{
  return(
    <a href={link}>
      <img src={src} alt={`${index} Offer`} />

    </a>
  )
}

const Offers = ({offers}) => {
  return (
    <div className='offersSection'>
      {offers.map((item,index)=>(
        <Offer key={item.image} index= {index} src= {item.image} link= {item.url} />
      ))}

    </div>
  )
}


export default Offers