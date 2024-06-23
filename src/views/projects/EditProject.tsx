import { getProjectById } from "@/api/ProjectAPI"
import EditProjectForm from "@/components/projects/EditProjectForm"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const EditProject = () => {
  const params = useParams()
  const projectId = params.projectId!
  const { data, isLoading } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  })

  if (data) return <EditProjectForm />
}

export default EditProject