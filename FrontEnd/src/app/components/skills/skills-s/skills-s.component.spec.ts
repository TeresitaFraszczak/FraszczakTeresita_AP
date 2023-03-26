import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSComponent } from './skills-s.component';

describe('SkillsSComponent', () => {
  let component: SkillsSComponent;
  let fixture: ComponentFixture<SkillsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
