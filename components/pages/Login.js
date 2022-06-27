import React from 'react';

import{Form, FormGroup,Input,Label,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {login } from '../../reducers/login';
import './css/Login.css';
import { useDispatch, useSelector } from 'react-redux';
 
const Forms =styled.div`
background-color:#aceaff;
height:100vh;
`
const Div =styled.div`
padding-top:30vh`;


const Bt = styled(Button)`
width:30%;
margin-left:35%;
`;


const Text =styled.div`
text-align:center;
margin:20px;
font-size:30px;
font-weight:bold`;

function Login(){
    const navigate = useNavigate();  
    const [email, setEmail] = useState('');  
    const [pw, setPw] = useState('');
   

    const dispatch = useDispatch();
    const user = useSelector(state => state.login);
   if(user.user.token)
     { navigate('/')}
  
 const  handleClick = ()=>{
       dispatch(login({email :email , password :pw }))
     
    }

    
    return(
      <div className='container'>
          <div className='row div2' >
    
        
        <Forms className='col-6'>
                  <Div className =''>
                   <Text> {user.status}</Text>
                         <Form inline >
                           <FormGroup floating >
                              <Input
                                className ={user.warning}
                                onChange={e=>setEmail(e.target.value)}
                                 id="Email"
                                 name="email"
                                 placeholder="Email"
                                 type="email"
                                 value={email}
    
                              />
                             <Label for="exampleEmail">   Email </Label>
                            </FormGroup>
                  {' '}
                       <FormGroup floating>
                              <Input
                               className ={user.warning}
                               onChange={e=>setPw(e.target.value)}
                             id="Password"
                             name="password"
                             placeholder="Password"
                             type="password"
                             value ={pw}
    
                             />
                           <Label for="examplePassword">  Password</Label>
                      </FormGroup>
                       </Form>
                       
                       <Bt onClick ={handleClick}> Submit </Bt>
                      
                       
               </Div>         
        
     </Forms>
     </div>
     </div>
     )






  }







export default Login;