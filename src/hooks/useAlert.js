import { createContext, useContext, useEffect, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [position,setPosition] = useState('right');
  const [close, setClose] = useState(5000);
  const [isOpened, setIsOpened] = useState(false);

  const sendAlert = ({ type, message, close , position }) => {
    setMessage(message);
    setType(type);
    setIsOpened(true);
    setClose(close);
    setPosition(position);
  };

  useEffect (() => {
    if(close === false){
      return null
    }else{
      const alertTimer = setTimeout(() => {
        setIsOpened(false)
      }
      , close)
      return () => clearTimeout(alertTimer)
    }
  })

  return (
    <AlertContext.Provider value={{ sendAlert, type, message, isOpened , position}}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error(
      "You must wrap your application with <AlertProvider /> in order to use useAlert hook."
    );
  }

  return context;
};

export default useAlert;
