import React from 'react'
import Card from 'react-bootstrap/Card';


const Portfolio = () => {
    return (
        <div className='port'>
            <h1 className='H1'>Portfolio</h1>
            <div className='CardTxt'>
                <Card className='c1' style={{ width: '23rem' }}>
                    <Card.Body>
                    <Card.Text>
                    <h3 className='d3'>MOBILE DESGIN</h3>
                    <div className='HR'></div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='c2'  style={{ width: '23rem' }}>
                    <Card.Body>
                    <Card.Text>
                        <h3 className='d3'>WEB DESGIN</h3>
                        <div className='HR'></div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='c1' style={{ width: '23rem' }}>
                    <Card.Body>
                    <Card.Text>
                    <h3 className='d3'>LOGO DESGIN</h3>
                        <div className='HR'></div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='CardTxt'>
                <Card className='c2' style={{ width: '23rem' }}>
                    <Card.Body>
                    <Card.Text>
                        <h3 className='d3'>WEB APPLICATION <br/> DEVELOPMENT</h3>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='c1' style={{ width: '23rem' }}>
                    <Card.Body>
                    <Card.Text>
                        <h3 className='d3'>MOBILE APPLICATION <br/> DEVELOPMENT</h3>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='c2'  style={{ width: '23rem' }}>
                    <Card.Body>
                    <Card.Text>
                        <h3 className='d3'>PWA <br/> DEVELOPMENT</h3>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Portfolio

