/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import SkeletonLoader from '../Components/Reusable/SkeletonLoader'


const PrivateRoute = ({ children }) => {
  const { user, loading }  = useContext(AuthContext)
  const location = useLocation()

  if (loading) return <SkeletonLoader></SkeletonLoader>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute
