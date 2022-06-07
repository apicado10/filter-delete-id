import React, { Component } from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component{
    state = {
        employees : [
            {   
                id: 1,
                name: 'John',
                job: 'CEO'
            },
            {
                id: 2,
                name: 'Jane',
                job: 'Manager'
            },
            {
                id: 3,
                name: 'Michelle',
                job: 'Programer'
            },
            {
                id: 4,
                name: 'Tim',
                job: 'Designer'
            },
        ]
    };

    fireEmployee  = (id) => {
        const { employees } = this.state;
        this.setState({
            employees : employees.filter((employee) => {
                return employee.id !== id;
            })
        });
    };

    render(){

        const { employees } = this.state;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employee => (
                            <Employee id={employee.id} name={employee.name} job={employee.job} fire={this.fireEmployee} />
                        ))}
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;