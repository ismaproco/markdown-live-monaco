import { MdLiveMonacoPage } from './app.po';

describe('md-live-monaco App', () => {
  let page: MdLiveMonacoPage;

  beforeEach(() => {
    page = new MdLiveMonacoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
