import './App.css';
import React from 'react';
// import { students } from './students';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: {},
      isLoaded: false,
      id: 0,
      name: ''
    }
    // this.handleIdChange = this.handleIdChange.bind(this);
    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://students.hasura.app/api/rest/students', {
      method: 'GET',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      }
    }).then(response => response.json())
      .then(result => {
        this.setState({
          students: result.students,
          isLoaded: true
        })
        this.data = result;
      })
  }

  handleSubmit(event) {
    const id = this.state.id
    const name = this.state.name
    const form = document.formReset
    event.preventDefault()

    if (id === '') {
      alert("Por favor ingrese el id")
      form.reset()
    }
    else if (id !== '') {
      this.data.students.forEach(students => {
        if (id === students.id) {
          alert("El id ya existe")
        }
      });
    }
    else if (name.length === 0) {
      alert("Por favor ingrese el nombre")
      form.reset()
    }
    else if (name !== 0) {
      this.data.students.forEach(students => {
        if (name === students.name) {
          alert("El estudiante ya existe")
        }
      });
    }
    else {
      const students = [...this.state.students, { "id": id, "name": name }]
      this.setState({ students: students })
      form.reset()
    }
  }

  // handleIdChange(event) {
  //   this.setState({id: event.target.value});  
  // }

  // handleNameChange(event) {
  //   this.setState({name: event.target.value});  
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { students, isLoaded } = this.state
    return (
      <Layout>
        <Navbar />

        <form name="formReset" onSubmit={this.handleSubmit}>
          <input value={this.state.id} type="number" name="id" placeholder="id" onChange={this.handleChange}></input>
          <input value={this.state.name} type="text" name="name" placeholder="name" onChange={this.handleChange}></input>
          <button type="submit" value="submit">Add student</button>
        </form>

        {!isLoaded ? <p>loading...</p> : <List students={students} hoverable />}
        <Footer />
      </Layout>
    );
  }
}

export default App;
