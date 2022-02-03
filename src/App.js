import './App.scss';
import React, {useEffect} from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './Components/colors.scss'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import InnerWork from './Pages/InnerWork/InnerWork';
import Projects from './Pages/Projects/Projects';
import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import 'bootstrap';
import { ScrollTrigger } from 'gsap/all'
import Contact from './Pages/Contact/Contact'
import { AnimatePresence } from 'framer-motion'


function App() {

  const options = {
    damping: 5,
  }

  const location = useLocation();

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    let bodyScrollBar = Scrollbar.init(document.body, options);

    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);
  })

  return (
    <div className="App">
      <div className="scroll">
      
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
              
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/inner" component={InnerWork} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/projects/:id" render={props => (<InnerWork {...props}/>)}/>
                  <Route path="/contacts" component={Contact} />
                  
              </Switch>
            </AnimatePresence>
          
        </div>
    </div>
    
  );
}

export default App;
