#!/bin/bash

# 杀死占用6778端口的进程
fuser -k 6778/tcp

# 等待3秒
sleep 3

# 启动npm start，日志输出到log.txt，后台运行
nohup npm run dev > log.txt 2>&1 &