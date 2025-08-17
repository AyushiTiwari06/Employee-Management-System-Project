import { useState,useEffect,useContext } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdimDashboard from './components/Dashboard/AdimDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState('')
  const authData = useContext(AuthContext);

  useEffect(() => {
    let LoggedInUser = localStorage.getItem("LoggedInUser");
    if(LoggedInUser){
     LoggedInUser = JSON.parse(LoggedInUser)
      setUser(LoggedInUser.role);
      setLoggedInUserData(LoggedInUser.data)
    }
  }, [])
  const handleLogin = (email,password)=>{
        if(email === "admin@me.com" && password === "123"){
            const admin = authData.admin
            setUser('admin')
            setLoggedInUserData(admin)
            localStorage.setItem("LoggedInUser",JSON.stringify({role:'admin',data:admin}))
        }else if(authData){
            const employee = authData.employees.find((e)=> e.email === email && e.password === password);
            if(employee){
            setLoggedInUserData(employee)
            setUser('employee')
            localStorage.setItem("LoggedInUser",JSON.stringify({role:'employee',data:employee}))
            }

        }else{
          alert("Invalid credentials");
        }
  }

    
  return (
    <>
    {/* Login wala componet tbhi dekhao jb user nhi h  */}
     {user==='' ? <Login handleLogin={handleLogin}/> : ''}
     {user === 'admin' ?  <AdimDashboard data={authData.admin[0]}/> : (loggedInUserData ? <EmployeeDashboard data={loggedInUserData}/> : '')}
      
    </>
  )
}

export default App
