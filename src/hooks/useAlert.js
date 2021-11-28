import React from "react";
import { useContext, useState, useEffect, createContext } from "react";
import AlertTag from "../components/AlertTag";

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [isOpened, setIsOpenned] = useState(false)
    const [position, setPosition] = useState('right')
    const [closeCount, setCloseCount] = useState(10000)
    
    const sendAlert = ({type, message, closeCount, position}) => {
        setMessage(message)
        setType(type)
        setIsOpenned(true)
        setCloseCount(!closeCount ? 10000:closeCount)
        setPosition(!position ? 'right':position)
    }

    useEffect(() => {
        const alertTimer = setTimeout(()=> {
            setIsOpenned(false)
        }
        , closeCount)
        return () => clearTimeout(alertTimer)
        
    })

    return (
        <AlertContext.Provider value={{ sendAlert, type, message, isOpened, position}}>
            { children }
        </AlertContext.Provider>
    )
}

const useAlert = () => {
    const context = useContext(AlertContext)

    if (context === undefined) {
        throw new Error(
            'You must wrap your application with <AlertProvider /> in order to useAlert().',
        ) 
    }
    return context
}

export default useAlert