import React from "react";
import './Style.css';
import Address from './Component/Profile/Address.js';
import FullName from './Component/Profile/FullName.js';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';


function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Address />
        </div>
        <div>
          <ProfilePhoto />
        </div>
        <div>
          <FullName />
        </div>
      </div>
    </div>
  );
}

export default App;
