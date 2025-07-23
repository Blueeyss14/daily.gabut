import { useNavigate } from "react-router-dom"

const RegisterButton = ({className = ""}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/new-page")} className={`md:ml-10  bg-greenBtn rounded-[5px] ${className} cursor-pointer`}>
      <h1 className="py-2 px-4 text-white">RegisterNow</h1>
    </div>
  )
}

export default RegisterButton
