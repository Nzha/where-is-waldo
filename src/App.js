import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [style, setStyle] = useState(null);

  return (
    <div>
      <Header style={style} />
      <Main setStyle={setStyle} />
    </div>
  );
}

export default App;
