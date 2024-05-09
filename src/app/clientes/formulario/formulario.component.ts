import { Component, inject } from '@angular/core';
import  {  FormBuilder,  Validators  }  from  '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent{

  private formBuilder = inject(FormBuilder);

    protected form = this.formBuilder.group({
      author: ['', [Validators.required, Validators.maxLength(250)]],
      musica: ['', [Validators.required, Validators.maxLength(250)]]
    });

    protected printForm(){
      console.log(this.form.value );
    }

}
