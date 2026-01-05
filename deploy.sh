#!/bin/bash

# 確保腳本在錯誤時停止
set -e

echo "🚀 開始部署流程..."

# 1. 加入所有修改
echo "📦 加入所有修改檔案..."
git add .

# 2. 詢問提交訊息
echo "✏️  請輸入這次修改的內容摘要 (直接按 Enter 則使用預設訊息):"
read -r commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="update: manual update"
fi

# 3. 提交變更
echo "💾 提交變更: $commit_msg"
git commit -m "$commit_msg"

# 4. 推送到 GitHub
echo "☁️  推送到 GitHub main 分支..."
git push origin main

echo "✅ 完成！GitHub Actions 此時正在自動建置並部署您的網站。"
echo "⏳ 請等待約 1-2 分鐘後重新整理網頁。"
