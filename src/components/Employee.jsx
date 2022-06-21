import React, { Component } from 'react';

class Employee extends Component{
    render(){
        const { id, name, job, date, fire, department, textarea, activo, gender } = this.props;
        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{job}</td>
                <td>{date}</td>
                <td>{department}</td>
                <td>{textarea}</td>
                <td>{activo ? "Yes" : "No"}</td>
                <td>{gender}</td>
                <td>
                    <button onClick={() => fire(id)}>Fire</button>
                </td>
            </tr>
        );
    }
}

export default Employee; 