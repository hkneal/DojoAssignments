import { VacationPage } from './app.po';

describe('vacation App', () => {
  let page: VacationPage;

  beforeEach(() => {
    page = new VacationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
