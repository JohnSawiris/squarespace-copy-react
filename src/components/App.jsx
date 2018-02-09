import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Careers from './pages/Careers';
import Footer from './ui/Footer';

function App() {
  return (
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700');
        
        body {
          margin: 0;
          font-family: 'Source Sans Pro', sans-serif;
        }

        div {
          box-sizing:  border-box;
        }

        img {
          max-width: 100%;
        }
      `}</style>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/careers" component={Careers} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
