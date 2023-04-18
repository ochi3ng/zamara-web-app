import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IStaffuser } from './CreateStaffComponent';
import { type } from 'os';

type props = {
    id: any
}

const ListStaffComponent = () => {
    const [user, setUser] = useState<IStaffuser[]>([]);

    useEffect(() => {
        axios.get<IStaffuser[]>("https://crudcrud.com/api/07e3fb65c7a440e48bcfd71fc0a9d501/products")
            .then(response => {
                setUser(response.data)

            })
            .catch((error) => console.log(error))

    }, [])
    let navigate = useNavigate();
    const editstaff = () => {
        navigate("/staff")
    };
    const DeleteStaff = async (id: props) => {
        await fetch(`https://crudcrud.com/api/07e3fb65c7a440e48bcfd71fc0a9d501/products/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then(() => {
                axios.get<IStaffuser[]>("https://crudcrud.com/api/87c77f76ca4e4740a667e4e2ec9aa9df/products")
                    .then(response => {
                        setUser(response.data)
                    })
            },)
            .catch((error) => console.log(error))
        navigate('/staffpage')

    }
    // const createStaff = async (staff: IStaffuser): Promise<IStaffuser> => {
    //     const response = await axios.post<IStaffuser>("https://crudcrud.com/api/ae0e7889f3984a03a9bbc92c68af7b57/products", staff);
    //     return response.data;
    // };
    return (
        <div className='staffContainer'>
            <h1>Welcome : { }</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Staff Name</th>
                        <th>Department</th>
                        <th>Emil</th>
                        <th>Salary</th>
                        <th>Staff Number</th>
                        <th>Delete Staff</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user: any) => {
                        return (


                            <tr key={user.phone}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.department}</td>
                                <td>{user.email}</td>
                                <td>{user.salary}</td>
                                <td>{user.phone}</td>
                                <td> <button onClick={editstaff} className='editbuttons'>Edit Staff</button>
                                    <button className='editbutton' onClick={() => DeleteStaff(user._id)}> Delete Staff</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table >
        </div>
    )
}

export default ListStaffComponent