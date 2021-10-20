import './App.css';
import React from 'react';
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
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    const id = this.state.id
    const name = this.state.name
    const students = this.state.students
    this.setState({
      id: '',
      name: ''
    });
    // Si valida si el id existe pero igual agrega
    for (let i = 0; i < students.length; i++) {
      if (Number(id) === students[i].id) {
        console.log('El ID ya existe');
        break
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
        <Navbar />

        <form onSubmit={this.handleSubmit}>
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
