import { Task } from "@/types/index"
import TaskCard from "./TaskCard"

type TaskListProps = {
  tasks: Task[]
}

type GroupedTasks = {
  [key: string]: Task[]
}

const initialStatusGroups: GroupedTasks = {
  pending: [],
  onHold: [],
  inProgress: [],
  underReview: [],
  completed: []
}

const statusTanslations: { [keyof: string]: string } = {
  pending: "Pendiente",
  onHold: "En Espera",
  inProgress: "En Progreso",
  underReview: "En Revisión",
  completed: "Completada"
}

const statusStyles: { [keyof: string]: string } = {
  pending: "border-t-red-500",
  onHold: "border-t-yellow-500",
  inProgress: "border-t-blue-500",
  underReview: "border-t-purple-500",
  completed: "border-t-green-500"
}

const TaskList = ({ tasks }: TaskListProps) => {

  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task]
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroups);

  return (
    <>
      <h2 className=" border-t text-5xl font-black my-10">Tareas</h2>

      <div className='flex gap-5 overflow-x-scroll 2xl:overflow-auto pb-32'>
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div key={status} className='min-w-[300px] 2xl:min-w-0 2xl:w-1/5'>
            <h3
              className={`capitalize border-t-8 font-light text-xl border border-slate-300 bg-white p-3 ${statusStyles[status]}`}>{statusTanslations[status]}</h3>
            <ul className='mt-5 space-y-5'>
              {tasks.length === 0 ? (
                <li className="text-gray-500 text-center pt-3">No Hay tareas</li>
              ) : (
                tasks.map(task => <TaskCard key={task._id} task={task} />)
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default TaskList