import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import TableCalulate from './components/table/table';
import BtnSubmit from './components/btnSubmit/btnSubmit';
const AuthContext = React.createContext();
function App() {
  const [data, setData] = useState([])
  
  return (
    <AuthContext.Provider value={{data,setData}}>
      <Header></Header>
      <TableCalulate></TableCalulate>
      <BtnSubmit></BtnSubmit>
    </AuthContext.Provider>
  )
}
export {AuthContext};
export default App;
