import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {

    getEmployees(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    createEmployee(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getEmployeeById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    updateEmployee(student, studentId){
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student);
    }

    deleteEmployee(studentId){
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }
}

export default new StudentService()