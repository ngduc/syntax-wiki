describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3003', {
      waitUntil: 'networkidle0'
    });
  });

  it('should render home page', async () => {
    expect(await page.title()).toBe('Syntax.wiki - latest code syntax of frameworks and programming languages.');
    await expect(page).toHaveText('#react', 'React');
  });

  it('should navigate to /react', async () => {
    await page.click('#react a');
    await expect(page).toHaveText('.token-line', `import * as React from 'react'`);
  });
});
