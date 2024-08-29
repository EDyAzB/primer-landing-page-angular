import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{


contactForm!: FormGroup;


constructor(private FormBuilder: FormBuilder ){


  this.contactForm = this.FormBuilder.group({
    email:['', [Validators.required, Validators.email]],
    message:['',[ Validators.required, Validators.minLength(5)]]
  })
}
enviar(event: Event){
   event.preventDefault();
   console.log(this.contactForm.value);
}
ngOnInit(): void {
  
}

hasErrors(field: string, typeError: string){
  return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  
}

}

