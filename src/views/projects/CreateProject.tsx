import { createProject } from "@/api/ProjectAPI"
import ProjectForm from "@/components/projects/ProjectForm"
import { ProjectFormData } from "@/types/index"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const CreateProject = () => {

  const navigate = useNavigate()

  const initialValues: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: ""
  }

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
  // tambien puedo extraer mutate y no usar una variable
  const { mutate } = useMutation({
    mutationFn: createProject,
    onSuccess: (response) => {
      toast.success(response)
      navigate("/")
    }
  })

  const handleForm = (data: ProjectFormData) => mutate(data)

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-bold text-5xl">Crear Proyecto</h1>
      <p className="font-light text-gray-500 mt-5 text-xl">Llena el siguiente formulario para crear un proyecto</p>

      <Link
        to="/"
        className="bg-purple-400 hover:bg-purple-500 text-white px-5 py-1 mt-5 inline-block font-bold transition-all"
      >Volver a Proyectos</Link>

      <form
        className="mt-10 bg-white rounded-lg shadow p-5"
        onSubmit={handleSubmit(handleForm)}
        noValidate
      >

        <ProjectForm register={register} errors={errors} />


        <input
          type="submit"
          value="Crear Proyecto"
          className="bg-purple-400 hover:bg-purple-500 py-2 text-white font-bold cursor-pointer transition-all w-full"
        />
      </form>
    </div>

  )
}

export default CreateProject