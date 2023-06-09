import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const data = useLoaderData()
    const [user, setUser] = useState(data)
    console.log(data)


    const handelDelite = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('delete sucssesfully');
                    const remaningUser = user.filter(singleUser => singleUser._id !== _id);
                    setUser(remaningUser);
                }
            })
    }
    return (
        <div>
            {
                user.map(singleData => <h1 key={singleData._id}>{singleData.name}  {singleData.email} 
                <Link
                to={`/update/${singleData._id}`}
                ><button>Update</button></Link>
                <button onClick={() => handelDelite(singleData._id)}>x</button>
                </h1>)
            }
            <h1></h1>
        </div>
    );
};

export default Users;