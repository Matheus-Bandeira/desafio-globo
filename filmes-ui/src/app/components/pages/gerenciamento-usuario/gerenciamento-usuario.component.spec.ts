import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoUsuarioComponent } from './gerenciamento-usuario.component';

describe('GerenciamentoUsuarioComponent', () => {
  let component: GerenciamentoUsuarioComponent;
  let fixture: ComponentFixture<GerenciamentoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
