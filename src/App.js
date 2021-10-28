import './App.css';
import React, { useState, useEffect} from 'react';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

function App() {
  const [idInput, setIdInput] = useState(0)
  const [nameInput, setNameInput] = useState('')
  const [studentsList, setStudentsList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [alert, setAlert] = useState(false)
  // I set a state variable which can be used to disable the save/submit button
  const [disable, setDisabled] = useState(false)


  useEffect(() => {
    fetchStudents()
  }, [alert])

  const fetchStudents = () => {
    return fetch('https://students.hasura.app/api/rest/students', {
      method: 'GET',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      }
    }).then(response => response.json())
      .then(result => {
        setStudentsList(result.students)
        setIsLoaded(true)
    })
  }

  const insertStudent = (id, name) => {
    return fetch('https://students.hasura.app/api/rest/student', {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      },
      body: JSON.stringify(
        {
          'id': id,
          'name': name
        })
    }).then(response => response.json())
      .catch(error => console.log(error))
  }

  const formValidation = (event) => {
    event.preventDefault()
    if (nameInput === '') {
      setNameInput('El campo está vacio')
      setDisabled(true)
    } else if (idInput === 0) {
      setDisabled(true)
    } else {
      insertStudent(idInput, nameInput).then(() => {
        setAlert(true)
        setIdInput(0)
        setNameInput("")
        setDisabled(false)
      })
    }
  }
  // I still have errors with the validate at the time I send the id and with btn disable

  return (
    <Layout>
      <form onSubmit={formValidation}>
        <input 
          value={idInput} 
          type="number" 
          name="id" 
          placeholder="123" 
          onChange={e => setIdInput(e.target.value)}>
        </input>

        <input 
          value={nameInput} 
          type="text" 
          name="name" 
          placeholder="name" 
          onChange={e => setNameInput(e.target.value)}>
        </input>
        {alert && <h2>Nuevo estudiante ingresado</h2>}
        <button type="submit" disabled={disable} value="submit">Add student</button>
      </form>
      <Navbar />
      {!isLoaded ? (
        <p>Loading...</p> 
      ) : (
        <List students={studentsList} hoverable />
      )}
      <Footer />
    </Layout>
  );
}

export default App;