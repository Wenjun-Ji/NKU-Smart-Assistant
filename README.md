# [NKU-AI-Assistant](https://www.chatnku.top)

南开大学智能小助手是你的校园生活好帮手。无论是学业上的问题，还是生活中的琐事，小助手都能为你提供贴心的帮助，他就像是一位热心的学长或学姐。

## Features

- [LangChain](https://www.langchain.com/) The largest community building the future of LLM apps
- [LangGraph](https://www.langchain.com/langgraph) Balance agent control with agency
- [FastAPI](https://fastapi.tiangolo.com/) Building APIs
- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv)
- [NextAuth.js](https://github.com/nextauthjs/next-auth) for authentication

## Running Locally

> 本仓库为NKU-AI-Assistant项目的前端部分，如您想要使用我们的仓库为前端模板，您可以按照以下步骤在本地运行。

1. Cloning the repository the local machine
```bash
git clone
cd NKU-Smart-Assistant
```
2. Installing the dependencies.
```bash
pnpm install
```
3. Running the application.
```bash
pnpm dev
```

> 如您也想使用FastAPI封装您自己的机器人，您可以替换 `lib/chat/action.ts`中submitUserMessage函数中请求的地址

## Powered by

在此非常感谢[ai-chatbot](https://github.com/vercel/ai-chatbot)这个项目🥰🥰🥰，我们的前端是以该项目为基础的。
