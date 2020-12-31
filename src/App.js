import "./App.css";
import { useState } from "react";

function App() {
  const [src0, setSrc0] = useState(0);
  const [src1, setSrc1] = useState(100);
  const [src2, setSrc2] = useState(200);

  return (
    <div className="App">
      <img
        onClick={() => setSrc0(src0 + 1)}
        alt="a random img"
        src={`https://picsum.photos/400/200?random=${src0}`}
      />
      <img
        onClick={() => setSrc1(src1 + 1)}
        alt="arandom img"
        src={`https://picsum.photos/400/200?random=${src1}`}
      />
      <img
        onClick={() => setSrc2(src2 + 1)}
        alt="a random img"
        src={`https://picsum.photos/400/200?random=${src2}`}
      />
    </div>
  );
}

export default App;
