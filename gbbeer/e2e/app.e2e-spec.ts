import { GbbeerPage } from './app.po';

describe('gbbeer App', function() {
  let page: GbbeerPage;

  beforeEach(() => {
    page = new GbbeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
