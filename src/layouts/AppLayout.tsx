import { Outlet } from "react-router-dom"

const AppLayout = () => {

  return (
    <>
      <div>AppLayout</div>
      
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout