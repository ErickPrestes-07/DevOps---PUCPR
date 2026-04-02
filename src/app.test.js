import { describe, it, expect } from 'vitest'
import { add, formatTask } from './app.js'

describe('Funções utilitárias', () => {
  it('deve somar dois números corretamente', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(0, 0)).toBe(0)
    expect(add(-1, 1)).toBe(0)
  })

  it('deve formatar o texto da tarefa (primeira letra maiúscula)', () => {
    expect(formatTask('minha tarefa')).toBe('Minha tarefa')
    expect(formatTask('  comprar leite  ')).toBe('Comprar leite')
  })

  it('deve retornar soma negativa corretamente', () => {
    expect(add(-5, -3)).toBe(-8)
  })
})
