import react from 'react'
import ReactDOM from 'react-dom'

const alertContainer = document.querySelector("#alert-root")

const AlertTag = ({ message, type, isOpened}) => {

    if (!isOpened) return null
    return ReactDOM.createPortal(
            <div className={`alert ${type}`}>
                <div className = "closeWindow" onClick = {(e) => {e.target.parentElement.style.display = 'none'}}>X</div>
                <span>{message}</span>
            </div>,
        alertContainer
    )
}

export default AlertTag