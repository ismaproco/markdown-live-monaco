import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownInlinerComponent } from './markdown-inliner.component';

describe('MarkdownInlinerComponent', () => {
  let component: MarkdownInlinerComponent;
  let fixture: ComponentFixture<MarkdownInlinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownInlinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownInlinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
