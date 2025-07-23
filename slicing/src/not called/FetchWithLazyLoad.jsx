//react-windwows

import { FixedSizeList as List } from "react-window";
import { useEffect, useState } from "react";

const FetchWithLazyLoad = () => {
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

 const Row = ({ index, style }) => {
  return (
    <div style={style}>
      <h1>{`${todos[index].id} ${todos[index].title}`}</h1>
    </div>
  );
};


  return (
    <div className=" bg-homeBg flex flex-col">
      <List
        height={window.innerHeight}
        itemCount={todos.length}
        itemSize={35}
        width={"100%"}
      >
        {Row}
      </List>
    </div>
  );
};

export default FetchWithLazyLoad;
