import { api } from "@/lib/axios";
import { Project, ProjectFormData, dashboardProjectSchema } from "@/types/index";


export async function createProject(formData: ProjectFormData) {
  try {
    const { data } = await api.post("/projects", formData)
    return data
  } catch (error) {
    console.log(error);
    
  }
}

export async function getAllProjects() {
  try {
    const { data } = await api("/projects")
    const response = dashboardProjectSchema.safeParse(data)
    if (response.success) return response.data
  } catch (error) {
    console.log(error);
    
  }
}

export async function getProjectById(id: Project["_id"]) {
  try {
    const { data } = await api(`/projects/${id}`)
    return data
  } catch (error) {
    console.log(error);
    
  }
}