import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../store/slices/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "Completed" : "Incomplete"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
