import React, { Component } from 'react';

class EmployeeAdd extends Component{
    initialState = {
        id: '',
        name: '',
        job: '',
    };

    state = this.initialState;

    handleChange = e => {
        const { name , value } = e.target;
        this.setState({
            [name]: value,
        });

    };

    handleSubmit = (e) => {
       e.preventDefault();
       const {hire} = this.props; 
       hire(this.state);
       this.setState(this.initialState);
    };

    render(){
        const { name, job, id } = this.state;
        
        return(
            <form onSubmit={this.handleSubmit}>

                <label htmlFor='job'>Id</label> 
                <input type="text" name="id" id="id" value={id} onChange={this.handleChange}
                placeholder="Id"
                />

                <label htmlFor='name'>Name</label> 
                <input type="text" name="name" id="name" value={name} 
                onChange={this.handleChange}
                placeholder="Name"
                />

                <label htmlFor='job'>Job</label> 
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange}
                placeholder="Job"
                />

                <input type="submit" value="Hire" />
            </form>
        );
    }

}

export default EmployeeAdd;