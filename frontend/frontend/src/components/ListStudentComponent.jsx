import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }

        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({students: res.data});
        })  
    }

    addStudent() {
        this.props.history.push('/add_student');
    }

    editStudent(id) {
        this.props.history.push(`/update_student/${id}`);
    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List Students</h2>
                <div className="column">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Day of Birth</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.dob}</td>
                                        <td>{student.age}</td>
                                        <td>
                                            <button onClick = {() => this.editStudent(student.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"2%"}} onClick = {() => this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                        </td>                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;