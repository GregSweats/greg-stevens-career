fixture `test-should-404`
    .page `https://career.stevens.pro/test/should/404`;

test('Non-Existent URL Should 404; Obsidian Publish returns 200 but text that says 404;', async t => {
    await t            
            .expect(Selector('h1').textContent).contains('404') 
});