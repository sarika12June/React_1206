import React, { Component } from 'react';  
class App extends Component{  
       
   render() {  
      var myStyle = {  
         fontSize: 80,  
         fontFamily: 'Courier',  
         color: 'red'  
      }  
      return(  
         <div>  
            <h1 style = {myStyle}>www.javatpoint.com</h1>  
            <p data-demoAttribute = "demo">This website contains the best CS tutorials.</p>  
         </div>  
      );  
   }  
}  
export default App;  