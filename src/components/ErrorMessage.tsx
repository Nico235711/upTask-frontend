import { PropsWithChildren } from "react"

const ErrorMessage = ({ children }: PropsWithChildren) => {

  return (
    <p className="w-full bg-red-600 text-white font-bold my-4">{children}</p>
  )
}

export default ErrorMessage