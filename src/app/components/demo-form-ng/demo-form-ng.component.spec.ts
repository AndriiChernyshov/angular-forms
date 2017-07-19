import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormNgComponent } from './demo-form-ng.component';

describe('DemoFormNgComponent', () => {
  let component: DemoFormNgComponent;
  let fixture: ComponentFixture<DemoFormNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
