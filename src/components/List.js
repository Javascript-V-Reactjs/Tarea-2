import React from "react"

function List(props) {
    return (
        <div>
            <table>
                <thead>
                    <th>id</th>
                    <th>Name</th>
                    <th>Is present ?</th>
                </thead>
                <tbody>
                    {props.students.map((currentStudent) => (
                        <tr
                            className={props.hoverable ? "hoverable" : ""}
                            key={currentStudent.id}
                        >
                            <td>{currentStudent.id}</td>
                            <td>{currentStudent.name}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List