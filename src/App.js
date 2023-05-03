import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [foundAvatarStyle, setFoundAvatarStyle] = useState(null);

  return (
    <div>
      <Header foundAvatarStyle={foundAvatarStyle} />
      <Main setFoundAvatarStyle={setFoundAvatarStyle} />
    </div>
  );
}

export default App;
