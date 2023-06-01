
import styles from './AddTodo.module.css';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { FormEvent, useState } from 'react';

interface Props {
  addCategory: (category: string) => void
}

export const AddTodo = ({addCategory}: Props) => {

  const [inputText, setInputText] = useState<string>('');

  const onchangeText = (event: any):void =>  {
    const inputText: string = event.target.value;
    setInputText(inputText);
  }

  const onAdd = (): void => {
    if (inputText.length <= 0 ) return;

    addCategory(inputText);
    setInputText("");
  }

  const onKeyUpHandler = (event:any) => {
     if(event.code === 'Enter'){
      onAdd();
     }
  }




  return (
    <>
      <div className={styles.todoContainer}>
       <TextField
       value={inputText}
        className={styles.input} 
        id="standard-basic" 
        variant="standard"
        size='medium'
        placeholder='Ingrese todo'
        onChange={onchangeText}
        onKeyUp={onKeyUpHandler}
        />

      <Button onClick={onAdd} variant="contained" endIcon={<AddIcon />}>
        Add
      </Button>
      
    
    
      </div>
    
    </>
  )
}
