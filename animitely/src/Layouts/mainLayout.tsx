import { Outlet } from "react-router-dom"
import Navbar from "../components/Navigation"
const MainLayout= () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>

    </>
  )
}

export default MainLayout