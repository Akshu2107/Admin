import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Order() {
    const [orders, setOrder] = useState([]);

    const getOrder = async (e) => {
        const response = await fetch("http://localhost:8000/order", { method: "GET" })
        const data = await response.json()
        setOrder(data);
        // console.log(data);
    }
    useEffect(() => {
        getOrder();
    }, [orders]);

    const handleDelete = async (id) => {
        const data = await fetch("http://localhost:8000/order/" + id, { method: "delete" })
        console.log(data);
        // console.log(id);
    };

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const respo = await fetch("http://localhost:8000/order/addorder", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type": "application/JSON"
            }
        })
        const data = await respo.json();
        console.log(data);
    }

    return (
        <div>
            <div className='ms-5 d-flex justify-content-around'>
                <div >

                    <table className="table border border-3 w-75" >
                        <thead>

                            <tr>
                                <th scope="col">User Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Edit order</th>
                                <th scope="col">Delete order</th>
                            </tr>
                        </thead>

                        <tbody>

                            {orders.map(order =>
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.Name}</td>
                                    <td>{order.Address}</td>
                                    <td>{order.Product}</td>
                                    {/* <td><UpdateData id={user._id} email={user.email} password={user.password} onClick={() => handleDelete(user._id)}></UpdateData></td> */}
                                    <td><Link to={`/update/${order._id}`} className='btn btn-primary'>Update</Link></td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div><br></br>

                <div>
                    <h2>Add New Order</h2>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" name="name" onChange={handleForm} />

                        <label htmlFor="address">Address</label>
                        <input type="address" id="address" name="address" onChange={handleForm} />

                        <label htmlFor="product">Product Name</label>
                        <input type="product" id="product" name="product" onChange={handleForm} /><br></br>

                        <button type="submit" className='subtn'>Add Product</button>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Order
