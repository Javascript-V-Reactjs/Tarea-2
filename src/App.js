import './App.css';
// import { students } from "./studentsList"
import React from "react"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import List from "./components/List"
import Footer from "./components/Footer"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      isLoaded: false,
      id: 0,
      name: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://students.hasura.app/api/rest/students", {
      method: "GET",
      headers: {
        "x-hasura-admin-secret":
          "733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq"
      }
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          students: result.students,
          isLoaded: true
        })
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    const id = this.state.id
    const name = this.state.name
    const students = this.state.students
    this.setState({
      id: '',
      name:''
    });
    for(let i = 0; i < students.length; i++){
      if(Number(id) === students[i].id){
        return alert('El id especificado ya existe en nuestro sistema');
      }
    }
    const newStudentsArray = [...students, { id: id, name: name }]
    this.setState({ students: newStudentsArray })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { students, isLoaded } = this.state
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            name="id"
            onChange={this.handleChange}
            value={this.state.id}
            type="number"
            placeholder="123"
          ></input>
          <input
            required
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            placeholder="Jon Snow"
          ></input>
          <button type="submit">Add Student</button>
        </form>
        <Navbar />
        {!isLoaded ? <p>Loading...</p> : <List hoverable students={students} />}
        <Footer />
      </Layout>
    )
  }
}
