
function List(props) {
    return (
        <div style={{ flex: "1 0 auto" }}>
            <table>
                <thead>
                    <tr>
                        {
                            props.titles.map(titles =>
                                <th key={titles.ids}>{titles.name}</th>
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