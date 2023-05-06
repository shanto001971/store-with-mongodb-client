import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const data = useLoaderData()
    console.log(data)


    const handelDelite =(_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/user/${_id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            {
                data.map(singleData => <h1 key={singleData._id}>{singleData.name}  {singleData.email} <button onClick={()=> handelDelite(singleData._id)}>x</button></h1>)
            }
            <h1></h1>
        </div>
    );
};

export default Users;