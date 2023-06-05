import { IinputText } from "../../helpers/interfaces/interfaces"
import { ButtonGroup, Button, TextField } from '@mui/material';
import styles from "./TodoItem.module.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoItem = ({ todoItem, setCategories }: any) => {
  const {textValue, id} = todoItem;

  const deleteHandle = () => {
    setCategories((categories:IinputText) => categories.filter(item => item.id !== id));
  };

  return (
    <>
      <ButtonGroup className={styles.buttonContainer} variant="outlined" aria-label="outlined primary button group">
        <TextField
          className={styles.textField}
          value={textValue}
          id={id}
          variant="standard"
          size='medium'
          label="Outlined"
        />
        <Button endIcon={<EditIcon />}>Edit</Button>
        <Button onClick={deleteHandle} endIcon={<DeleteIcon/>}>Delete</Button>
      </ButtonGroup>
    </>
  )
}
