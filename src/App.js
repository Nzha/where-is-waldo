import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [className, setClassName] = useState(null);

  return (
    <div>
      <Header className={className} />
      <Main setClassName={setClassName} />
    </div>
  );
}

export default App;
