
function List(props) {
    const Titles = props.children.type;
    return (
        <div style={{ flex: "1 0 auto" }}>
            <table>
                <thead>
                    <tr>
                    {
                        Titles.map(title =>
                            <th key ={title.id}>
                                {title.header}
                            </th>
                        )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map((student =>
                            <tr key={student.id}>
                                {Object.values(student).map((element =>
                                    <td key={element}>{element}</td>
                                ))}
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List