import { Link, Route, Routes } from "react-router-dom"
import PrdPage from "./pages/products"
import CreatePage from "./pages/create"
import UpdatePage from "./pages/update"
import DeletePage from "./pages/delete"


function App() {
  

  return (
    <>
    <div className="navbar flex justify-between font-mono">
      <h1 className="p-3 bg-slate-800 m-5 text-white rounded-tr-3xl rounded-bl-3xl hover:rounded-tl-3xl hover:rounded-br-3xl duration-300">C.R.U.D   &    FireBase</h1>
      <div className="ul flex items-center gap-10">
        <Link to={'/'} className="hover:border-b-2 hover:border-black duration-150">Products</Link>
        <Link to={'/create'} className="hover:border-b-2 hover:border-black duration-150">Create</Link>
        <Link to={'/update'} className="hover:border-b-2 hover:border-black duration-150">Update</Link>
        <Link to={'/delete'} className="hover:border-b-2 hover:border-black duration-150">Delete</Link>
      </div>
      <button className="p-3 bg-slate-800 m-5 text-white rounded-tr-3xl rounded-bl-3xl hover:rounded-tl-3xl hover:rounded-br-3xl duration-300"><Link to={'/create'}>New +</Link></button>
    </div>
     

     <Routes>
      <Route path="/" element={<PrdPage/>}/>
      <Route path="/create" element={<CreatePage/>}/>
      <Route path="/update" element={<UpdatePage/>}/>
      <Route path="/delete" element={<DeletePage/>}/>
     </Routes>
    </>
  )
}

export default App
