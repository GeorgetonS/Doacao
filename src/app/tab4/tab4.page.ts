import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  form: FormGroup;
  buttonClicado: boolean = false;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]], 
      endereco: ['', [Validators.required, Validators.minLength(3)]], 
    });
  }

  whats(){
    this.abrirUrl('https://api.whatsapp.com/send?phone=555194904309&text=Ol%C3%A1%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes');
  }

  abrirUrl(url: string){
    window.open(url, '_blank')?.focus();
  }

  enviar(){
    if(this.form.valid){
      let nome = this.form.get('nome')?.getRawValue()
      let endereco = this.form.get('endereco')?.getRawValue()
      this.abrirUrl(`https://api.whatsapp.com/send?phone=555194904309&text=Ola%20me%20chamo%20${nome}%20moro%20em%20${endereco}%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes`);
    }
    else{
      //this.buttonClicado = true;
      this.marcarFormGroupComoTocado(this.form);
    }
  }

  marcarFormGroupComoTocado(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.marcarFormGroupComoTocado(control);
      } 
      else 
      {
        if(control.invalid)
          {
            control.markAsTouched();
          }
      }
    });
  }

}
