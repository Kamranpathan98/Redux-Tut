import React from 'react'
import Mobimage from '../images/Mobile img.jpg'
import Cartimg from '../images/Cart img.jpg'

const Home = () => {
    return (
        <div>
            <div className='cart-logo'>
                <img src={Cartimg} alt='' />
            </div>
            <h1>Add To Cart Page</h1>
            <div className='cart-wrapper row'>
                <div className='img-wrapper item col-md-6'>
                    <img src={Mobimage} alt='' />
                </div>
                <div className='text-wrapper item col-md-6'>
                    <span style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        Samsung Mt-52
                    </span> <br />
                    <span>
                        Price:  $ 2500
                    </span>
                    <div className='btn-wrapper'>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home