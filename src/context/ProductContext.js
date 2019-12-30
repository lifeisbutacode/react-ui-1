import React, {createContext, useState} from 'react';

export const Context = createContext();

export default function ProductContext({children}) {

  const [success, setSuccess] = useState(false);

  return (
    <React.Fragment>
      <Context.Provider value={[success, setSuccess]}>
        {children}
      </Context.Provider>
    </React.Fragment>
  )
}
