import { Route, Routes } from "react-router-dom"
import SignUp from "./components/Signup"
import HomePage from "./pages/HomePage"
import { useAuth } from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

function App() {
  const {token} = useAuth();
  
  return (
    <>
    <ToastContainer/>
     <Routes>
      <Route path='/' element={ <SignUp/> }/>
      <Route path='/home' element={token ? <HomePage/>: <SignUp/> }/>
    </Routes>
    </>
  )
}

export default App
