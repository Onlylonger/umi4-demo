```ts
/**
 * mfsu 开启 + 这个包的引入，会导致 提示 TypeError: Super expression must either be null or a function;
 * 排查是 /node_modules/@chicv/admin-components/es/fields/input/index.js 里面获取不到 "antd/es/input" 导出的内容;
 * 详细可以 运行看下 错误栈
 * 
/
// 关闭 mfsu 则没问题
// 详细查看路径 src/pages/demo.tsx
import { TextOverLength } from "@chicv/admin-components";


<TextOverLength content='1231231'/>
```