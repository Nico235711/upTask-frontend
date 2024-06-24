import { Link } from "react-router-dom"
import ProjectForm from "./ProjectForm"
import { useForm } from "react-hook-form"
import { ProjectFormData } from "@/types/index"

type EditProjectFormProps = {
  data: ProjectFormData
}

const EditProjectForm = ({ data }: EditProjectFormProps) => {  

  const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: {
    projectName: data.projectName,
    clientName: data.clientName,
    description: data.description
  }})

  const handleForm = (formData: ProjectFormData) => {
    console.log(formData);
    
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-bold text-5xl">Editar Proyecto</h1>
      <p className="font-light text-gray-500 mt-5 text-xl">Llena el siguiente formulario para editar el proyecto</p>

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
          value="Guardar Cambios"
          className="bg-purple-400 hover:bg-purple-500 py-2 text-white font-bold cursor-pointer transition-all w-full"
        />
      </form>
    </div>

  )
}

export default EditProjectForm