import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData();
    console.log(data)

    const handelFormData = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email)
        const updateuser = {name,email}

        fetch(`http://localhost:5000/update/${data._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateuser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <form onSubmit={handelFormData}>
                <input type="text" name="name" defaultValue={data?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={data?.email} id="" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Update;