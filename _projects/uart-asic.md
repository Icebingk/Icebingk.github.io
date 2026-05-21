---
layout: project
title: "基于串口的全流程 IC 设计"
status: "completed"
github: ""
---

## 项目简介

独立完成从 RTL 设计到 GDSII 版图的全流程数字 IC 实现——一颗带 64-Byte FIFO 的 115200bps 串口通信芯片。

## 技术亮点

- **前端设计：** 独立完成 RTL 设计，DC 拓扑模式结合物理约束完成逻辑综合
- **电源网络：** 搭建 M5/M6 双层电源网格，有效抑制 IR Drop
- **时钟树：** 构建 3 级缓冲平衡时钟树，将全局 Skew 严格降至 **0.09ns**
- **时序收敛：** Setup 余量 **+9.77ns**，Hold 余量 **+0.046ns**，完美时序收敛
- **极低功耗：** 后端增量优化实现 **0.23mW** 超低功耗
- **物理签核：** DRC/LVS 零报错，成功导出 **GDSII 版图**

## 技术栈

`Verilog` `Design Compiler` `IC Compiler` `FIFO` `UART` `GDSII`
