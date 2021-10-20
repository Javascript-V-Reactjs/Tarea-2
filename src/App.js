import './App.css';
import React from 'react';
// import { students } from './students';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';
import { Titles } from './titlerows'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: {},
      isLoaded: false,
      id: 0,
      name: '',
      sent: false
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
          isLoaded: true,
        })
      })
  }

  handleSubmit(event) {
    const id = this.state.id
    const name = this.state.name
    event.preventDefault()
    if (this.state.id === '' || this.state.id ===0) {
      alert("ingrese un id")
    } else if(this.state.name === ''){
      alert("ingrese un nombre")
      
    } else if (this.state.name !=='' & this.state.id !==0) {
      for (let i = 0; i < this.state.students.length; i++) {
        if (id === `${this.state.students[i].id}`) {
          alert('este Id ya esta en uso');
          break
        } else {
          const students = [...this.state.students, { "id": id, "name": name }]
          this.setState({ students: students })
          break
        }
      }
    }
    this.setState({id:0})
    this.setState({name:''})
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

        <form onSubmit={this.handleSubmit}>
          <input value={this.state.id} type="number" name="id" placeholder="id" onChange={this.handleChange}></input>
          <input value={this.state.name} type="text" name="name" placeholder="name" onChange={this.handleChange}></input>
          <button type="submit" value="submit">Add student</button>
        </form>

        {!isLoaded ? <p>loading...</p> : <List students={students} hoverable><Titles /></List>}
        <Footer />
      </Layout>
    );
  }
}

export default App;
