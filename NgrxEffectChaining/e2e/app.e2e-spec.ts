import { NgrxEffectChainingPage } from './app.po';

describe('ngrx-effect-chaining App', function() {
  let page: NgrxEffectChainingPage;

  beforeEach(() => {
    page = new NgrxEffectChainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
