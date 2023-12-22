
import styles from './AddTodo.module.css';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { IaddCategory} from '../../helpers/interfaces/interfaces';
import { useAddTodo } from '../../hooks/useAddTodo';

export const AddTodo = ({addCategory}: IaddCategory) => {
  
  const { textValue, onchangeText, onKeyUpHandler, onAdd} = useAddTodo(addCategory);

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
