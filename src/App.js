import { useState } from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import Userlist from './components/Userlist';

function App() {
  const [activeUserId, setActiveUserId] = useState(null);//ilk etapta null değerini verebilirim yani başlangıçta herhangi bir veri yok
  return (
    <div className="App">
      <div><Userlist setActiveUserId={setActiveUserId} /></div>{/* userlist comp da bu fonksiyon kullanılarak userıd ulaşacağız */}
      {activeUserId && <div><UserDetail activeUserId={activeUserId} /></div>}{/* o atanmış userıd kullanılacak bu comp da */}
    </div>
  );
}

export default App;
