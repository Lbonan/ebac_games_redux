import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizarComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['windows', 'Playstation', 'Xbox'],
  preco: 190,
  precoAntigo: 260,
  titulo: 'Hogwarts Legacy'
}

describe('teste para o componente produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizarComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  test('Deve adicionar um item ao carrinho', () => {
    renderizarComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao)

    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })
})
