const RegisterButton = ({className = ""}) => {
  return (
    <div className={`md:ml-10  bg-greenBtn rounded-[5px] ${className} cursor-pointer`}>
      <h1 className="py-2 px-4 text-white">RegisterNow</h1>
    </div>
  )
}

export default RegisterButton
