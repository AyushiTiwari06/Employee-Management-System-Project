import {React,useState} from 'react'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    // two way binding
    const submitHandler = (e)=>{
        e.preventDefault();
        setEmail("")
        setPassword("")
        props.handleLogin(email,password)
    }   

  return (

    <>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
  <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
    {/* <!-- Title --> */}
    <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
      Login to your account
    </h2>

    {/* <!-- Form -->/ */}
    <form 
    
    onSubmit={(e) => {submitHandler(e)}}
    className="space-y-5">
        
      {/* <!-- Email --> */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
        <input
          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>

      {/* <!-- Password --> */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
        <input
          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          type="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      {/* <!-- Login Button --> */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-500 py-3 text-white font-semibold shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
      >
        Login
      </button>
    </form>
  </div>
</div>
</>
  )
}

export default Login