import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Form from "./form";

function Employees(){
    const {id} = useParams();

    const [userData, setUserData] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8081/user`)
        .then(res => res.json())
        .then(data => setUserData(data))    
        .catch(err => console.log(err));

    },[])




    return (
    <>
    <div>
    <div className="flex items-center justify-between">
        <div className="flex flex-row">
        {userData.map((d,i ) => (
            <ul key={i}>
                <li>{d.f_name}</li>
                <li>{d.l_name}</li>
                <li>{d.city}</li>
                <li></li>
            </ul>
        ))}
        </div>
        <div>
            <input type="search" />
        </div>
    </div>


        <Form />
    </div>

    </>)
}

export default Employees