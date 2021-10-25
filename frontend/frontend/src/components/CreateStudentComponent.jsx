import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name:'',
            email:'',
            dob:'',
            age:''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);

        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, email: this.state.email, dob: this.state.dob};

        StudentService.createStudent(student).then(res => {
            this.props.history.push('/students');
        });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeDobHandler = (event) => {
        this.setState({dob: event.target.value});
    }

    cancel() {
        this.props.history.push('/students')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input placeholder="Name Student" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Email Student" name="email" className="form-control"
                                            type="email" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Day of Birth</label>
                                        <input placeholder="Day of Birth" name="dob" className="form-control"
                                            type="date" value={this.state.dob} onChange={this.changeDobHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStudentComponent;