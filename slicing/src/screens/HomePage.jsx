import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FetchWithoutLazyLoad from "../not called/FetchWithoutLazyLoad";
import FetchWithLazyLoad from "../not called/FetchWithLazyLoad";
import ClientPage from "../screens/ClientsPage";

export default function HomeApp() {
  const [selectedPage, setSelectedPage] = useState(0);

  const homeItems = [
    <Home />,
    <Features />,
    <FetchWithoutLazyLoad />,
    <FetchWithLazyLoad />,
    // <Community />,
    // <Blog />,
    <Princing />,
  ];
  return (
    <div>
      <div className="flex flex-col">
        <Navbar onItemClick={setSelectedPage} />
        {homeItems[selectedPage]}
      </div>
      <ClientPage />
    </div>
  );
}

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 bg-homeBg flex items-center justify-center ">
        <div className="mr-20">
          <h1 className="text-5xl font-bold text-gray-600 mb-5">
            Lessons and insights
          </h1>
          <h1 className="text-5xl font-bold text-green-600 mb-5">
            from 8 years
          </h1>
          <h1 className="text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </h1>
        </div>
        <img src="assets/illust.png" className="w-100 h-100" />
      </div>
    </div>
  );
};

//get
const Features = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className=" bg-homeBg flex flex-col">
      {todos.map((todo) => (
        <h1>{`${todo.id} ${todo.title}`}</h1>
      ))}
    </div>
  );
};

const Community = () => {
  return (
    <div className="flex-1 bg-homeBg flex items-center justify-center">
      <h1>Community Page</h1>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="flex-1 bg-homeBg flex items-center justify-center">
      <h1>Blog Page</h1>
    </div>
  );
};

const Princing = () => {
  return (
    <div className="flex-1 bg-homeBg flex items-center justify-center">
      <h1>Princing Page</h1>
    </div>
  );
};
