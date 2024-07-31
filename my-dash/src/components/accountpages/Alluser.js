import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Alluser() {

    const [users, setUser] = useState([]);

    const getUser = async (e) => {
        const response = await fetch("http://localhost:8000/user", { method: "GET" })
        const data = await response.json()
        setUser(data);
        // console.log(data);
    }
    useEffect(() => {
        getUser();
    }, [users]);
    const handleDelete = async (id) => {
        const data = await fetch("http://localhost:8000/user/" + id, { method: "delete" })
        console.log(data);
        // console.log(id);
    };


    return (
        <div className='ms-5'>
            <div>

                <table className="table border border-1 w-50" >
                    <thead>

                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Edit Data</th>
                            <th scope="col">Delete User</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map(user =>
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Password}</td>
                                {/* <td><UpdateData id={user._id} email={user.email} password={user.password} onClick={() => handleDelete(user._id)}></UpdateData></td> */}
                                <td><Link to={`/update/${user._id}`} className='btn btn-primary'>Update</Link></td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
