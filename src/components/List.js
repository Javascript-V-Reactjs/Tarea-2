// Tarea 2 JS

// Crear un componente re-utilizable de una tabla, donde otros developers puedan
// llamar a este componente y pasarle los headers de la tabla como children, y 
// los datos de la tabla como props.

function List(props) {
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr>
                        {
                            props.fields.map(fields =>
                                <th key={fields.id}>{fields.rowname}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map(student => 
                            <tr key={student.id}>
                                {Object.values(student).map(item =>
                                    <td key={item}>{item}</td>
                                )}
                                <td>
                                    <input type="checkbox" style={{marginLeft:"auto"}}/>
                                </td> 
                                <td>
                                    <input type="text" style={{
                                        color:"black",
                                        backgroundColor:"white",
                                        borderColor:"white", 
                                        borderRadius:"8px",
                                        boxShadow: "8px 16px 17px -1px rgba(20,20,20,1)", 
                                        height:"12px"}}/>
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