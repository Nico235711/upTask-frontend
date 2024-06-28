import { getTaskById } from "@/api/TaskAPI"
import { useQuery } from "@tanstack/react-query"
import { useLocation, useParams } from "react-router-dom"
import EditTaskModal from "./EditTaskModal"

const EditTaskData = () => {

  const params = useParams()
  const projectId = params.projectId! // le digo que va a ser un string

  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const taskId = queryParams.get("taskId")! // le digo que va a ser un string

  const { data } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById({ projectId, taskId }),
    enabled: !!taskId
  })

  if (data) return <EditTaskModal data={data} />
}

export default EditTaskData