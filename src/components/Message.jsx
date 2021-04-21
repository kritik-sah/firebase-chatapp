import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'

const Message =  forwardRef(({message ,user} , ref) => {
    
    const isUser = user === message.user;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_usercard": "message_guestcard"}>
                <CardContent>
                    <Typography variant="p" component="h6">
                    {message.user}🤞: &nbsp; {message.message}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
});

export default Message
