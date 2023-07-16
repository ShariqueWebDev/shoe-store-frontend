import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextApi = ({ children }) => {
  const [alert, setAlert] = useState(null);
  
  const showAlert = ( img, type, massege ) => {
    setAlert({
        img,
        type,
        massege,
      });
        setTimeout(()=>{
            setAlert(null)
        }, 2000)
  };
  useEffect(()=>{
    showAlert
  },[alert])
  return (
    <Context.Provider value={{ showAlert, alert, setAlert }}>
      {children}
    </Context.Provider>
  );
};

export default ContextApi;
