import { getProjectById } from "@/api/ProjectAPI"
import EditProjectForm from "@/components/projects/EditProjectForm"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const EditProject = () => {
  const params = useParams()
  const projectId = params.projectId!
  const { data } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  })
  // console.log(data);
  

  if (data) return <EditProjectForm data={data} projectId={projectId} />
}

export default EditProject