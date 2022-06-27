import 'bootstrap/dist/css/bootstrap.min.css';
import {IoMdLogIn ,IoIosPersonAdd} from "react-icons/io";
import{MdFavorite} from 'react-icons/md';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {HiOutlineLogout} from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';

const Fav = styled(MdFavorite)`
  color:white;
  margin-right:10px;
  height:100px;
  width:30px;
 
`;
const Login = styled(IoMdLogIn)`
color:white;
height:100px;
width:30px;
margin-right:20px;
display:block;
`;
const Logout = styled(HiOutlineLogout)`
color:white;
height:100px;
width:30px;
margin-right:20px;
display:block;
`;
const Sign = styled(IoIosPersonAdd)`
color:white;
height:100px;
width:30px;
margin-right:20px;
display:block;
`;
const Div = styled.div`
background-color:rgb(33, 37, 41);
width:200px;
position:absolute;
right:0px;

`;

const Li = styled.div`
display:flex;
color: #e1e9fc;

align-items: center;

padding-right:20px;
padding-left:20px;
&:hover {
  background: #252831;
  border-left: 4px solid #632ce4;
  cursor: pointer;
  color: pink;
}
&:hover {
  background: #48c1ea;
  border-radius:10px;
  cursor: pointer;
  color: navy;
  font-size:30px;
}
`;


const Lg = styled.div`
display:flex;
align-items: center;

`;
const NavbarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
list-style: none;
text-decoration: none;
margin-right:50px;

&:hover {
  background: #48c1ea;
  border-radius:10px;
  cursor: pointer;
  color: navy;
  font-size:30px;
}`;

function Dropdown(){
  const user = useSelector(state => state.login);

   console.log(user)
   const dispatch = useDispatch();
    const navigate = useNavigate();
  
    
 return(
     <Div >
       <Li onClick={ ()=>navigate(`/favorite`)}> <Fav/> FAVORITE </Li>   
       <Li onClick={ ()=>navigate(`/sign-up`)}>  <Sign /> SIGN</Li>       
       <Li>{user.user.token?  <NavbarLink to ='/'  > <Logout  /> LOG OUT</NavbarLink>  :<Lg onClick={ ()=>navigate(`/Login`)}> <Login /> LOG IN</Lg>}</Li>   
     </Div>
 )
}
export default Dropdown;