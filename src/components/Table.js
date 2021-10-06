import React, { useState } from "react";

function Table(props) {
    const titles = props.children.type
    const [hoverable, sethoverable] = useState(false); 
    const hover = {
        border: hoverable ? '1px solid var(--highlight)': '' // operador ternario si es true me aplica el hover 
    }
    // useState es un Hook que te permite añadir el estado de React a un componente de función. Más adelante hablaremos sobre otros Hooks.
    //useState directamente dentro de nuestro componente:
    // referencias : https://www.pluralsight.com/guides/create-a-hover-button-in-a-react-app , https://es.reactjs.org/docs/react-api.html
        
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr onMouseEnter={() => sethoverable(true)}  // coloca el hover si el mouse toca una fila
                        onMouseLeave={() => sethoverable(false)} // quita el hover
                        style={hover}>
                        {
                            titles.map(title =>
                                <th key={title.id}>{title.name}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map(student => 
                            <tr key={student.id} 
                            onMouseEnter={() => sethoverable(true)} 
                            onMouseLeave={() => sethoverable(false)}
                            style={hover}
                            >
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td><input type="checkbox" style={{marginLeft:"auto"}}/></td>
                                <td>{student.phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table