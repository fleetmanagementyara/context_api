import React, {createContext, useState, useContext} from 'react';

const TextContext = createContext();

export default function TextProvider({children}){
    const [text, setText] = useState("")
    
    return(
        <TextContext.Provider
            value = {{
                text,
                setText
            }}
        >
            {children}
        </TextContext.Provider>
    )
}

export const useTextContext = () => {
    const { text, setText } = useContext(TextContext);
    return { text, setText };
}