Feature('authorization');

Scenario.skip('test login', ({ I, mainPage }) => {
    I.amOnPage('/');
    mainPage.login('demo', 'demo');
    I.see("Favorites");
});

Scenario.skip('test reset link', ({ I, mainPage }) => {
    I.amOnPage('/');
    mainPage.goToPasswordReset();
    I.see("Reset your password");
});
Scenario('api', async ({ I }) => {
    let a = await I.sendGetRequest('/posts');
    console.log(a);
});
