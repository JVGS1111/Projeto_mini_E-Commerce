import React from "react";
import { ProductPage } from ".";
import { fireEvent } from '@testing-library/dom';
import { render } from "@testing-library/react";
import { MemoryRouter, Route, useParams } from "react-router-dom";
import { CartContextData, useCart } from '../../hook/CartContext';
import AxiosMock from 'axios-mock-adapter';
import { api } from '../../services/api/api';
import { act } from "react-dom/test-utils";

// const apiMock = new AxiosMock(api); get no axios
const mockedUseCartHook = useCart as jest.Mock;

jest.mock('../../hook/CartContext');
const mockAddPooduct = jest.fn();
describe('ProductPage', () => {

    // beforeAll(() => {
    //     apiMock.onGet().reply(200, {
    //         id: '1',
    //         name: 'a',
    //         price: 20,
    //         score: 20,
    //         image: undefined,
    //         marca: 'Nintendo'
    //     })
    // }) get no axios

    beforeEach(() => {
        mockedUseCartHook.mockReturnValue({
            cart: [
                {
                    id: '1',
                    name: 'a',
                    price: 20,
                    score: 20,
                    image: undefined,
                    marca: 'Nintendo'
                }
            ],
            calcAmount: jest.fn(),
            addProduct: mockAddPooduct,
        });
    });
    it('Quando eu clico no botão de "Adicionar ao carrinho" o item é adicionado ao carrinho', async () => {


        const { getByText } = render(

            <MemoryRouter initialEntries={['product/102']}>
                <Route path={['product/:id']}>
                    <ProductPage />
                </Route>
            </MemoryRouter>

        );


        const botao = getByText('Adicionar ao carrinhho');
        act(() => {
            fireEvent.click(botao);
        })


        expect(mockAddPooduct).toBeCalled();

    })
})