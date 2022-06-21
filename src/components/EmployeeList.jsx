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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>B-Day</th>
                        <th>Department</th>
                        <th>Comment</th>
                        <th>Active</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employee => (
                            <Employee 
                             key={employee.id}
                             id={employee.id} 
                             name={employee.name}
                             job={employee.job} 
                             date={employee.date}
                             department={employee.department}
                             textarea={employee.textarea} 
                             activo={employee.activo} 
                             gender={employee.gender}    
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