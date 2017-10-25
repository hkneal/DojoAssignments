import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponentComponent } from './mail-component.component';

describe('MailComponentComponent', () => {
  let component: MailComponentComponent;
  let fixture: ComponentFixture<MailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
