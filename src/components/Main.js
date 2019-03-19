import React from 'react'
import { Container, Header, Responsive } from 'semantic-ui-react'

export default function Main(props){
    
    return (
        <div className="main-content">
            <Container  text  textAlign='left'>
                <Responsive as={Container} getWidth={props.width}>                
                    <Header size="large">Hi, I'm <strong>Andrew Philippick</strong>, engineering student specialized in <strong>Data Analysis</strong>, and entrepreneur in the making.</Header>
                    <p id="small-description">I'm currently living in Paris, and looking for an end-of-study internship.</p>
                    <hr style={{marginRight:'2.5em'}}/>
                </Responsive>
            </Container>
        </div>
    )
} 