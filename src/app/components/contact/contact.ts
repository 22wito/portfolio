import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitted = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      try {
        // Simulación de envío de formulario (Manejo de excepciones/exito requerido por Tema 13)
        console.log('Formulario enviado:', this.contactForm.value);

        // Simular éxito
        this.submitSuccess = true;
        this.submitError = false;

        // Limpiar formulario tras éxito
        setTimeout(() => {
          this.contactForm.reset();
          this.isSubmitted = false;
          this.submitSuccess = false;
        }, 3000);

      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        this.submitError = true;
        this.submitSuccess = false;
      }
    }
  }

  // Helpers para validación en el template
  get f() { return this.contactForm.controls; }
}
