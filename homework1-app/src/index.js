import React from 'react';
import reactDom from 'react-dom';
import Header from './header/header'
import './header/style.css'
import './IT-MyFreedom/style.css'
import Main from './main/main'
import  './why are we block/style.css'
import './footer/style.css'
import Footer from './footer'

// import {render} from 'react-dom';
// import {Container} from './container/container'
// function Por () {
    
//     return (
//        <header>
//       <Container/>
//        </header>
//     )
    
// }
// render (<Por/>, document.getElementById('root'));
class App extends React.Component{
    render() {
        return (
            <body>
        <Header/>
         <Main/> 
         <Footer/>
        </body>
        )
    }
}

reactDom.render(<App/>, document.getElementById('root'));