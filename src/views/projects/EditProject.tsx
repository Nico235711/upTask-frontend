import { useParams } from "react-router-dom"

const EditProject = () => {
  const { projectId } = useParams()
  console.log(projectId);
  

  return (
    <div>EditProject</div>
  )
}

export default EditProject