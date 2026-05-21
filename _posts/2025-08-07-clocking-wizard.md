---
layout: post
title: "利用 Vivado Clocking Wizard 实现动态调整输出时钟的频率和相位"
date: 2025-08-07
author: "ADBD"
tags: ["FPGA", "Vivado", "Clocking Wizard", "AXI4-Lite", "Verilog"]
external_url: "https://blog.csdn.net/zjk10086/article/details/150017884"
---

## 背景

为了准备电赛的扫频功能（88MHz-108MHz，步进 0.1MHz），利用 Vivado 的 Clocking Wizard IP 核实现**动态调整锁相环输出频率和相位**。

## 核心技术

- **AXI4-Lite 协议**：通过握手协议读写 IP 核内部寄存器，实现频率和相位的动态切换
- **Python 参数计算**：编写 Python 脚本自动计算最优倍频/分频参数（整数+0.125 倍小数），生成 COE 文件导入 ROM
- **二段式状态机**：`time_tree_dy.v` 模块控制 AXI 读写时序，`MMCM_Control.v` 模块管理参数传输与 ROM 顺序读取
- **MMCM 动态重配置**：先写公共寄存器 → 依次写各时钟频率寄存器 → 写相位寄存器 → 写重载寄存器（0x25C）
- **Vivado + ModelSim 联合仿真验证**，输出 88.097MHz 接近目标 88.1MHz

## 开发环境

- **硬件平台：** Xilinx Artix-7 FPGA A704
- **工具链：** Vivado + ModelSim + VS Code
- **语言：** Verilog + Python

## 代码结构

```
time_tree_dy.v   → AXI4-Lite 读写控制（底层模块）
MMCM_Control.v   → 参数管理 + ROM 读取 + 扫频控制（上级模块）
Python 脚本       → 参数计算 + COE 文件生成
```

> 📎 完整代码和详细解析请查看：[CSDN 博客原文](https://blog.csdn.net/zjk10086/article/details/150017884)
