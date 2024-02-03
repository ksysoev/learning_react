import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "gray" }}
      />
    </div>
  );
}

export default App;