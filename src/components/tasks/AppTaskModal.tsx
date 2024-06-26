import { Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import TaskForm from './TaskForm';
import { useForm } from 'react-hook-form';
import { error } from 'console';
import { TaskFormData } from '@/types/index';

export default function AddTaskModal() {

  const initialValues: TaskFormData = {
    name: "",
    description: ""
  }

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
  const navigate = useNavigate()
  const location = useLocation()
  // busco en la url los parametros deseados
  const queryParams = new URLSearchParams(location.search)
  // me fijo si el parametro que estoy buscando existe
  const modalTask = queryParams.get("newTask")
  const show = modalTask ? true : false

  const handleCreateTask = (formData: TaskFormData) => {
    console.log(formData);
    
  }
  
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        {/* navigate("" , { replace: true } -> elimina el query string de la url */}
        <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname , { replace: true })}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  <DialogTitle
                    as="h3"
                    className="font-black text-4xl  my-5"
                  >
                    Nueva Tarea
                  </DialogTitle>

                  <p className="text-xl font-bold">Llena el formulario y crea  {''}
                    <span className="text-fuchsia-600">una tarea</span>
                  </p>

                  <form className='mt-10 space-y-2' noValidate onSubmit={handleSubmit(handleCreateTask)}>

                    <TaskForm register={register} errors={errors} />

                    <input
                      type="submit"
                      value="Guardar Tarea" 
                      className='bg-purple-400 hover:bg-purple-500 text-white px-5 py-1 mt-5 inline-block font-bold transition-all w-full cursor-pointer'
                    />
                  </form>

                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}