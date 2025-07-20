import RegisterButton from "./buttons/RegisterButton";

export default function Navbar() {
  const navItems = ["Home", "Features", "Community", "Blog", "Princing"];

  return (
    <div className="flex justify-between items-center py-5 px-20 bg-white">
      <img src="assets/Logo.png" alt="" />
      <div className="flex items-center">
        {navItems.map((item) => (
          <h1 className="pl-10">{item}</h1>
        ))}
        <RegisterButton/>
      </div>
    </div>
  );
}
