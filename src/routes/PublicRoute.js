import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import Loading from '../components/Loading'

export default function PublicRoute({ component: Component, props }) {
    const auth = useAuth()
  return (
    <>
    {auth.isLoading ? (<Loading />) 
      : 
      (<Route {...props} >
        {!auth.isLoading && auth.user ? <Redirect to="/"/> : <Component/>}                                
      </Route> )
    }
    </>
  )
}
