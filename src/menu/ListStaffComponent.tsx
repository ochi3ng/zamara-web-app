import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { IStaffuser } from './CreateStaffComponent';
import { type } from 'os';

type props = {
    id: any
}

const ListStaffComponent = () => {
    const [user, setUser] = useState<IStaffuser[]>([]);
    const [modalVisible, setModalVisible] = useState(false)

    const [modalVisiblep, setModalVisiblep] = useState()
    const Togglemodal = () => {
        setModalVisible(!modalVisible)

    }

    const Togglemodalp = (id: any) => {
        setModalVisible(!modalVisible)
        setModalVisiblep(id)
    }
    useEffect(() => {
        axios.get<IStaffuser[]>("https://crudcrud.com/api/5194732aae784d52a366045167f04a2c/products")
            .then(response => {
                setUser(response.data)

            })
            .catch((error) => console.log(error))

    }, [])
    let navigate = useNavigate();
    const DeleteStaff = async (id: props) => {
        await fetch(`https://crudcrud.com/api/5194732aae784d52a366045167f04a2c/products/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then(() => {
                axios.get<IStaffuser[]>("https://crudcrud.com/api/5194732aae784d52a366045167f04a2c/products")
                    .then(response => {
                        setUser(response.data)
                    })
            },)
            .catch((error) => console.log(error))
        navigate('/staffpage')

    }

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
                                <td>
                                    <button className='editbuttons' onClick={() => Togglemodalp(user._id)} >Edit Staff</button>
                                    <button className='editbutton' onClick={() => DeleteStaff(user._id)}> Delete Staff</button>
                                </td>
                                {modalVisible && modalVisiblep === user._id && <UpdateModal Togglemodal={Togglemodal}
                                    salary={user.salary} department={user.department} phone={user.phone} email={user.email}
                                    firstname={user.firstName} lastname={user.lastName} key={user.phone} id={user._id}






                                />}
                            </tr>

                        )
                    })}
                </tbody>
            </table >

        </div>
    )
}

export default ListStaffComponent

export interface Props {
    id: undefined,
    firstName: string,
    lastName: string,
    department: string,
    email: string,
    phone: number,
    salary: number,
}

export const UpdateModal = ({ Togglemodal, lastname, firstname, department, email, phone, salary, id,
}: any) => {
    const [updateStatus, setUpdateStatus]=useState(false)
    const [updatedFirstName, setUpdatedFirstName] = useState(firstname);
    const [updatedLastName, setUpdatedLastName] = useState(lastname);
    const [updatedDepartment, setUpdatedDepartment] = useState(department);
    const [updatedEmail, setUpdatedEmail] = useState(email);
    const [updatedPhone, setUpdatedPhone] = useState(phone);
    const [updatedSalary, setUpdatedSalary] = useState(salary)
    const [isLoading, setIsLoading]=useState(false)
    const navigate = useNavigate()

    const updateUser = async (id: Props) => {
        setIsLoading(true)
        await fetch(`https://crudcrud.com/api/5194732aae784d52a366045167f04a2c/products/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                firstName: updatedFirstName,
                lastName: updatedLastName,
                department: updatedDepartment,
                email: updatedEmail,
                phone: updatedPhone,
                salary: updatedSalary

            })

        })
            .then((response) => {Togglemodal()
            window.location.reload()
            })
            
            .catch(error => console.log(error))
 
    }
    const onFirstnameChange = (e: any) => {
        setUpdatedFirstName(e.target.value)
    }
    const onLastnameChange = (e: any) => {
        setUpdatedLastName(e.target.value)
    }
    const onDepartmentChange = (e: any) => {
        setUpdatedDepartment(e.target.value)
    }
    const onEmailChange = (e: any) => {
        setUpdatedEmail(e.target.value)
    }
    const onPhoneChange = (e: any) => {
        setUpdatedPhone(e.target.value)
    }
    const onSalaryChange = (e: any) => {
        setUpdatedSalary(e.target.value)
    }

    return (
        <div className='modal-content'>
            <h1 className='stafftitle'>Update details for user </h1>
            {isLoading && <div> Fail to load</div> }
            <div className='modal-conte'>
                <div>
                    <input type='name' defaultValue={firstname} value={updatedFirstName} placeholder='FirstName' onChange={onFirstnameChange} /></div>
                <div>
                    <input type='name' defaultValue={lastname} value={updatedLastName} placeholder='LastName' onChange={onLastnameChange} /></div>
                <div>
                    <input type='text' defaultValue={department} value={updatedDepartment} placeholder='Department' onChange={onDepartmentChange} /></div>

                <div>
                    <input type='email' defaultValue={email} value={updatedEmail} placeholder='Your Email' onChange={onEmailChange} /></div>
                <div>
                    <input type='number' defaultValue={phone} value={updatedPhone} placeholder='Your number' onChange={onPhoneChange} /></div>
                <div>
                    <input type='number' defaultValue={salary} value={updatedSalary} placeholder='salary' onChange={onSalaryChange} /></div>

            </div> 
           
 
            <div className='buttons'>
                <button className='editbuttons' onClick={() => updateUser(id)}>update</button>
                <button className='editbutton' onClick={Togglemodal}> Cancel</button>
            </div>
        </div>
    )
}