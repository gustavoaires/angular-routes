import { AngularRoutesPage } from './app.po';

describe('angular-routes App', function() {
  let page: AngularRoutesPage;

  beforeEach(() => {
    page = new AngularRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
