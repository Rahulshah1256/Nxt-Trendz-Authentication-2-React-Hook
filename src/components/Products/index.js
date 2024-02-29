import Cookies from 'js-cookie'
import Header from '../Header'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Products = () => {
  const navigate = useNavigate()
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <div className='products-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png'
          alt='products'
          className='products-image'
        />
      </div>
    </>
  )
}

export default Products
