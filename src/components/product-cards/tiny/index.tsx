import React from "react";

function App({
  productId,
  hideSingleDropdown,
}: {
  productId: string;
  hideSingleDropdown?: Boolean;
}) {
  return (
    <div className="App">
      <h1>{`Tiny Product ${productId}`}</h1>
    </div>
  );
}

export default App;
