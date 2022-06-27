import React,{useState, useEffect} from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import {IoMdHome,IoMdLogIn ,IoIosPersonAdd} from "react-icons/io";
import{MdFavorite} from 'react-icons/md';
import {HiOutlineLogout} from 'react-icons/hi';
import{ Navbar , NavbarBrand , NavbarToggler ,Collapse,Nav, NavItem} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import userSlice from "../reducers/login";
import { getVideodata } from '../reducers/videodata';
const Home =  styled(IoMdHome)`
height:100%;
width:50px;
margin-right:30px;
margin-left:20px;
&:hover {
  background: #74aef5;
  width:70px;
  border-radius:10px;
  cursor: pointer;
  padding:5px;
}
`;
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
`;
const Sign = styled(IoIosPersonAdd)`
color:white;
height:100px;
width:30px;
margin-right:20px;
`;
const Lognout = styled(HiOutlineLogout)`
color:white;
height:100px;
width:30px;
margin-right:20px;`;


const Drop = styled.div`

  
`;
const NavbarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-right:20px;
  padding-left:20px;
  text-decoration: none;
  margin-right:50px;

  &:hover {
    background: #48c1ea;
    border-radius:10px;
    cursor: pointer;
    color: navy;
    font-size:30px;
  }
  
`;
const Div = styled.div`
display:flex;`;
const Div2 = styled.div`

font-weight:bold;
font-size:30px;
&:hover {
  background: #8eb0da;
  padding:10px;
  border-radius:10px;
  cursor: pointer;
  font-size:40px;
}`;


function Navb(){
    const user = useSelector(state => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [click, setClick] = useState(false);

  const handleClick = ()=>{
        setClick(!click)
    }

  window.addEventListener('resize', function(){
      var x = window.outerWidth;
      if(x>700){ 
        setClick(false)
      }
    })

  useEffect(()=>{ 
      dispatch(getVideodata())
   },[dispatch])




    return(
     
      <div>


      <Navbar
        color="dark"
        dark
        expand="md"
        light
      >
        
        <NavbarBrand >
          <Div>
          <Home onClick={ ()=>navigate(`/`)} />
          {user.user.token ? <Div2>{ user.user.user.name}</Div2> : " "}
          </Div>
        </NavbarBrand>
        <NavbarToggler onClick={handleClick} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
             <NavbarLink  to ='/favorite'  > < Fav />FAVORITE</NavbarLink >
            </NavItem>
            <NavItem>
             <NavbarLink to ='/sign-up'> < Sign />SIGN UP</NavbarLink>
            </NavItem>
            <NavItem>
          {user.user.token?  <NavbarLink to ='/'  onClick ={()=> dispatch(userSlice.actions.logOut()) }> < Lognout />lOG OUT </NavbarLink> :  <NavbarLink to ='/Login'> < Login />lOGIN </NavbarLink>}
            </NavItem>

          </Nav>  
        </Collapse>
      </Navbar>
     <Drop>
       {click ? <Dropdown /> : " "}
     </Drop>

    </div>
    )
}
export default Navb;