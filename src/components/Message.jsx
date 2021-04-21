import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'

const Message =  forwardRef(({message ,user} , ref) => {
    
    const isUser = user === message.user;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_usercard": "message_guestcard"}>
                <CardContent>
                    <Typography variant="h5" component="h4">
                    {message.user}🤞: &nbsp; {message.message}
                    </Typography>
                </CardContent>
            </Card>
            {/* <h3>{props.sender}🤞: &nbsp; {props.text}</h3> */}
        </div>
    )
});

export default Message
