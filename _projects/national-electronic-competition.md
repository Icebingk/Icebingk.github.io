---
layout: project
title: "2025 全国电子设计大赛"
status: "completed"
github: "https://github.com/Icebingk/National_Electronic_Competition"
stars: 2
---

## 项目简介

**2025 年全国大学生电子设计竞赛**参赛项目，基于 **FPGA + STM32 + TI 芯片** 的混合架构系统。涵盖 FPGA 数字信号处理、STM32 嵌入式控制、硬件驱动开发等多个领域。

## 技术亮点

- **FPGA 数字信号处理**：AD9226 并行驱动 + DA9764 并行驱动，内置 FIFO 跨时钟域传输
- **FIR 低通滤波器**：截止频率 10MHz，Python 辅助脚本生成滤波器系数
- **SPI 通信**：FPGA 端 SPI 主从机，支持 7 种传输模式；STM32 F4/F7 系列 SPI 驱动
- **IIC 协议**：外设 I2C 通信驱动（含 QN8027 FM 芯片）
- **UART 全双工**：异步收发字符串，FPGA ↔ STM32 通信验证
- **基础模块库**：定时器、蜂鸣器、按键边沿检测、呼吸灯、8 位数码管、SRAM 读写控制
- **异步复位同步释放**：跨时钟域安全复位方案

## 技术栈

`FPGA` `Verilog HDL` `C` `STM32` `SPI` `I2C` `UART` `FIR` `DSP` `Vivado` `MATLAB`
