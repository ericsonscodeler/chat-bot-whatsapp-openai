import { promptPizza } from "../prompts/pizza"

export function initPrompt(storeName: string, orderCode: string): string {
  return promptPizza
    .replace(/{{[\s]?storeName[\s]?}}/g, storeName)
    .replace(/{{[\s]?orderCode[\s]?}}/g, orderCode)
}