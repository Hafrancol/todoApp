import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo"
import styles from './TodoApp.module.css';
export const TodoApp = () => {

  const [categories, setCategories] = useState<string[]>([]);

  const addCategory = (category: string): void => {
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
            
        </main>
        
    
    </>
  )
}
