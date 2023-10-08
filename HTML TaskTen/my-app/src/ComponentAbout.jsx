import React from 'react'
import Button from 'react-bootstrap/Button';
import './App.css'
const ComponentAbout = () => {
    return (
        <div className='about'>
            <div className='sideLeft'>
                <h1>About Me</h1>
            </div>

            <div className='sideRight'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sagittis volutpat. Proin id quam nulla. Praesent elementum dictum aliquet. Quisque pharetra elit nisi. Aenean suscipit quam in lobortis scelerisque. Quisque in nibh efficitur elit mollis sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at aliquam tortor, et dictum magna. Quisque pretium lacinia pretium. Donec turpis ante, lobortis vel diam eget, vestibulum viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Duis ultricies justo sodales lobortis fermentum. Mauris massa augue, dapibus sed tempor eu, dapibus et nulla. Vivamus id scelerisque augue. Maecenas pretium ante non quam venenatis, sit amet tincidunt quam pellentesque. Aliquam porttitor ante sed eros egestas euismod.
                </p>
                <Button className='btn2' variant="dark">Download Resume</Button>

            </div>

        </div>
    )
}

export default ComponentAbout
