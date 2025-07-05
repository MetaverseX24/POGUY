# 部署指南

## 部署到Vercel

### 步骤1：准备代码

确保你的项目已经完成并可以正常运行：

```bash
# 安装依赖
npm install

# 本地测试
npm run dev
```

### 步骤2：推送到GitHub

1. 在GitHub上创建一个新的仓库
2. 将代码推送到GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 步骤3：部署到Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击"New Project"
4. 选择你的GitHub仓库
5. 保持默认设置（Vercel会自动检测Next.js项目）
6. 点击"Deploy"

### 步骤4：配置域名（可选）

部署完成后，你可以：

1. 在Vercel项目设置中添加自定义域名
2. 配置DNS记录指向Vercel

## 项目特色

### 🎯 官方风格设计
- 采用传统的企业官网布局
- 突出显示重要信息（如CA地址）
- 专业的配色和排版

### 🖼️ 图片展示
- BONK.png 和 ｓ.png 作为主要展示图片
- 其他图片采用网格布局，营造凌乱但有序的效果
- 响应式设计，适配各种设备

### 📋 重要信息突出
- CA地址在多个位置显示：
  - 首页英雄区域
  - 联系我们页面
  - 页脚区域
- 支持一键复制功能

### 🚀 技术优势
- Next.js 14 + TypeScript
- Tailwind CSS 响应式设计
- 优化的图片加载
- SEO友好的结构

## 自定义修改

### 修改CA地址
在以下文件中搜索并替换CA地址：
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

### 修改公司信息
- 编辑 `app/layout.tsx` 中的元数据
- 修改 `components/Header.tsx` 中的公司名称
- 更新联系信息

### 添加更多图片
1. 将图片文件放入 `public/` 目录
2. 在组件中使用 `Image` 组件引用

## 性能优化

### 图片优化
- 使用Next.js的Image组件
- 自动优化和懒加载
- 支持WebP格式

### 代码分割
- Next.js自动代码分割
- 按需加载组件
- 优化首屏加载时间

## 维护

### 更新依赖
```bash
npm update
```

### 本地开发
```bash
npm run dev
```

### 构建测试
```bash
npm run build
npm start
```

## 故障排除

### 常见问题

1. **构建失败**
   - 检查TypeScript错误
   - 确保所有依赖已安装
   - 验证图片路径

2. **图片不显示**
   - 确认图片文件在 `public/` 目录
   - 检查图片路径是否正确
   - 验证图片格式支持

3. **样式问题**
   - 确保Tailwind CSS配置正确
   - 检查CSS类名拼写
   - 验证响应式断点

### 获取帮助

- 查看 [Next.js文档](https://nextjs.org/docs)
- 参考 [Vercel部署指南](https://vercel.com/docs)
- 提交GitHub Issue

## 许可证

MIT License - 可自由使用和修改 