import React from 'react'
import { Icon, Container, Responsive} from 'semantic-ui-react'

export default function IconBar(){
    return (
        <div className="icon-bar">
            <Container text textAlign='left'>
                <Responsive as={Container}>
                    <a href="https://www.linkedin.com/in/aphili/" target="_blank"><Icon size="large" link name="linkedin" /></a>
                    <a href="https://github.com/aphili/" target="_blank"><Icon size="large" link name="github"/></a>
                    <a href="https://twitter.com/iaphili" target="_blank"><Icon size="large" link name="twitter"/></a>
                    <a href="mailto:andrew@philippick.com" target="_blank"><Icon size="large" link name="mail"/></a>
                    <a href="%PUBLIC_URL%/curriculum-vitae.pdf" target="_blank"><Icon size="large" link name="file text"/></a>
                </Responsive>
            </Container>
        </div>
    )
}