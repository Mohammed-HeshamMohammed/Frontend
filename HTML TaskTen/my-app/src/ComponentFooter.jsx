import React from 'react'
import Button from 'react-bootstrap/Button';

const ComponentFooter = () => {
    return (
        <div className='footer'>
            <div className='ll'>
                <p className='HK'>GET IN TOUCH</p>
                <p>ahmed@hotmail.com</p>
                <p>777-882-9521</p>
            </div>
            <div>
            <Button className='btn1' variant="dark">Contact Us</Button>
            </div>
            <div className='pp'>
                <div className="icons">

                </div>
                <div><p >Copyright © 2019 KR </p></div>
            </div>
            
        </div>
    )
}

export default ComponentFooter
