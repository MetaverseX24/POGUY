# 官方网站

这是一个现代化的官方网站，采用Next.js框架开发，可以轻松部署到Vercel平台。

## 特色功能

- 🎨 现代化设计，响应式布局
- 📱 移动端友好
- ⚡ 快速加载
- 🔧 易于定制
- 🚀 一键部署到Vercel

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **动画**: Framer Motion

## 快速开始

### 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
```

### 部署到Vercel

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 选择Next.js框架
4. 点击部署

## 项目结构

```
├── app/                 # Next.js App Router
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 主页
├── components/         # React组件
│   ├── Header.tsx     # 导航栏
│   ├── Hero.tsx       # 英雄区域
│   ├── Features.tsx   # 特色功能
│   ├── About.tsx      # 关于我们
│   ├── Services.tsx   # 服务
│   ├── Contact.tsx    # 联系我们
│   └── Footer.tsx     # 页脚
├── public/            # 静态资源
└── package.json       # 项目配置
```

## 自定义

### 修改内容

- 编辑 `components/` 目录下的组件文件
- 修改 `app/page.tsx` 来调整页面结构
- 更新 `app/layout.tsx` 中的元数据

### 修改样式

- 编辑 `app/globals.css` 添加自定义样式
- 修改 `tailwind.config.js` 配置主题
- 在组件中使用Tailwind CSS类名

### 添加图片

将图片文件放在 `public/` 目录下，然后在组件中使用：

```jsx
import Image from 'next/image'

<Image src="/your-image.jpg" alt="描述" width={400} height={300} />
```

## 部署

### Vercel部署

1. 确保项目在GitHub上
2. 访问 [vercel.com](https://vercel.com)
3. 使用GitHub账号登录
4. 点击"New Project"
5. 选择你的仓库
6. 点击"Deploy"

### 其他平台

项目也可以部署到其他支持Next.js的平台：

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 许可证

MIT License

## 支持

如有问题，请提交Issue或联系开发团队。 