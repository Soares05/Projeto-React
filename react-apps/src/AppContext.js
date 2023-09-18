import React, { useState, useEffect, createContext } from 'react'; export const AppContext = createContext();
export const Provider = (props) => {
  const [cart, setCart] = useState([]);
  return (<AppContext.Provider value={[drivers, setDrivers]}>      {props.children}    </AppContext.Provider>)
}