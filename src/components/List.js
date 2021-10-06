import {useState} from 'react'
function List(props) {
    const [hover, setHoverStatus] = useState(false);
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr>
                        {
                          props.children.type.map(title =>
                            <th key ={title.id}>
                                {title.header}
                            </th>
                        )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map(student => 
                            <tr key={student.id} onMouseEnter ={() => setHoverStatus(true)} onMouseLeave ={() => setHoverStatus(false)}
                            style={{
                                border: hover ? '0.5px solid var(--highlight)':""
                            }}
                            >
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td><input type="checkbox" style={{marginLeft:"auto"}}/></td>
                                <td>{student.cedula}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List