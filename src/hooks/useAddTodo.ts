import { useState } from 'react';
import { IinputText } from '../helpers/interfaces/interfaces';
import { v4 as uuid } from 'uuid';

export const useAddTodo = (addCategory: any) => {

    const [inputText, setInputText] = useState<IinputText>({
        textValue: '',
        id:''
      });
    
      const { textValue } = inputText;
    
      const onchangeText = (event: any):void =>  {
        const inputValue: string = event.target.value;
        setInputText({textValue:inputValue, id: uuid() }); //Todo: avoid create multiple uuid
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
    

    return { textValue, 
            onchangeText,
            onKeyUpHandler,
            onAdd
    }
}

