import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo"
import styles from './TodoApp.module.css';
import { TodoItem } from "./components/Todo/TodoItem";
import { IinputText } from "./helpers/interfaces/interfaces";
export const TodoApp = () => {

  const [categories, setCategories] = useState<IinputText[]>([]);

  const addCategory = (category: IinputText): void => {
    setCategories(prevCategories => [category, ...prevCategories]);
  }

  useEffect(()=>{
    console.log(categories)
  },[categories])

  return (
    <>
        <main className= {styles.containerApp}>
            <h1 className={styles.title}> React todo List App </h1>
            <hr className={styles.breakLine}/>
            <AddTodo addCategory={addCategory}></AddTodo>
            <div className={styles.todoContainer}>
            {categories && categories.map((todoItem) => {
              return <TodoItem todoItem={todoItem} setCategories={setCategories} key={todoItem.id}></TodoItem>
            })}
            </div>
            
        </main>
        
    
    </>
  )
}
