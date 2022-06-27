import React, { } from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';


const Homepage = ()=>{

  const video = useSelector(state => state.video);
  
    return(
        <div className='row'> 
        { video.videos.map((post) => (
        <div className = ' col-lg-4 col-md-6 col-sm-12 '  key ={post._id} >
          <Card  videodata= {post} />
    
        </div>
        
      ))}
        </div>
    )
};
export default Homepage;