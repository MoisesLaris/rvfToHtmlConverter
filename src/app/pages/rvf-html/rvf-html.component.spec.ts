import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvfHtmlComponent } from './rvf-html.component';

describe('RvfHtmlComponent', () => {
  let component: RvfHtmlComponent;
  let fixture: ComponentFixture<RvfHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvfHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvfHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
