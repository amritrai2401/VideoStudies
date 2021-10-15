import React,{useRef,useState} from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from './VideoSidebar';

function Video({url,channel,description,briefdes,likes,messages,shares}) {
    const [playing,setPlaying]=useState(false);
    const videoRef=useRef(null);
    
    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <iframe 
                onClick={handleVideoPress}
                className="video__player"
                loop  
                ref={videoRef}
                src={url}>
            </iframe>
            
            <VideoFooter 
                channel={channel}
                description={description}
                briefdes={briefdes}
            />
            <VideoSidebar likes={likes} shares={shares} 
            message={messages}/>
           
        </div>
    )
}

export default Video;
