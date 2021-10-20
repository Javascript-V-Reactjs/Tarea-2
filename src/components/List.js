import sectionItems from "../sections"

function List(props) {

    return (
        <div style={{ flex: "1 0 auto" }}>
            <table>
                <thead>
                    <tr> {sectionItems} </tr>
                </thead>
                <tbody >
                    {
                        props.students.map(student =>
                            <tr className={props.hoverable ? 'hoverable' : ''} key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td><input type="checkbox" style={{ marginLeft: "auto" }} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List