import { useState, useEffect } from "react"
import { EVENTS } from "../const"
import Page404 from "./404"
import { match } from 'path-to-regexp'

/* eslint-disable react/prop-types */
export function Router ({routes = [], defaultComponent: DefaultComponent = () => <Page404/>}){

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
      const onLocatiopnChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocatiopnChange)
      window.addEventListener(EVENTS.POPSTATE, onLocatiopnChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocatiopnChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocatiopnChange)
      }
  
    }, [])
  
    let routeParams = {}
    const Page = routes.find(({path}) => {
        if(path == currentPath)return true
        const matherUrl = match(path, {decode: decodeURIComponent})
        const mached = matherUrl(currentPath)
        if(!mached) return false
        routeParams = mached.params
        return true

    })?.Component

    return Page? <Page routeParams={routeParams}/> : <DefaultComponent routeParams={routeParams}/>
  
  }