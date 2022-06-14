import React, { Component } from 'react';
import Employee from './Employee';
import EmployeeAdd from './EmployeeAdd';

class EmployeeList extends React.Component{
    state = {
        employees : []
    };

    fireEmployee  = (id) => {
        const { employees } = this.state;
        this.setState({
            employees : employees.filter((employee) => {
                return employee.id !== id;
            })
        });
    };

    hireEmployee = employee => {
        this.setState({
            employees: [...this.state.employees, employee],
        });
    };

    render(){

        const { employees } = this.state;

        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employee => (
                            <Employee 
                             key={employee.id}
                             id={employee.id} 
                             name={employee.name}
                             job={employee.job} 
                             fire={this.fireEmployee}
                             />
                        ))}
                </tbody>
            </table>
            <hr />
            <EmployeeAdd
            hire={this.hireEmployee} 
            />
            
            </>
        );
    }
}

export default EmployeeList;