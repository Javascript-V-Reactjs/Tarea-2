function Headears(props) {
  return (
    <thead>
      <tr>
        {props.titles.map(title =>
          <th key={title.id}>
              {title.header}
          </th>    
        )}
      </tr>
    </thead>
  )
}

export default Headears