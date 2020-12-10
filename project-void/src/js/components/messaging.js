import React from 'react'

openChat = () => this.setState({showModal:true, newmessages: 0})
closeChat = () => this.setState({showModal:false})
handleMessage = (e) =>this.setState({message: e.target.value })


addMessage = (data,sender,socketIdSender) => {
    this.setState(prevState =>({
        messages: [...prevState.messages,{"sender":sender,"data":data}],    
    }))
    if(socketIdSender !== socketId){
        this.setState({newmessages: this.state.newmessages + 1})
    }
}


handleUsername = (e) => this.setState({username : e.target.value})

sendMessage = () => {
    socket.emit('chat-message',this.state.message,this.state.username)
    this.setState({message:"",sender:this.state.username})
}





