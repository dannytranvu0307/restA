import React from 'react';
import './css/favorite.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Card from '../Card';


const Favorite = ()=>{
    const user = useSelector(state =>state.login);
    const  video = useSelector(state =>state.video);
    const list = video.videos.filter((video)=>{ 
     for (var i  =  0 ; i <= user.favorite.length ; i++){
      if( video._id === user.favorite[i]  ){
        return true;
      }
     }

    }
     )
    
     if(!user.user.token){
       return(<div className='warninglogin'>Please Login first </div> )
     }else{
       
     
      return( 
        <div className='container'>
             <div className='row'>{list.map((post) => (
        <div className = 'mt-4 col-lg-4 col-md-6 col-sm-12 '  key ={post._id} >
          <Card  key ={post._id}  videodata= {post}/>
        </div>
        
      ))}  </div> 
        </div>
    )
     }
  
   
};
export default Favorite;