
import UseContex from "./useContex/useContex"
import { createContext } from "react";

export const manageContext = createContext()

const App = () => {
  const num = [1,2,3,4];

  return (
    <div>
    <manageContext.Provider value = {num}>
      <UseContex />

    </manageContext.Provider>
    </div>
  )
}

export default App
