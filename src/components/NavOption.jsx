import React,{useState,useEffect} from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import "../styles/NavOption.css"


const NavCard = ({name,price,image,index}) => {
    return (
        <div className="NavCard" >
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
    )
}

const NavOption = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

    // const location  =useLocation();
    // console.log(location.hash);
    const initialState = {
        miPhoneToggle:false,
        redmiPhoneToggle:false,
        tvToggle:false,
        laptopToggle:false,
        fitnessToggle:false,
        homeToggle:false,
        audioToggle:false,
        accessoriesToggle:false



    }
    const [toggle,setToogle] = useState(initialState)
    const {miPhoneToggle,redmiPhoneToggle,tvToggle,laptopToggle,fitnessToggle,homeToggle,audioToggle,accessoriesToggle}= toggle;
//    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
//    const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
//    const [tvToggle,setTvToggle] = useState(false);
//    const [laptopToggle,setLaptopToggle] = useState(false);
//    const [fitnessToggle,setFitnessToggle] = useState(false);
//    const [homeToggle,setHomeToggle] = useState(false);
//    const [audioToggle,setAudioToggle] = useState(false);
//    const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 
console.log(window.location.pathname);

   useEffect(() => {
     
    if(window.location.pathname=== "/miphones"){
        return  setToogle({miPhoneToggle:true})
       }
     if(window.location.pathname  === "/redmiphones"){
        return  setToogle({redmiPhoneToggle:true})
       }
       
       if(window.location.pathname=== "/tv"){
        return setToogle({tvToggle:true})
       }
       if(window.location.pathname=== "/laptops"){
        return   setToogle({laptopToggle:true})
       }
       if(window.location.pathname=== "/lifestyle"){
        return   setToogle({fitnessToggle:true})
       }
       if(window.location.pathname=== "/audio"){
        return   setToogle({audioToggle:true})
       }
       if(window.location.pathname=== "/accessories"){
        return   setToogle({accessoriesToggle:true})
       }
       if(window.location.pathname=== "/home"){
        return   setToogle({accessoriesToggle:true})
       }
       if(window.location.pathname ===""){
        return setToogle()
       }
      return ()=>{
        setToogle(initialState)
      }
      

       
   }, [])

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?   tv.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOption
