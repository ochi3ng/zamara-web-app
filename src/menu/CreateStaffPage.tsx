
import React from 'react'
import { useNavigate } from 'react-router-dom'

function StaffScreen() {
    let navigate = useNavigate();
    const editstaff = () => {
        navigate("/staff")
    };
    const canceledit = () => {
        navigate('/dash/:id')
    }
    return (
        <div className='staffContainer'>
            <h1>Welcome : staffname</h1>
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> <button onClick={editstaff} className='editbuttons'>Edit Staff</button>
                        <button onClick={canceledit} className='editbutton'> Cancel Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table >
           
          
        </div>
    )
}

export default StaffScreen