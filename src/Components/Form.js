import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            RollNo: "",
            Address:"",
            DOB:"",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    Rollnohandler = (event) => {
        this.setState({
            RollNo: event.target.value
        })
    }
    Addresshandler = (event) => {
        this.setState({
            Address: event.target.value
        })
    }
    DOBhandler = (event) => {
        this.setState({
            DOB: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            RollNo: '',
            Address:"",
            DOB:"",
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Student Details</h1>
                    <label>FirstName :</label>
                    <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label>
                    <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Roll No :</label>
                    <input type="text" value={this.state.RollNo} onChange={this.Rollnohandler} placeholder="Rollno..." /><br />
                    <label>Address :</label>
                    <input type="text" value={this.state.Address} onChange={this.Addresshandler} placeholder="Address..." /><br />
                    <label>DOB :</label>
                    <input type="text" value={this.state.DOB} onChange={this.DOBhandler} placeholder="Date of Birth in DD-MM-YYYY Format..." /><br />
                    <label>Gender :</label>
                    <select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
