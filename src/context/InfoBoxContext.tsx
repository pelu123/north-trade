import { createContext, useContext, useState, ReactNode } from "react";
import { Properties } from '../types'

type BoxProviderProps = {
    children: ReactNode;
}

type InfoBoxContext = {
    isOpen: boolean;
    selectedProperty: Properties | null;
    openBox: (property: Properties) => void;
    closeBox: () => void;
}

//Initial value for the context
const initialContext: InfoBoxContext = {
    isOpen: false,
    selectedProperty: null,
    openBox: () => {},
    closeBox: () => {}
}

const BoxContext = createContext(initialContext);

export function useBoxContext() {
    const context = useContext(BoxContext);
    if(!context) {
        throw new Error("BoxContext must be used within a BoxProvider")
    }
    return context
}

export function BoxProvider({children}: BoxProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [ selectedProperty, setSelectedProperty] = useState<Properties | null>(null);

    const openBox = (property: Properties) => {
        setSelectedProperty(property)
        setIsOpen(true)
    };
    const closeBox = () => {
        setSelectedProperty(null)
        setIsOpen(false)
    };

    

    return (
        <BoxContext.Provider value={{isOpen, selectedProperty, openBox, closeBox}}>
            {children}
            
        </BoxContext.Provider>
    )
}