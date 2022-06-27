
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import{GrFavorite} from 'react-icons/gr'; 
import{BsFolderPlus} from 'react-icons/bs'
import { useSelector , useDispatch} from 'react-redux';

import  userSlice  from '../reducers/login';


const Image = styled.img`
width:100%;
`
const Wrap =styled.div`
background-color:whitesmoke;
padding:10px;
margin-left:5px;
`;
const Name =styled.p`
height:100px;
padding:20px;
color:black;
text-align:center;
font-weight:bold; `;

const Love = styled(GrFavorite)`

width:50px;
height:30px;
&:hover {
 width:60px;
 height:50px;}
`;

const Add =  styled(BsFolderPlus)`
width:50px;
height:30px;
&:hover {
  width:60px;
  height:50px;}
`;

const Div = styled.div`
 padding: 10px;
 width:30px;

`;

 function Card (props){
  const user = useSelector(state =>state.login);

  const dispatch = useDispatch();
   var love = false ;
   if(user.user.token){
     var favorites = user.favorite
     for(let i= 0; i<= favorites.length ; i++){
       if(props.videodata._id === favorites[i]){
         love = true
       }
     }
   }

   const handleAdd =()=>{
   dispatch(userSlice.actions.addFavorite(props.videodata._id));
   fetch('http://localhost:3001/addfavorite', {
    method: 'PATCH', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'auth-token':user.user.token
    },
    body: JSON.stringify({videoid:props.videodata._id})
    })
    .then(response =>response.json())
    .then(data =>{

      console.log(data)
    })
   }
   const handleRemove=()=>{
    dispatch(userSlice.actions.deleteFavorite(props.videodata._id));
    fetch('http://localhost:3001/deletefavorite', {
    method: 'PATCH', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'auth-token':user.user.token
    },
    body: JSON.stringify({videoid:props.videodata._id})
    })
    .then(response =>response.json())
    .then(data =>{

      console.log(data)
    })
    
    }
 
  const navigate = useNavigate();
    return(
        <Wrap >
          <div > 
             <Image src ={props.videodata.img}  onClick={ ()=>{navigate(`/video/${props.videodata._id}`)}} />
             <Name>{props.videodata.name}</Name>
            {user.user.token && <Div>{love? <Love  onClick ={handleRemove} /> :<Add onClick={handleAdd} />}</Div>}
          </div>
        </Wrap>
     

    )
};
export default Card;