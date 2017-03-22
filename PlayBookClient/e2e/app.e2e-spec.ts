import { PlayBookPage } from './app.po';

describe('play-book App', () => {
  let page: PlayBookPage;

  beforeEach(() => {
    page = new PlayBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
