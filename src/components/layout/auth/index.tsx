import { Outlet } from 'react-router-dom'
import Images from '../../../config/images'
import './auth.scss';
function AuthLayout() {
  return (
    <div className="auth-wrapper">
      <div className="auth-img">
        <img src={Images.authLeftImg} alt="auth left image" />
      </div>
      <div className="auth-form_wrap">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
