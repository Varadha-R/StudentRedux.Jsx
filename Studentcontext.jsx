import React ,{createContext,useState} from "react";
export const StudentContext = createContext();

export function StudentProvider({children}){
    const [result,setResult]=useState("");
    return(
        <>
        <StudentContext.Provider value ={{result,setResult}}>
            {children}
        </StudentContext.Provider>
        </>
    )
}
