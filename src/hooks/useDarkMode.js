import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage.js';




export default function useDarkMode(body) {

    const [darkmode, setDarkMode] = useLocalStorage('not enabled');


    useEffect(() => {
       
      });
}


export default useDarkMode;