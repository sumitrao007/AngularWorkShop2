import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchdirevtiveComponent } from './switchdirevtive.component';

describe('SwitchdirevtiveComponent', () => {
  let component: SwitchdirevtiveComponent;
  let fixture: ComponentFixture<SwitchdirevtiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchdirevtiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchdirevtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
