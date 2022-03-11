import React from "react";
import { fireEvent, waitFor } from '@testing-library/dom';
import { render } from "@testing-library/react";
import { MemoryRouter, Route, useParams } from "react-router-dom";
import { CartContextData, useCart } from '../../hook/CartContext';
import { act } from "react-dom/test-utils";
import { CartPage } from ".";

const mockedUseCartHook = useCart as jest.Mock;
const mockedRemoveProd = jest.fn();

jest.mock('../../hook/CartContext');

describe('Pagina do carrinho', () => {

    beforeEach(() => {
        mockedUseCartHook.mockReturnValue({
            cart: [
                {
                    "id": 201,
                    "name": "Call Of Duty Infinite Warfare",
                    "price": 49.99,
                    "score": 80,
                    "image": "call-of-duty-infinite-warfare.png",
                    "marca": "playstation"
                },
                {
                    "id": 102,
                    "name": "The Witcher III Wild Hunt",
                    "price": 119.5,
                    "score": 250,
                    "image": "the-witcher-iii-wild-hunt.png",
                    "marca": "playstation"
                },
                {
                    "id": 99,
                    "name": "Call Of Duty WWII",
                    "price": 249.99,
                    "score": 205,
                    "image": "call-of-duty-wwii.png",
                    "marca": "playstation"
                }
            ],
            calcAmount: jest.fn(),
            removeProduct: mockedRemoveProd,

        });
    });

    it('Quando eu adiciono produtos ao carrinho eles aparecem na pagina do carrinho', async () => {
        const { findAllByTestId } = render(

            <CartPage />

        )
        const produtos = await findAllByTestId('produtoListaTeste');

        expect(produtos.length).toBe(3);
    })

    it('Quando eu clico no botao da lixeira o item é removido da lista', async () => {
        const { findAllByTestId, rerender } = render(<CartPage />);


        const botaoRemover = await findAllByTestId('botaoRemover');

        act(() => {
            fireEvent.click(botaoRemover[0]);
        })

        expect(mockedRemoveProd).toBeCalled();

        mockedUseCartHook.mockReturnValueOnce({
            cart: [
                {
                    "id": 102,
                    "name": "The Witcher III Wild Hunt",
                    "price": 119.5,
                    "score": 250,
                    "image": "the-witcher-iii-wild-hunt.png",
                    "marca": "playstation"
                },
                {
                    "id": 99,
                    "name": "Call Of Duty WWII",
                    "price": 249.99,
                    "score": 205,
                    "image": "call-of-duty-wwii.png",
                    "marca": "playstation"
                }
            ]
        })

        rerender(<CartPage />);

        const produtos2 = await findAllByTestId('produtoListaTeste');

        expect(produtos2.length).toBe(2);
    })
})

