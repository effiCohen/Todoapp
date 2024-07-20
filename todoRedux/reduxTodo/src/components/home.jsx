import React, { useEffect } from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import AddTodo from "./addTodo";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  deleteTodo,
  isCompletedToggle,
} from "../redux/features/todoSlice";

const Home = () => {
  const { todos } = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="container mx-auto py-1 bg-orange-400 ">
      <div className="max-w-lg mx-auto ">
        <div className="shadow-3xl bg-transparent rounded-2xl p-5 we w-[100%] " >
          <p className="text-2xl text-center text-zinc-50">ToDo App</p>
          <AddTodo />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mt-3">
            {todos?.map(({ todo, date, time, isCompleted, id }, index) => (
              <div
                className="bg-slate-50 rounded-3xl p-5 flex flex-col justify-between"
                key={index}
              >
                <ul className={isCompleted ? "line-through" : "text-gray-900"}>
                  <li>Mission: {todo}</li>
                  <li>Date: {date}</li>
                  <li>Time to done: {time}</li>
                </ul>
                <div className="flex justify-around items-center mt-2">
                  <FaCheckCircle onClick={() => dispatch(isCompletedToggle(id))} color={isCompleted ? "red" : "green"} className=' cursor-pointer' />
                  <FaTrash onClick={() => dispatch(deleteTodo(id))} color='red' className='cursor-pointer' />


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
