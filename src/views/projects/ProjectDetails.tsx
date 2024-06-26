import { getProjectById } from "@/api/ProjectAPI"
import AddTaskModal from "@/components/tasks/AppTaskModal"
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"

const ProjectDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  const projectId = params.projectId!  
  const { data, isLoading } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  })
  // console.log(data);


  if (data) return (
    <>
      <h1 className="text-4xl font-bold">{data.projectName}</h1>
      <p className="font-light text-gray-500 mt-5 text-xl">{data.description}</p>
      <nav className="my-5 flex gap-3">
        <button
          type="button"
          className="bg-purple-400 hover:bg-purple-500 text-white px-5 py-1 mt-5 inline-block font-bold transition-all"
          onClick={() => navigate("?newTask=true")}
        >Asignar Tarea</button>
      </nav>

      <AddTaskModal />
    </>
  )
}

export default ProjectDetails