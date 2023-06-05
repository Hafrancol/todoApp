
import styles from './AddTodo.module.css';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { IaddCategory, IinputText } from '../../helpers/interfaces/interfaces';
import { v4 as uuid } from 'uuid';



export const AddTodo = ({addCategory}: IaddCategory) => {

  const [inputText, setInputText] = useState<IinputText>({
    textValue: '',
    id:''
  });

  const { textValue } = inputText;

  const onchangeText = (event: any):void =>  {
    const inputValue: string = event.target.value;
    setInputText({textValue:inputValue, id: uuid() });
  }

  const onAdd = (): void => {
    if (textValue.length <= 0 ) return;
    addCategory(inputText);
    setInputText({textValue: '', id: ''});
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
        value={textValue}
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
