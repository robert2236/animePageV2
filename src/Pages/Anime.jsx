import React, { useState, useEffect } from 'react'
import { Container, Nav, Col, Button, Card, Image, Alert, Row } from 'react-bootstrap';
import axios from 'axios'
import { Navbar } from '../Components/Navbar';


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
    console.log(videos)
  const newVideo = videos[currentVideoIndex]?.file_code
  console.log(newVideo)

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
   
          <Navbar/>
          <iframe
      src={`https://sblona.com/e/${newVideo}.html`}
      frameBorder="0"
      marginWidth="0"
      marginHeight="0"
      allowFullScreen 
      width="640"
      height="360"
      
  

     
    ></iframe>
    
        <button onClick={handlePreviousVideo}>Anterior</button>
        <button onClick={handleNextVideo}>Siguiente</button> 
      </div>
    );
  }
  
