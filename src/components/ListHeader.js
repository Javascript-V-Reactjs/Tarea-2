function ListHeader(props) {
    return(
            <thead>
            {
                props.titles.map(title => 
                    <tr>
                        <th key={title.id}>{title.text}</th>
                        <th key={title.id}>{title.text}</th>
                        <th key={title.id}>{title.text}</th>
                    </tr>
                )
            }
            
        </thead>
    )
}
export default ListHeader