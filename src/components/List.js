// tarea #2
// componente re-utilizable de una tabla, donde otros developers puedan llamar a este componente
// y pasarle los headers de la tabla como children, y los datos de la tabla como props.

function List(props) {
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr>
                        props.headers.map(headers =>
                        <th key={headers.id}> 
                            {headers.name})
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map((student => 
                            <tr key={student.id}>
                                {Object.values(students).map((elemento =>
                                    <td key={elemento}>
                                        {elemento}
                                    </td>
                                    ))}
                                <td>
                                    <input type="checkbox" style={{marginLeft:"auto"}}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List