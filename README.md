# My Space — 个人技术博客

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-brightgreen)](https://icebingk.github.io)

**线上地址：** [https://icebingk.github.io](https://icebingk.github.io)

基于 **Jekyll** 构建的静态个人网站，部署在 **GitHub Pages**。

## ✨ 特性

- 🌓 深色 / 浅色主题切换（跟随系统 + 手动持久化）
- 🧭 技术能力、工程经历和成长轨迹展示
- 📝 Markdown 博客写作
- 🛠️ 项目作品展示（Jekyll Collections）
- 🧠 牛客专项知识题库入口
- 📱 桌面端与手机端响应式布局
- ⚡ 零 JavaScript 框架，纯 CSS 变量驱动主题

## 🚀 本地预览

```bash
# 首次使用时安装依赖
bundle install

# 构建并检查站点
bundle exec jekyll build

# 启动本地服务器
bundle exec jekyll serve

# 浏览器打开 http://localhost:4000
```

## 📁 目录结构

```text
├── _config.yml          # Jekyll 站点配置
├── _layouts/            # 页面布局模板
├── _includes/           # 可复用组件
├── _posts/              # 博客文章（Markdown）
├── _projects/           # 项目条目（Collections）
├── assets/
│   ├── css/             # 页面与主题样式
│   ├── js/              # 主题切换脚本
│   └── images/          # 图片资源
├── index.md             # 首页入口
├── about.md             # 关于页
├── blog.md              # 博客列表
├── projects.md          # 项目列表
└── README.md
```

本地的 `profile-readme/` 是独立的 GitHub 个人资料仓库，不属于本站源码，已通过 `.gitignore` 排除。

`_site/` 是 Jekyll 构建产物，可以随时删除并通过 `bundle exec jekyll build` 重新生成。

## 发布流程

1. 修改 Markdown、模板或样式。
2. 运行 `bundle exec jekyll build`。
3. 检查 `git status`，提交源码文件。
4. 推送到 `master`，GitHub Pages 自动发布。

## 📄 许可

MIT License
