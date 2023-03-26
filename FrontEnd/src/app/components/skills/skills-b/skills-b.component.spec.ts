import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBComponent } from './skills-b.component';

describe('SkillsBComponent', () => {
  let component: SkillsBComponent;
  let fixture: ComponentFixture<SkillsBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
