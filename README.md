# My Space — 个人技术博客

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)](https://pages.github.com)

基于 **Jekyll** 构建的静态个人网站，部署在 **GitHub Pages**。

## ✨ 特性

- 🌓 深色 / 浅色主题切换（跟随系统 + 手动持久化）
- 📝 Markdown 博客写作
- 🛠️ 项目作品展示（Jekyll Collections）
- 📱 移动端响应式布局
- ⚡ 零 JavaScript 框架，纯 CSS 变量驱动主题

## 🚀 本地预览

```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 浏览器打开 http://localhost:4000
```

## 📁 目录结构

```
├── _config.yml          # Jekyll 站点配置
├── _layouts/            # 页面布局模板
├── _includes/           # 可复用组件
├── _posts/              # 博客文章（Markdown）
├── _projects/           # 项目条目（Collections）
├── assets/
│   ├── css/style.css    # 双主题样式
│   ├── js/main.js       # 主题切换脚本
│   └── images/          # 图片资源
├── index.md             # 首页
├── about.md             # 关于页
├── blog.md              # 博客列表
├── projects.md          # 项目列表
└── README.md
```

## 📄 许可

MIT License
