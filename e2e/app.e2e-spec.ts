import { BootstrapCliPage } from './app.po';

describe('bootstrap-cli App', () => {
  let page: BootstrapCliPage;

  beforeEach(() => {
    page = new BootstrapCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
