import { useState } from 'react';
import logo from './logo.svg';
import ImagesView from './images-mview';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setVisible(true)}>图片预览</button>
      </header>
      <ImagesView
        className="demo-images"
        current={0}
        visible={visible}
        onClose={() => setVisible(false)}
        imageList={[
          'https://img1.baidu.com/it/u=2172818577,3783888802&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422',
          'https://img1.baidu.com/it/u=519717897,205069439&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
          'http://e.hiphotos.baidu.com/zhidao/pic/item/b64543a98226cffc7a951157b8014a90f703ea9c.jpg',
        ]}
      />
    </div>
  );
}

export default App;
