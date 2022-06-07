import React, { Component } from 'react';

class Employee extends Component{
    render(){
        const { id, name, job, fire } = this.props;
        return(
            <tr>
                <td>{name}</td>
                <td>{job}</td>
                <td>
                    <button onClick={() => fire(id)}>Fire</button>
                </td>
            </tr>
        );
    }
}

export default Employee; 