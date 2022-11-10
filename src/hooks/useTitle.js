import { useEffect } from "react"
//10.title of the page will change with the page you visit.

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title} - Buy Book Online in BookStore ` 
    },[title])
}

export default useTitle;