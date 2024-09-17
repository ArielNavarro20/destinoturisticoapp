import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalEditarCostoComponent } from './modal-editar-costo.component';

describe('ModalEditarCostoComponent', () => {
  let component: ModalEditarCostoComponent;
  let fixture: ComponentFixture<ModalEditarCostoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalEditarCostoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditarCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
