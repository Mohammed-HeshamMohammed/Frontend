import React from 'react'
import 'charts.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ComponentSkills = () => {

    return (
        <div className='Skills'>
            <div className='top'>
                <h1 className='hh'>Skills</h1>
                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sagittis volutpat. Proin id quam nulla. Praesent elementum dictum aliquet. Quisque pharetra elit nisi. Aenean suscipit quam in lobortis scelerisque. Quisque in nibh efficitur elit mollis sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at aliquam tortor, et dictum magna.Quisque pretium lacinia pretium. Donec turpis ante, lobortis vel diam eget, vestibulum viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
            </div>
            <div>
                <div className='sec'>
                <div className='onLeft'>
                    <h3 className='H3'>My Foucus</h3>
                    <div className='hr'></div>
                    <ul>
                        <li>UI/UX Desgin</li>
                        <li>Responsive Desgin</li>
                        <li>Web Desgin</li>
                        <li>Mobile App Design</li>
                    </ul>
                </div>
                <div className='onRight'>
                    <p>HTMl</p>
                    <ProgressBar now={60} />                    
                    <p>CSS</p>
                    <ProgressBar now={70} />  
                    <p>JavaScript</p>
                    <ProgressBar now={85} />  
                    <p>React</p>
                    <ProgressBar now={88} />  
                    <p>Bootstrap</p>
                    <ProgressBar now={30} />  
                    <p>PhotoShop</p>
                    <ProgressBar now={40} />  
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default ComponentSkills
