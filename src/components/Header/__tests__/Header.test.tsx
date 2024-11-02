import { screen } from '@testing-library/react'
import Header from '..'

import { renderizarComProvider } from '../../../utils/tests'

describe('Testes para o componente HEADER', () => {
  test('Deve renderizar corretamente', () => {
    renderizarComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizarComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['windows', 'Playstation', 'Xbox'],
              preco: 180,
              precoAntigo: 250,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['windows', 'Playstation', 'Xbox'],
              preco: 190,
              precoAntigo: 260,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
