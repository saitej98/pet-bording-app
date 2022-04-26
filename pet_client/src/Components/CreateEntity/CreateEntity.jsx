
import React, { useState } from "react";

// import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initState={
    name:"",
    city:"",
    address:"",
    capacity:"" ,
    costPerDay:"",
    verified:"",
    rating:"",
    typeDog:false,
    typeCat:false,
    typeRabit:false,
    weight:0,
    roamingPlace:"",
    sleepingPlace:"",
    pottyBreaks:0,
    walksPerDay:0,
    homeType:"",
    areaSize:"",
    emergencyTransport:""
}

export const CreateEntity=()=>{

    const [inputData,setInputData]=useState(initState);
    const navigate=useNavigate()


    const handleChange=(e)=>{
            const {id,value} = e.target;
            setInputData({...inputData,[id]:value})
    }

    const hanndleCheck=(e)=>{
        const {id,value,checked} = e.target;
        console.log(id,checked)
        setInputData({...inputData,[id]:checked})

    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        axios.post("https://pet-boarding.herokuapp.com/pets/create",inputData)
        .then((res)=>{
            // console.log(res.data)
            alert("Successfully Created!")
            navigate("/")
        })

    }


    return <div>
        <form onSubmit={handleSubmit}>

            <label>Name : 

            <input type="text" id="name" onChange={handleChange}/>
            </label>

            <label>City : 

            <input type="text" id="city" onChange={handleChange}/>
            </label>

            <label>Address : 

            <input type="text" id="address" onChange={handleChange}/>
            </label>


            <label>Capacity : 

            <input type="number" id="capacity" onChange={handleChange}/>
            </label>

            <label>Cost per Day : 

            <input type="text" id="costPerDay" onChange={handleChange}/>
            </label>

            <label>Verified : 

            <select name="" id="verified" onChange={handleChange}>
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </label>

            <label>Rating : 
            <select name="" id="rating" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </label>
            
            <label> <div>Type </div> 
            <label > Dog 
                 
            <input type="checkbox" id="typeDog" onChange={hanndleCheck}/>
            </label>
            <label > Cat 

            <input type="checkbox" id="typeCat" onChange={hanndleCheck}/>
            </label>
            <label > Rabit 
                
            <input type="checkbox" id="typeRabit" onChange={hanndleCheck}/>         
            </label>
            </label>

            <label>Weight</label>
            <select name="" id="weight" onChange={handleChange}>
                <option value="5Kg">5Kg</option>
                <option value="5-10Kg">5-10Kg</option>
                <option value="10-20Kg">10-20Kg</option>
                <option value="20-40Kg">20-40Kg</option>
                <option value="40+Kg">40+Kg</option>
            </select>

            <label >Roaming Place : 
            <input type="text" id="roamingPlace" onChange={handleChange} />
            </label>

            <label >Sleeping Place : 
            <input type="text" id="sleepingPlace" onChange={handleChange} />
            </label>
            
            <label > Potty Breaks : 
            <input type="number" id="pottyBreaks" onChange={handleChange} />
            </label>
            
            <label >Walks Per Day : 
            <input type="number" id="walksPerDay" onChange={handleChange} />
            </label>
            
            <label >Home Type : 
            <input type="text" id="homeType" onChange={handleChange} />
            </label>

            <label>Area Size : 

            <select name="" id="areaSize" onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select> 
            </label>

            <label>Emergency Transport : 

            <select name="" id="emergencyTransport" onChange={handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select> 

            </label>

            <input type="submit"  />

        </form>
        <hr />
        <hr />
        <hr />

    </div>
}











