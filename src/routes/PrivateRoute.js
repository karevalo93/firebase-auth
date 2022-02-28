import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import Loading from '../components/Loading'

export default function PrivateRoute({ component: Component, props }) {
  const auth = useAuth()


  return (
    <>
    {auth.isLoading ? (<Loading />) 
      : 
      (<Route {...props} >
        {auth.user ? <Component /> : <Redirect to="/login"/> }                                
      </Route> )
    }
    </>
  )
}
