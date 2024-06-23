import { getAllProjects } from "@/api/ProjectAPI"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

const Dashboard = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects
  })
  console.log(data);
  console.log(isLoading);
  

  return (
    <>
      <h1 className="font-bold text-5xl">Mis Proyectos</h1>
      <p className="font-light text-gray-500 mt-5 text-xl">Maneja y administrar tus proyectos</p>
      <Link
        to="projects/create"
        className="bg-purple-400 hover:bg-purple-500 text-white px-5 py-1 mt-5 inline-block font-bold transition-all"
      >Crear Proyecto</Link>

      {
        data?.length ? (
          <p>Si hay proyectos</p>
        ) : (
          <p className="text-center py-20">No hay proyectos aún...</p>
        )
      }

    </>
  )
}

export default Dashboard