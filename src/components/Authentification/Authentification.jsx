import React, { useState } from 'react';
import Navbar from './Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      {/* Autres composants */}
    </div>
  );
};

export default App;
