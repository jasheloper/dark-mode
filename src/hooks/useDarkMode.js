import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage.js';




export default function useDarkMode(body) {

const [darkmode, setDarkMode] = useLocalStorage('dark');


useEffect(() => {

// check to see if the value from useLocalStorage is true or false.
// If it's true, add the class dark-mode to the body element.
// If it's false, remove the class from the body element.


{darkmode ? document.body.classList.add('dark-mode__toggle') : document.body.classList.remove('dark-mode__toggle'); }


}, []);

const setMode = light => {
setDarkMode(light);

window.localStorage.setItem(dark, JSON.stringify(light));
}


return [darkmode, setMode]
}


export default useDarkMode;