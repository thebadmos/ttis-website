// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/router/index";
import './styles.css'; // Reference the styles.css file

function App() {
  return (
    <Router>
      {/* Use the 'Routes' component to define your routes */}
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
