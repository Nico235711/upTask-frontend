import { Link } from "react-router-dom"

const CreateProject = () => {

  return (
    <>
      <h1 className="font-bold text-5xl">Crear Proyecto</h1>
      <p className="font-light text-gray-500 mt-5 text-xl">Llena el siguiente formulario para crear un proyecto</p>

      <Link
        to="/"
        className="bg-purple-400 hover:bg-purple-500 text-white px-5 py-1 mt-5 inline-block font-bold"
      >Volver a Proyectos</Link>
    </>
  )
}

export default CreateProject