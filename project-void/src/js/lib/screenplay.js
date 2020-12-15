async function getMediaStream(opts) {
    return navigator.mediaDevices.getDisplayMedia(opts)
  }
  
  export default async function getMyScreen() {
  
    const video = {
        cursor: "always",
    }
    const audio = {
        sampleRate: 48000,
    }
  
    try {
      // Try and get video and audio
      console.log('try screen monitor and pc audio')
      const stream = await getMediaStream({video, audio})
      return {myStream: stream, audioEnabled: true, videoEnabled: true}
    } catch (err) {
      console.error(err)
      try {
        console.log('try just pc audio')
        // If that fails, try just audio
        const stream = await getMediaStream({audio})
        return {myStream: stream, audioEnabled: true, videoEnabled: false}
      } catch (err) {
        console.error(err)
        try {
          console.log('try just screen video')
          // If that fails, try just video
          const stream = await getMediaStream({video})
          return {myStream: stream, audioEnabled: false, videoEnabled: true}
        } catch (e) {
          return {myStream: null, audioEnabled: false, videoEnabled: false}
        }
      }
    }
  }
  