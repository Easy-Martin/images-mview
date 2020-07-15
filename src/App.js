import React, { useState } from 'react';
import logo from './logo.svg';
import ImagesView from './images-mview';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setVisible(true)}>xxxx</button>
      </header>
      <ImagesView
        className="demo-images"
        current={2}
        visible={visible}
        onClose={() => setVisible(false)}
        imageList={[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594724614876&di=1c8497dfd08f789ee3eee505c11d7511&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201303%2F23%2F124331t26mddrgddg56s2z.jpg',
          'http://attach.bbs.miui.com/forum/201312/31/111859myvyiivetyftfz2n.jpg',
          'http://e.hiphotos.baidu.com/zhidao/pic/item/b64543a98226cffc7a951157b8014a90f703ea9c.jpg',
        ]}
      />
    </div>
  );
}

export default App;
