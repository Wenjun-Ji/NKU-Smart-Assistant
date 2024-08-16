import * as React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface InfoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function InfoDialog({ open, onOpenChange }: InfoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>NKU Smart Assistant 聊天机器人使用手册</DialogTitle>
          <DialogDescription>
            NKU Smart Assistant 是一款以LangChain为基座、RAG为核心思想构建的校园聊天机器人，增强校内信息检索的同时包含多种实用插件，包括三种RAG机器人和四种插件。
          </DialogDescription>
        </DialogHeader>

        <DialogHeader>
          <DialogTitle>三种机器人</DialogTitle>
          <DialogDescription>
            <strong>ChainMind(LangChain机器人)：</strong> 通过简单的一条检索链处理用户的日常对话和简单查询。<br/>
            <strong>MetaAgent(LangGraph机器人)：</strong> 通过LangGraph构建的多重代理（retrieval chain & web search）机器人处理复杂查询和多步骤任务，生成精确响应。<br/>
            <strong>NeoGraph (GraphRAG机器人)：</strong> 使用知识图谱并存入neo4j图数据库处理构建GraphRAG，实现超大数据增强检索和全局检索。
          </DialogDescription>
        </DialogHeader>

        <DialogHeader>
          <DialogTitle>五种插件</DialogTitle>
          <DialogDescription>
            <strong>Web search插件：</strong> 实现使用搜索引擎作为工具，增强回答准确性和时效性<br/>
            <strong>Web parser插件：</strong> 实现网页实时最新消息获取和智能分析功能。<br/>
            <strong>Video parser插件：</strong> 对于用户给定的Youtube视频进行智能解析并支持问答。<br/>
            <strong>File parser插件：</strong> 对于用户给定的文件进行智能解析并支持问答。<br/>
            <strong>literature Translator插件：</strong> 翻译用户上传的英文文献，生成对应的译本文件供下载查看。（未选择File Parser插件时默认对上传文件进行翻译）
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>关闭</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


