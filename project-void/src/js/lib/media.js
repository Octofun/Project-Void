async function getMediaStream(opts){
    return navigator.mediaDevices.getUserMedia(opts)
}

export default async function getMediaStream() {
    
    
    const video ={
        facingMode:"user",
        frameRate:{ideal:15,max:30},
    }
    const audio ={
        channelCount: {ideal:1},
    }

    try{
        console.log('trying audio and video access')
        const stream = await getMediaStream({video,audio})
        return{myStream:stream,audioEnabled:true,videoEnabled:true}
    }
    catch(err){
        console.log('An error has occurred...check devices')
        console.error(err)
        try{
            console.log('trying for just audio')
            const stream = await getMediaStream({audio})
            return{myStream:stream,audioEnabled:true,videoEnabled:false}
        }catch(err){
            console.log('audio has failed')
            console.err(err)
            try{
                console.log('trying just video')
                const stream = await getMediaStream({video})
                return{myStream: stream,audioEnabled:false,videoEnabled:true}
            }catch(e){
                console.log('Everything has failed..Reload the window')
                return{myStream:null,audioEnabled:false,videoEnabled:false}
            }
        }
    }
}