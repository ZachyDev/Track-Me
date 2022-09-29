import React, { useState, useEffect} from 'react'
import { Card, Button,Form } from 'react-bootstrap';
function Home() {

    // initialize state
    const [visitorInfo, setVisitorInfo] = useState([]);
    const [userInput, setUserInput] = useState('2c0f:fe38:2405:864c:5d16:68e6:29f:9efe');

    const BASE_URL = `http://api.ipstack.com/${userInput}?access_key=`

    // useEffect hook to fetch data
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                // update state
                setVisitorInfo(data);
            })
    }, [])
    // handleInputChange
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }
    console.log(visitorInfo)
  return (
    <div className='main'>
        <div id="heading" className='bg bg-primary'>
            <h1 style={{'fontFamily': 'verdana','fontSize': '30px','fontWeight':'900'}}>ipstack</h1>
        </div>
            {/* card */}
            <Card>
                <Card.Header as="h5">Region: {visitorInfo.continent_name} </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Control
                         type='text'
                         placeholder='Enter an IP Address'
                         onChange={handleInputChange}
                         >
                         </Form.Control>
                    </Form.Group>
                    <Card.Title>{visitorInfo.country_name}</Card.Title>
                    <Card.Text>{visitorInfo.location.capital}</Card.Text>
                    <Card.Img variant='top' src={visitorInfo.location.country_flag} style={{width:'100px'}}></Card.Img>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    </div>
  )
}

export default Home