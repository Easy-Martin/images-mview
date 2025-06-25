# images-mview

一个基于 React 的图片查看组件，现已迁移到 Vite 构建系统。

## 安装

```bash
yarn add images-mview
# 或
npm install images-mview
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建库文件
npm run build:lib

# 构建演示应用
npm run build

# 预览构建结果
npm run preview
```

## 使用示例

```jsx
import React, { useState } from 'react';
import ImagesView from 'images-mview';
import "images-mview/dist/images-mview.es.css"

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setVisible(true)}>查看图片</button>
      <ImagesView
        className="demo-images"
        current={2}
        visible={visible}
        onClose={() => setVisible(false)}
        imageList={[
          'https://example.com/image1.jpg',
          'https://example.com/image2.jpg',
          'https://example.com/image3.jpg',
        ]}
      />
    </div>
  );
}

export default App;
```

## 构建系统迁移

项目已从 Create React App + Rollup 迁移到 Vite：

- ✅ 更快的开发服务器启动
- ✅ 热模块替换 (HMR)
- ✅ 更快的构建速度
- ✅ 支持 ES 模块和 UMD 格式输出
- ✅ 内置 Less 支持

## API 文档

待补充...
