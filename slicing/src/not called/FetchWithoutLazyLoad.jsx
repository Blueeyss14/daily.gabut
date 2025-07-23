import { useEffect, useState } from "react";

const FetchWithoutLazyLoad = () => {
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
  }, []
);

  return (
    <div className=" bg-homeBg flex flex-col">
      {todos.map((todo) => <h1>{`${todo.id} ${todo.title}`}</h1>)}
    </div>
  );
}

export default FetchWithoutLazyLoad
