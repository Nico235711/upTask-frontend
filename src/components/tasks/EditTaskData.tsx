import { useLocation } from "react-router-dom"

const EditTaskData = () => {

  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const editModalId = queryParams.get("taskId")
  const show = editModalId ? true : false  

  return (
    <div>EditTaskData</div>
  )
}

export default EditTaskData