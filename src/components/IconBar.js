import React from 'react'
import { Icon, Container} from 'semantic-ui-react'

export default function IconBar(){
    return (
        <div className="icon-bar">
            <Container text textAlign='left'>
                <Icon size="large" link name="linkedin"/>
                <Icon size="large" link name="github"/>
                <Icon size="large" link name="twitter"/>
                <Icon size="large" link name="mail"/>
                <Icon size="large" link name="file text"/>
            </Container>
        </div>
    )
}