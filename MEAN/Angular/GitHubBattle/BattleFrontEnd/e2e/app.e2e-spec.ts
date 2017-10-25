import { BattleFrontEndPage } from './app.po';

describe('battle-front-end App', () => {
  let page: BattleFrontEndPage;

  beforeEach(() => {
    page = new BattleFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
