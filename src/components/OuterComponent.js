import React from 'react';

// Outer component
const OuterComponent = () => {
  // Inner component
  const InnerComponent = () => {

    return (
      <div> Inner Component</div>
    )
  }

  return (
    <div>
      <h1>Outer Component</h1>
      <InnerComponent />
     
    </div>
  );
};

export default OuterComponent;
