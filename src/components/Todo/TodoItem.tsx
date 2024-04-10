import { IinputText } from "../../helpers/interfaces/interfaces"
import { ButtonGroup, Button, TextField} from '@mui/material';
import styles from "./TodoItem.module.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { DialogComponent } from "../Dialog/Dialog";

export const TodoItem = ({ todoItem, setCategories }: any) => {
  const {textValue, id} = todoItem;
  const [open, setOPen] = useState(false);


  const deleteHandle = () => {
    setCategories((categories:IinputText[]) => categories.filter(item => item.id !== id));
  };

  const handleEdit = () => {
    setOPen(true)
  }

  const handleCloseDialog = () => {
    setOPen(false);
  }

  return (
    <>
      {open && <DialogComponent  
                        open={open} 
                        handleClose = {handleCloseDialog}
                        textValue = {textValue}
                        setCategori = {setCategories}
                        id={id}
                        > </DialogComponent>}

      <ButtonGroup className={styles.buttonContainer} variant="outlined" aria-label="outlined primary button group">
        <TextField
          className={styles.textField}
          value={textValue.length > 45 ? textValue.substring(0,45) + '...': textValue}
          id={id}
          variant="standard"
          size='medium'
          label="Outlined"
        />
        <Button onClick={handleEdit} endIcon={<EditIcon />}>Edit</Button>
        <Button onClick={deleteHandle} endIcon={<DeleteIcon/>}>Delete</Button>
      </ButtonGroup>
    </>
  )
}
