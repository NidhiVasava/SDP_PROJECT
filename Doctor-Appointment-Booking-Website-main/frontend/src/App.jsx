import './App.css';
import Layout from './layout/Layout';
import { AuthContextProvider } from './context/AuthContext'; // Import AuthContextProvider

function App() {
  return (
    <AuthContextProvider> {/* Wrap Layout with AuthContextProvider */}
      <Layout />
    </AuthContextProvider>
  );
}

export default App;



/* import { useState } from 'react'
import './App.css'
import Layout from './layout/layout';



function App() {

  return (
    <Layout />
  );
}

export default App*/
