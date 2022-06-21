import Test from './test';
import { render } from '@testing-library/vue';

test('Test.tsx should work', ()=>{
    // expect(true).toBe(true)
    // 渲染组件
    const { getByText } = render(Test)
    // assert output
    // 断言输出结果
    getByText('test:0')
})