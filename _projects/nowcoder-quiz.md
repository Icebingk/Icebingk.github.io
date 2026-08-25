---
layout: project
title: "牛客专项知识题库"
status: "active"
github: "https://github.com/Icebingk/nowcoder-quiz"
demo: "https://icebingk.github.io/nowcoder-quiz/"
excerpt: "面向数字 IC 与 FPGA 面试复习的 764 道专项知识题网站，支持逐题作答、错题收藏、资料阅读和跨设备云同步。"
---

## 项目简介

将数字电路、Verilog 和 FPGA/CPLD 专项知识题整理为可直接在浏览器使用的学习网站。网页兼顾刷题与复习，支持手机访问，并通过 Supabase 实现邮箱登录与跨设备进度同步。

## 主要功能

- **逐题作答：** 单题展示、左右切题、题号导航和提交后即时解析
- **学习管理：** 做过、未做、错题、收藏及非选择题筛选
- **复习资料：** 将 Verilog、数字逻辑与 FPGA 学习资料整合到同一网页
- **本地优先：** 断网时继续使用浏览器本地存储，不影响答题
- **云端同步：** 手机和电脑登录同一邮箱后同步答题记录、错题与收藏
- **进度迁移：** 支持 JSON 导出与导入，将原本的本地进度迁移到云端

## 技术实现

- 静态 HTML、CSS 与原生 JavaScript
- GitHub Pages 自动发布与 HTTPS
- Supabase Auth 邮箱登录
- PostgreSQL JSONB 进度存储与 Row Level Security 数据隔离

## 技术栈

`JavaScript` `GitHub Pages` `Supabase Auth` `PostgreSQL` `RLS` `LocalStorage`
