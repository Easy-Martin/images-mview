import { useState } from 'react';
import logo from './logo.svg';
import ImagesView from './images-mview';
import { css } from '@emotion/css';

const appStyle = css`
  text-align: center;
`;

const appHeaderStyle = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const appLogoStyle = css`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className={appStyle}>
      <header className={appHeaderStyle}>
        <img src={logo} className={appLogoStyle} alt="logo" />
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
