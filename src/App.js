import logo from './logo.svg';
import Header from './component/Navbar/Header';
import Drawer from './component/Drawer/Drawer';
import Profile from './component/Profile/Profile';

function App() {
  
  return (
    <div >
      <Header/>
      <div style={{display:"flex",backgroundColor:"#ADD8E6",width:"100%"}}>
      <Drawer/>
      <Profile/>
      </div>
      
    </div>
  );
}

export default App;
