import React, { Component } from 'react';

class EmployeeAdd extends Component{
    initialState = {
        id: '',
        name: '',
        job: '',
        date: '', 
        department: '',
        textarea: '',
        activo: false,
        gender: 'male',
    };

    state = this.initialState;

    handleChange = e => {
        const { name , value } = e.target;
        this.setState({
            [name]: value,
        });

    };

    handleCheckedChange = e => {
        const { checked } = e.target;
        this.setState({
            activo: checked,
        });

    };

    handleSubmit = (e) => {
       e.preventDefault();
       const {hire} = this.props; 
       hire(this.state);
       this.setState(this.initialState);
    };

    render(){
        const { name, job, id, date, department, textarea, activo, gender} = this.state;
        
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

                <label htmlFor='date'>Date</label> 
                <input type="text" name="date" id="date" value={date} onChange={this.handleChange}
                placeholder="B-Day"
                />

                <label htmlFor='department'>Department</label> 
                <select name="department" value={this.state.value} onChange={this.handleChange}>
                    <option value="design" name="design">Design</option>
                    <option value="fe">Front-end</option>
                    <option value="qa">QA</option>
                </select>

                <div class='active'>
                <label htmlFor='activo'>Active</label>
                <input type="checkbox" name="activo" id="activo"
                 checked={activo} onChange={this.handleCheckedChange}
                />
                </div>

                <div class='gender'>

                <label htmlFor='gender'>Gender:</label>
                <input type="radio" name="gender" id="male" value="male" onChange={this.handleChange}
                checked={gender === 'male'}
            
                /> 
                <label htmlFor='gender'>Male</label>
            
                <input type="radio" name="gender" id="female" value="female" onChange={this.handleChange}
                checked={gender === 'female'}
                /> 
                 <label htmlFor='gender'>Female</label>

                <input type="radio" name="gender" id="other" value="other" onChange={this.handleChange}
                checked={gender === 'other'}
                />
                <label htmlFor='gender'>Other</label>

                </div>

                <label htmlFor='textarea'>Comments</label> 
                <textarea value={textarea} onChange={this.handleChange} name="textarea" id="textarea" />

                <br></br> <br></br>
                <input type="submit" value="Hire" />
            </form>
        );
    }

}

export default EmployeeAdd;