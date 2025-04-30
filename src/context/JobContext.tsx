import React, { createContext, useState, ReactNode } from "react";

interface JobContextType {
    requisitos: string[];
    addRequisito: (requisito: string) => void;
    clearRequisito:(requisito:string) => void;
    clearAllRequisitos:() => void;
    setRequisitos: React.Dispatch<React.SetStateAction<string[]>>;
}

const defaultValue: JobContextType = {
    requisitos: [],
    setRequisitos: () => { },
    clearRequisito: () => { },
    clearAllRequisitos:()=> {},
    addRequisito: () => { },
};

export const JobContext = createContext<JobContextType>(defaultValue);

interface JobProviderProps {
    children: ReactNode;
}

export const JobProvider = ({ children }: JobProviderProps) => {
    const [requisitos, setRequisitos] = useState<string[]>([]);

    const addRequisito = (requisito:string) => {
        const existRequisito = requisitos.some(r => r === requisito)
       !existRequisito && setRequisitos([...requisitos, requisito]);
    }

    const clearRequisito = (requisito:string) => {
        setRequisitos( prev => {
            const filtrarRequisistos = prev.filter( r => r !== requisito)
            return [...filtrarRequisistos]
        })
    }

    const clearAllRequisitos = () => {
        setRequisitos([])
    }

    return (
        <JobContext.Provider value={{ requisitos, setRequisitos,addRequisito,clearRequisito,clearAllRequisitos }}>
            {children}
        </JobContext.Provider>
    );
};
