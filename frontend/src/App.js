import React from 'react';
import './App.css';
import NavBar from "./components/Bar/NavBar";
import CreditCard from "./components/CreditCard/CreditCard";
import PayCard from "./components/PayCard/PayCard";
import NavTab from "./components/Tab/NavTab";
import Container from '@material-ui/core/Container';

function App() {
  return (
        <div>
            <NavBar/>
            <Container>
                <CreditCard/>
                <PayCard/>
                <NavTab/>
            </Container>
        </div>
  );
}

export default App;