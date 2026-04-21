# Lumina AI - 跨境电商 AI Agent 实战指南

科技风格个人网站，展示跨境电商AI Agent实战系列文章。

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build
```

## 部署

### Vercel 部署

1. 将项目推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### GitHub Pages 部署

```bash
npm run build
# 将 dist 目录部署到 GitHub Pages
```

## 项目结构

```
src/
├── components/     # 组件
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── ArticleCard.tsx
│   └── SearchBar.tsx
├── pages/          # 页面
│   ├── Home.tsx
│   ├── Articles.tsx
│   ├── ArticleDetail.tsx
│   ├── CategoryPage.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/           # 数据
│   └── articles.ts
├── styles/         # 样式
│   └── globals.css
├── App.tsx
└── main.tsx
```

## 功能

- 文章列表与分类
- 搜索功能
- 关于页面
- 联系方式
- 科技风深色主题

## 作者

灵慧开明兽 - 灵慧光智 Lumina AI