import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigIslandComponent } from './big-island.component';

describe('BigIslandComponent', () => {
  let component: BigIslandComponent;
  let fixture: ComponentFixture<BigIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
