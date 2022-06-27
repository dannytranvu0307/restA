import React from 'react';
import { useState } from 'react'; 
import{Form, FormGroup,Input,Label,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


 
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



const SignUp = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');  
    const [pw, setPw] = useState('');
    const [pwa, setPwa] = useState('');



    
    return(
        <div className='container'>
        <div className='row div2' >
  
      
      <Forms className='col-6'>
                <Div className =''>
                 <Text> SIGN UP</Text>
                 <FormGroup floating>
                            <Input
                             onChange={e=>setName(e.target.value)}
                           id="name"
                           name="name"
                           placeholder="Name"
                           type="text"
                           value ={name} 
                           />
                         <Label for="examplePassword"> Name</Label>
                    </FormGroup>
                 
                       <Form inline >
                         <FormGroup floating >
                            <Input
                             
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
                             
                             onChange={e=>setPw(e.target.value)}
                           id="Password"
                           name="password"
                           placeholder="Password"
                           type="password"
                           value ={pw}
  
                           />
                         <Label for="examplePassword">  Password</Label>
                    </FormGroup>
                    <FormGroup floating>
                            <Input
                             
                             onChange={e=>setPwa(e.target.value)}
                           id="Password"
                           name="password"
                           placeholder="Password Again"
                           type="password"
                           value ={pwa} 
                           />
                         <Label for="examplePassword"> Password again</Label>
                    </FormGroup>
                  
                     </Form>
                     
                     <Bt > Submit </Bt>         
             </Div>         
      
   </Forms>
   </div>
   </div>
    )
};
export default SignUp;