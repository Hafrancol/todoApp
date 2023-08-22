
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material';
import styles from "./Dialog.module.css"
import { useEffect, useState } from 'react';
import { IinputText } from '../../helpers/interfaces/interfaces';
export const DialogComponent = (props: any) => {

    const {open, handleClose, textValue, setCategori, id} = props;
    const [textArea, setTextArea] = useState(textValue);

    const handleCloseDialog = () => {
        handleClose();
    }

    useEffect(()=> {
        //setTextArea(textValue);
    }, []);

    const handleTextAreaDialog = (event:any) => {
        //Todo: Method to control the textarea
        console.log('cambiando');
        const inputValue: string = event.target.value;
        setTextArea(inputValue)
        // console.log(inputValue);
      }

    const handleSave = () => {
      setCategori((categories:IinputText) => {
        return categories.map((category:IinputText ) => {
          if(category.id == id){
            category.textValue = textArea;
          }
          return category;
        })
      })
      handleClose();
    }

  return (
<>
    <Dialog
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth ='xl'
        >
        <DialogTitle id="alert-dialog-title">
          {"Edit your \" Todo \" ..."}
        </DialogTitle>
        <DialogContent>
       
          <DialogContentText id="alert-dialog-description">
          <textarea className={styles.textArea}
                rows={3}
                cols={3}
                value={textArea}
                autoComplete='on'
                maxLength={200}
                onChange={handleTextAreaDialog}
            >
            </textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
        
        </Dialog>
    </>
    )
}


