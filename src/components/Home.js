import React from 'react'
import background from "./images/2.jpeg"
import { Link } from 'react-router-dom'


export default function Home() {

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '100%'
        }} className='bg-dark text-black text-center d-flex '>

            <div style={{ display: 'block', width: '100%' }}>
                {/* <Navbar /> */}
                <div style={{ marginTop: '150px', marginLeft: '100px' }} >
                    <div className='in-center' my-3>
                        <h1><u>DREAM CONNECT</u></h1>
                    </div>
                    <div className='in-center my-2'>
                        <h4>Welcome to Dream Connect</h4>
                    </div>
                    <div className='in-center my-2'>
                        <h4>Jump right in and explore our hotels </h4>
                    </div>
                    <div className='in-center my-2'>
                        <h4>Feel free to add your own hotels and review other's</h4>
                    </div>
                    <Link to="/rooms" className="btn btn-outline-primary btn-lg">Get Started</Link>
                </div>
            </div>


        </div>
    )
}
