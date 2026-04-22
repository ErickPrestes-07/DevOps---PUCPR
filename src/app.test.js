import { describe, it, expect } from 'vitest'
import { add, formatTask, validateTask, getTaskStatusLabel, truncateText } from './app.js'

describe('Suíte de Testes Unitários - App Todo', () => {
  // Teste 1: Soma
  it('deve somar dois números corretamente', () => {
    expect(add(10, 5)).toBe(15)
    expect(add(-1, 1)).toBe(0)
  })

  // Teste 2: Formatação de Texto
  it('deve formatar o texto da tarefa (primeira letra maiúscula e trim)', () => {
    expect(formatTask('  estudar devops  ')).toBe('Estudar devops')
  })

  // Teste 3: Validação de Tarefa
  it('deve validar se a tarefa tem pelo menos 3 caracteres', () => {
    expect(validateTask('Oi')).toBe(false)
    expect(validateTask('Estudar')).toBe(true)
    expect(validateTask('   abc   ')).toBe(true)
  })

  // Teste 4: Rótulo de Status
  it('deve retornar o rótulo correto para o status da tarefa', () => {
    expect(getTaskStatusLabel(true)).toBe('Concluída')
    expect(getTaskStatusLabel(false)).toBe('Pendente')
  })

  // Teste 5: Truncar Texto
  it('deve truncar textos longos corretamente', () => {
    const longText = 'Essa é uma tarefa muito longa que precisa de resumo'
    expect(truncateText(longText, 10)).toBe('Essa é uma...')
    expect(truncateText('Curta', 10)).toBe('Curta')
  })
})
