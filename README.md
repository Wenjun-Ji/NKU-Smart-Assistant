# [NKU-AI-Assistant](https://www.chatnku.top)

The NKU-AI-Assistant is your go-to helper for campus life at Nankai University. Whether it's academic questions or everyday tasks, this assistant can provide you with thoughtful support, just like a helpful senior student.

![image](https://github.com/user-attachments/assets/22290420-9167-4a14-83e6-5517db24d673)
![image](https://github.com/user-attachments/assets/165ccf84-41ef-4288-811a-e340951254d7)
![image](https://github.com/user-attachments/assets/d69ffb81-519d-4291-a193-040c5b6156a6)

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

## Creating a KV Database Instance

Follow the steps outlined in the [quick start guide](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database) provided by Vercel. This guide will assist you in creating and configuring your KV database instance on Vercel, enabling your application to interact with it.

Remember to update your environment variables (`KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`) in the `.env` file with the appropriate credentials provided during the KV database setup.

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run the Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

> If you also want to use FastAPI to build your own chatbot, you can replace the request URL in the `submitUserMessage` function in `lib/chat/action.ts`.

## Backend

For the backend code, please refer to the other repository [NKU-Smart-Assitant-API](https://github.com/Wenjun-Ji/NKU-Smart-Assitant-API).

## Powered by

A big thanks to the [ai-chatbot](https://github.com/vercel/ai-chatbot) project 🥰🥰🥰, which served as the foundation for our frontend.
