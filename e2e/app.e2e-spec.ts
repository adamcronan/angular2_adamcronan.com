import { AcDcPage } from './app.po';

describe('ac-dc App', function() {
  let page: AcDcPage;

  beforeEach(() => {
    page = new AcDcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
