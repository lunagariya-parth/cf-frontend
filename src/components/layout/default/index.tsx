import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../../nav'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'

function Layout() {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)

  const isValid = localStorage.getItem('isValid')
  useEffect(() => {
    if (isValid !== 'true') {
      navigate('/login')
    }
  }, [authContext, navigate])

  if (isValid) {
    return (
      <div className="page-wrapper">
        <Nav />
        <Outlet />
      </div>
    )
  }

  return null
}

export default Layout
