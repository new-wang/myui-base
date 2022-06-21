import { render } from '@testing-library/vue';
import button from '..';
import Button from '../src/button';

// base 功能
test('should worlk',() => {
    const { getByRole } = render(Button)

    getByRole('button')
})

// default slots
test('default slot should be 按钮',() => {
    const { getByText } = render(Button)

    getByText('按钮')
})

test('slot should worlk',() => {
    const { getByText } = render(Button,{
        slots: {
            default(){
                return 'confirm'
            }
        }
    })
    getByText('confirm')
})

// prop
test('default type should worlk',() => {
    const { getByRole } = render(Button)
    const button = getByRole('button')
    expect(button.classList.contains('s-btn--secondary')).toBe(true)
})

test('prop type should worlk',() => {
    const { getByRole } = render(Button,{
        props:{
            type:"primary"
        }
    })
    const button = getByRole('button')
    expect(button.classList.contains('s-btn--primary')).toBe(true)
})