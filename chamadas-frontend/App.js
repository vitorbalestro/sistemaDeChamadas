import HomePage from './src/HomePage';
import Login from './src/Login';
import { NativeRouter } from 'react-router-native';



export default function App() {
  return( 
    <NativeRouter>
      <Login />
    </NativeRouter> 
    
  )
  }

