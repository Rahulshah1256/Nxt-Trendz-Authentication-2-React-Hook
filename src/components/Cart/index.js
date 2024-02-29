import Cookies from 'js-cookie'
import Header from '../Header'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Cart = () => {
  const navigate = useNavigate()
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <div className='cart-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png'
          alt='cart'
          className='cart-image'
        />
      </div>
    </>
  )
}

export default Cart
