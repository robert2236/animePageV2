import React, { useState, useEffect } from 'react'
import axios from 'axios'


const api = "63077coow6x6m4zz2qwab";




export  function Anime() {

    const [videos, setVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.streamsb.com/api/folder/list?key=${api}&fld_id=279289`);
          setVideos(response.data.result.files);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  
    const handleNextVideo = () => {
      if (currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      }
    }
  
    const handlePreviousVideo = () => {
      if (currentVideoIndex > 0) {
        setCurrentVideoIndex(currentVideoIndex - 1);
      }
    }
  
    return (
      <div>
        {videos.length > 0 && (
          <iframe
            src={videos[currentVideoIndex].link}
            width="600"
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        <button onClick={handlePreviousVideo}>Anterior</button>
        <button onClick={handleNextVideo}>Siguiente</button>
      </div>
    );
  }
  
