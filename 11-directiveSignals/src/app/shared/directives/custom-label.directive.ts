import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  @Input() set color(value: string) {
    console.log({ color: value });
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    console.log(value);
    this.setErrorMessage();
  }

  private _color: string = 'red';
  private _errors?: ValidationErrors | null;
  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('contructor de la directiva');
    this.htmlElement = el;
  }
  ngOnInit(): void {
    console.log('on Init ');
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este Campo es requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres`;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = `No tiene formato correcto`;
    }
  }
}
