import { useState } from "react";
import { IinputText } from "../helpers/interfaces/interfaces";

export const useDialog = (props : any) => {
    const {open, handleClose, textValue, setCategori, id} = props;
    const [textArea, setTextArea] = useState(textValue);

    const handleCloseDialog = () => {
        handleClose();
    }

    const handleTextAreaDialog = (event:any) => {
        //Todo: Method to control the textarea
        console.log('cambiando');
        const inputValue: string = event.target.value;
        setTextArea(inputValue)
        // console.log(inputValue);
      }

      const handleSave = () => {
        setCategori((categories:IinputText[]) => {
          return categories.map((category:IinputText ) => {
            if(category.id == id){
              category.textValue = textArea;
            }
            return category;
          })
        })
        handleClose();
      }

    return {
        open,
        handleCloseDialog,
        handleTextAreaDialog,
        handleSave,
        textArea
    }
}