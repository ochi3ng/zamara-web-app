import './App.css';
import LoginScreen from './components/LoginScreen';
import Dashbord from './components/Dashbord';
import { Routes, Route } from 'react-router-dom';
import ContinentScreen from './menu/ContinentScreen';
import ListStaffComponent, { UpdateModal } from './menu/ListStaffComponent';
import CreateStaffComponent from './menu/CreateStaffComponent';

type Props = /*unresolved*/ any
function App(staffList: Props) {

  return (
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/staff' element={<CreateStaffComponent />} />
      <Route path='/dash/:id' element={<Dashbord />} />
      <Route path='staffpage' element={<ListStaffComponent />} />
      <Route path='/Continent' element={<ContinentScreen />} />
      <Route path='/update' element={<UpdateModal/>}/>
    </Routes>
  );
}

export default App;
