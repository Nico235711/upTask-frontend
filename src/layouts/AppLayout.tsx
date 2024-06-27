import { Outlet } from "react-router-dom"
import Logo from "@/components/Logo"
import { NavMenu } from "@/components/NavMenu"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = () => {

  return (
    <>
      <header className="bg-gray-800 p-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>

          <NavMenu />
        </div>
      </header>

      <section className="max-w-screen-2xl mx-auto p-5 m-10">
        <Outlet />
      </section>


      <footer className="py-5 bg-gray-800">
        <p className="text-center text-white text-lg">Todos los derechos reservados {new Date().getFullYear()}</p>
      </footer>

      <ToastContainer
        theme="dark"
        autoClose={2500}
        pauseOnHover={false}
      />
    </>
  )
}

export default AppLayout