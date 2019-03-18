import React from 'react'
import { Container, Divider, Header, Responsive } from 'semantic-ui-react'

export default function Main(props){
    
    return (
        <div className="main-content">
            <Container  text  textAlign='left'>
                <Responsive as={Container} getWidth={props.width}>                
                    <Header size="large">Hi, I'm <strong>Andrew Philippick</strong>, engineering student specialized in <strong>Data Analysis</strong>, and entrepreneur in the making.</Header>
                    <p>I'm currently living in Paris, and actively looking for an end-of-study internship.</p>
                    <hr/>
                </Responsive>
            </Container>
        </div>
    )
} 