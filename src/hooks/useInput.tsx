import { FormEvent, useState } from "react"




const useInput = () => {
    const [inputState, setInputState] = useState('')

    const updateInputStae = (event: FormEvent<HTMLInputElement> | string) => {
        if(typeof event == 'string'){
            setInputState(event)
        }else{  
            setInputState(event.currentTarget.value)
        }
      
    }

    return{
        state: inputState,
        update: updateInputStae
    }
}


export default useInput 