---
layout: project
title: "基本人机接口实验"
status: "completed"
github: ""
---

## 项目简介

基于 **PSoC 5LP (CY8CKIT-050B)** 的基本人机接口系统。采用前后台事件驱动架构与软硬协同设计理念，实现按键消抖、PWM 调光与闪烁、以及 LCD 图形化进度条渲染。

## 技术亮点

- **硬件 PWM + 逻辑门控**：高频载波（调光）与低频包络（闪烁）在 UDB 硬件层叠加，零 CPU 开销
- **125μs 硬件定时器时基**：替代阻塞式 `CyDelay()`，构建硬实时调度核心
- **事件驱动 LCD 刷新**：异步标志位触发 + CGRAM 自定义 5×8 方块字模进度条
- **非线性亮度 LUT**：补偿人眼对数视觉特性，9 档亮度观感平滑递增
- **Control Register 总线优化**：仅状态翻转时写寄存器（~2 次/秒 vs 原 ~8000 次/秒）

## 技术栈

`PSoC 5LP` `C` `ARM GCC` `PSoC Creator` `HD44780 LCD`
