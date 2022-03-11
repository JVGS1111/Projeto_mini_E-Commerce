import React from "react";
import { render } from "@testing-library/react";
import { Home } from './Home'
import { App } from '../../App'
import { fireEvent } from '@testing-library/dom';

describe('Home', () => {

    it('Quando clico no botao de carrinho um alerta é chamado', async () => {
        const { findAllByText } = render(<App />);

        const jsDomAlert = window.alert;
        window.alert = jest.fn(); // mockda funcao alert
        const botoesComprar = await findAllByText('Adicionar ao carrinho');
        await fireEvent.click(botoesComprar[0]);

        expect(window.alert).toBeCalled();
        window.alert = jsDomAlert;//retornando valor original
    })
    it('Quando eu clico no botao de carrinho o carrinho adiciona 1', async () => {
        const { findAllByText, findByTestId } = render(<App />);
        const jsDomAlert = window.alert;
        window.alert = jest.fn(); // mockda funcao alert

        const botoesComprar = await findAllByText('Adicionar ao carrinho');

        await fireEvent.click(botoesComprar[0]);

        const contadorCarrinho = await (await findByTestId('prodCount')).textContent;
        expect(contadorCarrinho).toBe('1')

        window.alert = jsDomAlert;//retornando valor original
    })
})