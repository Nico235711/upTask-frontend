import { Link } from "react-router-dom"

const Logo = () => {

  return (
    <Link to="/">
      <img src="/logo.svg" alt="Logotipo UpTask" />
    </Link>
  )
}

export default Logo