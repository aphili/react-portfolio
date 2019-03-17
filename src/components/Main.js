import React from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'

export default function Main(){

    let description = "Hi, I'm Andrew Philippick, engineering student specialized in Business Intelligence, and entrepreneur in the making."
    return (
        <div className="main-content">
            <Container 
            text 
            textAlign='left'
            style={{
                    fontSize: '1.5em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '10em',
                    // marginLeft: '3em',
                    // marginRight: '3em'
            }}>
                <Header>{description}</Header>
                <p>I'm currently living in Paris, and actively looking for an end-of-study internship.</p>
                <Divider/>
            </Container>
        </div>
    )
} 