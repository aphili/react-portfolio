import React from 'react'
import {Container, Responsive} from 'semantic-ui-react'

export default function Footer(){

    return(
        <div className="copyright">
            <br/>
            <Container text>
                <Responsive as={Container}>
                    <p>© Andrew Philippick. All rights reserved.</p>
                </Responsive>
            </Container>
        </div>

    )

}