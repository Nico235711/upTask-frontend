import { Outlet } from "react-router-dom"
import Logo from "../components/Logo"

const AppLayout = () => {

  return (
    <>
      <header className="bg-gray-800 p-5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>
        </div>
      </header>
      
      <section className="max-w-6xl mx-auto mt-20 p-5">
        <Outlet />
      </section>


      <footer className="py-5 bg-gray-800">
        <p className="text-center text-white text-lg">Todos los derechos reservados {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default AppLayout