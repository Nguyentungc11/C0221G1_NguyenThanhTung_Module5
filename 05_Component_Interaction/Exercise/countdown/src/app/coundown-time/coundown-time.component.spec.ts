import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoundownTimeComponent } from './coundown-time.component';

describe('CoundownTimeComponent', () => {
  let component: CoundownTimeComponent;
  let fixture: ComponentFixture<CoundownTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoundownTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoundownTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
