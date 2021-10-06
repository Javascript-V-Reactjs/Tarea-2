function List(props) {
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr>
                    {
                        props.children.type.map(headers => 
                            <th key ={headers.id}>
                                {headers.name}
                            </th>
                        )
                    }       
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map(student => 
                            <tr key={student.id}>
                                <td>{student.id}</td>
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