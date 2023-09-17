import { useState } from 'react';
import { useFirebase } from './context/Firebase';
import logo from './logo.svg';
import './App.css';
import Facility from './component/facility/Facility';

function App() {

  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {/* <h1>Correct method</h1>
      <label>Email: </label>
      <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} required placeholder='Enter email'/><br/>
      <label>Password: </label>
      <input type='password'  onChange={(e) => setPassword(e.target.value)} value={password} required placeholder='Enter password'/><br/>
      <button onClick={() => {
        firebase.putData('users/accounts', {email, password});
      }}>Create User</button>
      <hr/> */}
      <Facility/>
    </>
  );
}

export default App;
