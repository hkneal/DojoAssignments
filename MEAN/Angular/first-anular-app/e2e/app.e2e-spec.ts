import { FirstAnularAppPage } from './app.po';

describe('first-anular-app App', () => {
  let page: FirstAnularAppPage;

  beforeEach(() => {
    page = new FirstAnularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
