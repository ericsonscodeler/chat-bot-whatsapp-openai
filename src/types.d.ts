export interface ChatCompletionRequestMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  name?: string
}

export interface CustomerChat {
  status:? "open" | "closed"
  orderCode: string,
  chatAt: string,
  customer : {
    name: string,
    phone: string,
  }
  messages: ChatCompletionMessage[]
  orderSummary?: string
}