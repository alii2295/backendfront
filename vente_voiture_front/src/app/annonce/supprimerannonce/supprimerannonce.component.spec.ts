import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerannonceComponent } from './supprimerannonce.component';

describe('SupprimerannonceComponent', () => {
  let component: SupprimerannonceComponent;
  let fixture: ComponentFixture<SupprimerannonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimerannonceComponent]
    });
    fixture = TestBed.createComponent(SupprimerannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
