// import React, { useState } from 'react';
function List(props) {
//2 parámetros, el que llama al la función que es elhook, 2do el que altera el estado del UseState
// let initialState = false;
// const [hoverState, setstate] = useState(initialState)
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
            <thead>
                    <tr>
                    {
                        props.children.type.map(header => 
                        <th key={header.id}>
                            {header.value}
                        </th>
                    )
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map(student => 
                            <tr  key={student.id} onMouseEnter   onMouseLeave>
                                <td className="hi" >{student.id}</td>
                                <td>{student.name}</td>
                                <td><input type="checkbox" style={{marginLeft:"auto"}}/></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List