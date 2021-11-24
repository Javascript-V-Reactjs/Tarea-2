import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StudentList(props) {
  const [studentsList, setStudentsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    return fetch("https://students.hasura.app/api/rest/students", {
      method: "GET",
      headers: {
        "x-hasura-admin-secret":
          "733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setStudentsList(result.students);
        setIsLoaded(true);
      });
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <h1>Students list</h1>
      <table>
        <thead>
          <th>id</th>
          <th>Name</th>
        </thead>
        <tbody>
          {studentsList.map((currentStudent) => (
            <tr
              className={props.hoverable ? "hoverable" : ""}
              key={currentStudent.id}
            >
              <td>
                <Link to={`/student/${currentStudent.id}`}>
                  {currentStudent.id}
                </Link>
              </td>
              <td>{currentStudent.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
