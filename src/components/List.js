function List(props) {

    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Is Present?</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        props.students.map(students => 
                            <tr className={props.hoverable ? 'hoverable' : ''} key={students.id}>
                                <td>{students.id}</td>
                                <td>{students.name}</td>
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