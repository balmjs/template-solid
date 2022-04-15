import App from '@/app';

// Place your tests here.
describe('The link', () => {
  const targetName = 'Hello Solid';

  test(`should be ${targetName}`, () => {
    const app = App();
    const link = app.querySelector('.link');

    expect(link.textContent).toBe(targetName);
  });
});
