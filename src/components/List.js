import {useState} from 'react'
function List(props) {
    const [hoverable, setHoverStatus] = useState(false);
    const headerTitles = props.children.type;
    return (
        <div style={{flex: "1 0 auto"}}>
            <table>
                <thead>
                    <tr>
                        {
                        headerTitles.map(title =>
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
                                border: hoverable ? '1px solid var(--highlight)': null
                            }}
                            >
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