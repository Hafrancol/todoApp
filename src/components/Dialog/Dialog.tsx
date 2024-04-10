
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material';
import styles from "./Dialog.module.css"
import { useDialog } from '../../hooks/useDialog';
import { ButtonGroup } from '@mui/material';



export const DialogComponent = (props: any) => {

   const { open, handleCloseDialog, handleTextAreaDialog, handleSave, textArea} = useDialog(props);

  return (
<>
    <Dialog
            fullWidth = {true}
            maxWidth = 'xs'
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby ="alert-dialog-title"
            aria-describedby ="alert-dialog-description"
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
          <ButtonGroup>
          <Button onClick={handleCloseDialog}>Close</Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
          </ButtonGroup>
        </DialogActions>
        
        </Dialog>
    </>
    )
}


