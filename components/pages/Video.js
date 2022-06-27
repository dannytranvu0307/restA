
import React, { useState } from 'react';

import{ useParams } from 'react-router-dom';
import './css/video.css'
import { BiArrowFromBottom } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { getVideodata } from '../../reducers/videodata';
import videoSlice from '../../reducers/videodata';
import {BsFillXCircleFill } from "react-icons/bs";
const Video = ()=>{
    const [comment , setComment ] = useState()
 const params = useParams(); 
 const dispatch = useDispatch();
 const video = useSelector(state => state.video);
 const user = useSelector(state =>state.login);

  if(video.videos.length === 0){
       dispatch(getVideodata())
       
   }else{
   
    for(var i = 0 ; i <= video.videos.length ; i++){
        if(params.id === video.videos[i]._id){
         
         
           const handleSubmit = ()=>{
              dispatch(videoSlice.actions.comment({index:i , x:{ name:user.user.user.name , image : user.user.image , comment : comment }}))
             
              fetch('http://localhost:3001/user/comment', {
                method: 'PATCH', 
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'auth-token':user.user.token ,
                },
                 body: JSON.stringify({ id : video.videos[i]._id , comment : comment })
                })
                .then(response =>response.json())
                .then(data =>{
            
                  console.log(data)
                })
                setComment('')

           }

           const handleDelete =(cmt)=>{
            dispatch(videoSlice.actions.deleteCMT({index:i , x:{ comment : cmt }}))
            fetch('http://localhost:3001/user/delete-comment', {
                method: 'PATCH', 
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'auth-token':user.user.token ,
                },
                 body: JSON.stringify({ id : video.videos[i]._id , comment : cmt })
                })
                .then(response =>response.json())
                .then(data =>{
            
                  console.log(data)
                })
        
        }
        

           
           return(
               <div className = "container-fluid">
               <div className ='row '>
                   <div className='col-12'>
                   <iframe
                   className = "video"
                  src={`https://www.youtube.com/embed/${video.videos[i].videoid}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  />
                   </div>
                <div className='discription'>
                    <div className='name'>{video.videos[i].name} </div>
                    <div>{ video.videos[i].discription}</div>
                    <div className='comment'> 
                    <div className='inputCMT'>
                    <input  className='input' type= 'text' placeholder='write your comment here'
                     onChange={e=>setComment(e.target.value)}
                     value={comment}
                     
                    />
                   <div>{user.user.token?<button className='post' onClick={handleSubmit}><BiArrowFromBottom/> comment</button>:<div className='warningLogin'> Please Login first       </div>}</div> 
                    </div>
                     <div>
                         {video.videos[i].comment.map((cmt)=>(
                             <div className='cmtcontainer' key={cmt.comment} >
                                 <div> <img src='https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg'  className='avatar'/></div>
                                 
                                  <div className  ='Cmt'>
                                      <div className='cmtname'>{cmt.name}  </div>
                                      <div className='cmttext'>{cmt.comment}   </div>
                                  </div>
                                             
                                  { user.user.token&& <div className='dele' >{user.user.user.name ===  cmt.name ? < div ><BsFillXCircleFill  onClick = {()=>handleDelete(cmt.comment)} /></div> :<div></div>}</div>}
                              
                             </div>
                         ))}
                     </div>
                    </div>
                 </div>
               
              </div>
                
               </div>
           )
        }
    }





   }
 
  
};
export default Video;