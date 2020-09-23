import React from "react";
import "./App.css";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Conditional from "./components/Conditional";
import ConditionalComIf from "./components/ConditionalComIf";

function App() {
  return (
    <div className="App">
      <Card title="#06 - Conditional v2">
        <ConditionalComIf numero={11}></ConditionalComIf>
      </Card>

      <Card title="#05 - Conditional v1">
        <Conditional numero={11}></Conditional>
      </Card>

      <Card title="#04 - Repeticao">
        <Repeticao></Repeticao>
      </Card>

      <Card title="#03 - Componente Com Filhos">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card title="#02 - Componente Com Parametro">
        <ComParametro
          title="Esse é o título"
          subtitle="Esse é o subtitle"
        ></ComParametro>
      </Card>

      <Card title="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  );
}

export default App;
