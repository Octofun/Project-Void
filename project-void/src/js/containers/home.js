import React from 'react'
import queryString from 'query-string'
import Chat from './chat'
import CreateRoom from '../components/create-room'
import Header from '../components/header'
import Hero from '../components/hero'
import Social from '../components/social'
import HowItWorks from '../components/how-it-works'
import Features from '../components/features'
import Footer from '../components/footer'
import Goodbye from '../components/goodbye'
import NotFound from '../components/not-found'

export default class Home extends React.Component{
 
    constructor(props){
        super(props)

        const pathname = window.location.pathname

        if(/^\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/.test(pathname)){
            const roomCode = pathname.slice(1)
        

        const queryParams = queryString.parse(window.location.search)
        const created = queryParams.created

        window.history.replaceState(null,null,`${window.location.origin}${pathname}`)
        //This block of og-level code redirects the user to a rendered page 
        //Remembers the block also
        this.state = {
            route: 'chat',
            roomCode,
            created
        }
    }else if (pathname === '/'){
        this.state = {
            route: 'home'
        }
    }else if (pathname === '/goodbye'){
        this.state = {
            route: 'goodbye'
        }
    }else{
        this.state = {
            route: '404'
        }
    }
    }

    handleCreateRoom(roomCode){
        //I am technically lazy to include router.js into the code base
        //So picking up from the url on load

        window.location = `${window.location.origin}/${roomCode}?created=true`

    }

    renderHome(){
        return(
            <div id = 'home'>
                <Header />
                <Hero/>
                <CreateRoom onCreateRoom={this.handleCreateRoom.bind(this)}/>
                <Social />
                <HowItWorks />
                <Features />
                <Footer />
                </div>
        )
    }
    renderChat(){
        const {roomCode,created} = this.state
        return <Chat roomCode={roomCode} created={created}/>
    }
    renderGoodbye(){
        return <Goodbye/>
    }

    render404(){
        return <NotFound/>
    }
}