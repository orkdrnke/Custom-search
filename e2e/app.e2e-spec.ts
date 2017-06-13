import { CustomSearchPage } from './app.po';

describe('custom-search App', () => {
  let page: CustomSearchPage;

  beforeEach(() => {
    page = new CustomSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
