import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Orders from './components/Orders/Orders';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (

          <Layout />


    // <div className="App">
    //     <BrowserRouter>
    //       <Routes>
    //         <Route 
    //           path='/' 
    //           element={<Navigate to='/dashboard' element={<Dashboard/>} />} //initial navigate
    //         />
    //         <Route path='/dashboard' element={<Dashboard />} />
    //         <Route path='/order-details' element={<Orders />} />
            
    //       </Routes>
    //     </BrowserRouter>

    // </div>
  );
}

export default App;
