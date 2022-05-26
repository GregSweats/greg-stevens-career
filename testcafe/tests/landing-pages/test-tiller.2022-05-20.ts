import { Selector } from 'testcafe';

fixture `tiller`
    .page `https://career.stevens.pro/tiller`;

test('Landing Page Works /tiller', async (t: TestController) => {
    await t
        .click(Selector('div').withText('Tiller HQ').nth(6))
        .expect(Selector('h1').textContent).contains('Tiller HQ')                // check h1 content

});
