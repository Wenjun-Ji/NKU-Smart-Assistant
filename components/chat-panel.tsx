import * as React from 'react'

import { shareChat } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconShare,IconInfo } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { ChatShareDialog } from '@/components/chat-share-dialog'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import type { AI } from '@/lib/chat/actions'
import { nanoid } from 'nanoid'
import { UserMessage } from './stocks/message'
import { useSelectedValue } from '@/components/chatbutton'
import { ChatButton } from '@/components/chatbutton'
import { InfoDialog } from '@/components/info-dialog'  // 引入 InfoDialog 组件

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps) {
  const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)
  const [infoDialogOpen, setInfoDialogOpen] = React.useState(false)  // 控制 Info 对话框的状态
  const { selectedValue } = useSelectedValue();

  const exampleMessages = [
    {
      heading: '生活服务',
      subheading: '可以发一下我们的校历吗',
      message: '请你显示我们的校历'
    },
    {
      heading: '学习帮助',
      subheading: '你可以帮我翻译英文文献吗？',
      message: '你可以帮我翻译英文文献吗？'
    },
    {
      heading: '校园活动',
      subheading: '最近有哪些校园活动？',
      message: '最近有哪些校园活动？'
    },
    {
      heading: '新闻速递',
      subheading: '南开大学最近有什么新闻？',
      message: '请你提供最新媒体'
    }
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {messages.length === 0 &&
            exampleMessages.map((example, index) => (
              <div
                key={example.heading}
                className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
                  index > 1 && 'hidden md:block'
                }`}
                onClick={async () => {
                  setMessages(currentMessages => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>
                    }
                  ])

                  const responseMessage = await submitUserMessage(
                    example.message,
                    selectedValue
                  )

                  setMessages(currentMessages => [
                    ...currentMessages,
                    responseMessage
                  ])
                }}
              >
                <div className="text-sm font-semibold">{example.heading}</div>
                <div className="text-sm text-zinc-600">
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>

        {messages?.length >= 2 ? (
          <div className="flex h-12 items-center justify-center">
            <div className="flex space-x-2">
              {id && title ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setShareDialogOpen(true)}
                  >
                    <IconShare className="mr-2" />
                    Share
                  </Button>
                  <ChatShareDialog
                    open={shareDialogOpen}
                    onOpenChange={setShareDialogOpen}
                    onCopy={() => setShareDialogOpen(false)}
                    shareChat={shareChat}
                    chat={{
                      id,
                      title,
                      messages: aiState.messages
                    }}
                  />
                </>
              ) : null}
            </div>
          </div>
        ) : null}

<div className="space-y-2 px-4 py-0.5">
  <div className="flex items-center"> {/* 调整间距，使按钮更接近 */}
    <ChatButton />
    
<Button
  size="sm"
  className="rounded-lg gap-1"
  onClick={() => setInfoDialogOpen(true)}  // 保留打开使用手册弹窗的逻辑
>
  <span className="hidden sm:block">User Manual</span>
  <span className="sm:hidden">Guide</span>
</Button>

  </div>
  <InfoDialog open={infoDialogOpen} onOpenChange={setInfoDialogOpen} />
  <PromptForm input={input} setInput={setInput} />
  <FooterText className="hidden sm:block" />
</div>



      </div>
    </div>
  )
}
