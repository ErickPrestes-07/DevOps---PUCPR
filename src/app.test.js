import { describe, it, expect } from 'vitest'
import { add, formatTask, validateTask, getTaskStatusLabel, truncateText } from './app.js'

describe('🧪 Suíte de Testes Unitários - App de Tarefas', () => {
  
  it('1. Soma: deve calcular a soma de dois números para utilitários de estatísticas', () => {
    expect(add(10, 5)).toBe(15)
    expect(add(-5, 5)).toBe(0)
  })

  it('2. Formatação: deve formatar o texto da tarefa (primeira letra em maiúsculo e remover espaços)', () => {
    expect(formatTask('  estudar para a prova  ')).toBe('Estudar para a prova')
    expect(formatTask('devops')).toBe('Devops')
  })

  it('3. Validação: deve garantir que a tarefa tenha no mínimo 3 caracteres válidos', () => {
    expect(validateTask('Ok')).toBe(false)
    expect(validateTask('Estudar')).toBe(true)
  })

  it('4. Status: deve retornar o rótulo amigável para o estado da tarefa', () => {
    expect(getTaskStatusLabel(true)).toBe('Concluída')
    expect(getTaskStatusLabel(false)).toBe('Pendente')
  })

  it('5. Resumo: deve truncar textos que ultrapassam o limite de caracteres', () => {
    const textoLongo = 'Esta é uma tarefa extremamente longa para testar o componente de resumo'
    expect(truncateText(textoLongo, 20)).toBe('Esta é uma tarefa ex...')
    expect(truncateText('Curto', 20)).toBe('Curto')
  })

})
