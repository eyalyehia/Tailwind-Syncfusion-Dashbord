import { createContext , useContext , useState } from "react";

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu , setActiveMenu] = useState(true);
    const [isClicked,setIsClicked] = useState(initialState);
    const [screenSize,setScreenSize] = useState(undefined);
    const [themeSettings,setThemeSettings] = useState(false);
    const [currentColor,setCurrentColor] = useState('#03C9D7');
    const [currentMode,setCurrentMode] = useState('Light');

    const setMode = (e) =>{
        
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode',e.target.value)

        setThemeSettings(false)
    }

    const setColor = (color) =>{
        setCurrentColor(color)

        localStorage.setItem('themeColor',color)

        setThemeSettings(false)
    }


    const handleClick = (clicked) => {
        setIsClicked({...initialState , [clicked]:true})
    }

    const handleClickOff = (clicked) => {
        setIsClicked({...initialState , [clicked]:false})
    }
    return (
        <StateContext.Provider
         value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            themeSettings,setThemeSettings,
            currentColor,setCurrentColor,
            currentMode,setCurrentMode,
            setMode,setColor,
            handleClickOff
         }}>
{children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);