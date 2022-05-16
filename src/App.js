import React from "react";
import Review from "./components/Reviews/Review.js";
import Appform from "./components/Hero/Form.js";
import React from "react-dom"


function App() {

  return (  
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />   
        <Appform />    
      </section>
    </main>
   );
}

export default App;
