import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInItemComponent } from './log-in-item.component';

describe('LogInItemComponent', () => {
  let component: LogInItemComponent;
  let fixture: ComponentFixture<LogInItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
