import axios from "./axios";
import React,{useEffect} from "react";
import './App.css';
import Video from "./Video";


function App() {
  
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    async function fetchPosts(){
      const response=await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  },[]);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {/* if every single video ruturn me a video object with following prop(url,etc) */}
        {/* This information are coming/fetching from our mongodb database */}
        {videos.map(
          ({ url,channel,description,briefdes,likes,messages,shares})=>(
            <Video
              url={url}
              channel={channel}
              briefdes={briefdes}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;