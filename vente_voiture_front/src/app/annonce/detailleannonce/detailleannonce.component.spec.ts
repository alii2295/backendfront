import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleannonceComponent } from './detailleannonce.component';

describe('GestionannonceComponent', () => {
  let component: DetailleannonceComponent;
  let fixture: ComponentFixture<DetailleannonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailleannonceComponent]
    });
    fixture = TestBed.createComponent(DetailleannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
