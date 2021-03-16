import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";
function App() {
  return (
    <div className="App">
      <SwaggerUI
        url="https://petstore3.swagger.io/api/v3/openapi.json"
        docExpansion={"full"}
      />
      <SwaggerUI
        url="https://petstore3.swagger.io/api/v3/openapi.json"
        docExpansion={"full"}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
