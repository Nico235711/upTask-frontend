import { PropsWithChildren } from "react"

const ErrorMessage = ({ children }: PropsWithChildren) => {

  return (
    <p className="text-center my-4 bg-red-100 text-red-600 font-bold p-3 uppercase text-sm">{children}</p>
  )
}

export default ErrorMessage