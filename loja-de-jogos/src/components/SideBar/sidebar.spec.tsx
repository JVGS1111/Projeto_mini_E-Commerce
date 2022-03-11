import React from "react";
import { App } from '../../App';
import { render } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import { act } from "react-dom/test-utils";

const waitForComponentToPaint = async (wrapper: any) => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve));
        wrapper.update();
    });
};
describe('sidebar', () => {
    it('Quando eu clico em uma marca eu vou para a pagina de produtos da marca', async () => {
        const { getByTestId, getByText } = render(<App />);

        const botaoMarca = getByText('PlayStation');
        act(() => {
            fireEvent.click(botaoMarca);
        })


        const titulo = getByTestId('marca-title').textContent;

        expect(titulo).toBe('PlayStation');

    })
})