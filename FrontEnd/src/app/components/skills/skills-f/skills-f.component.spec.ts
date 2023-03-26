import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFComponent } from './skills-f.component';

describe('SkillsFComponent', () => {
  let component: SkillsFComponent;
  let fixture: ComponentFixture<SkillsFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
