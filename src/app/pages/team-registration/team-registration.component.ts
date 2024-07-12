import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamRegistrationService } from './team-registration.service';
import { TpToastrService } from '../../shared/services/tp-toastr.service';
@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.scss']
})
export class TeamRegistrationComponent implements OnInit {

  name!: string;
  birthdate!: string;
  email!: string;
  form!: FormGroup;

  constructor(
    private teamRegistrationService: TeamRegistrationService,
    private fb: FormBuilder,
    private tpToastrService: TpToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required, Validators.minLength(3)],
      birthdate: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  userRegistration(): void {
    try {
      this.teamRegistrationService.userRegistration(this.name, this.birthdate, this.email);
      this.tpToastrService.success('Usuário cadastrado com sucesso!')
      this.resetForm();
    } catch (error) {
      console.log(error);
      this.tpToastrService.error('Erro ao cadastrar usuário!');
    }
  }

  resetForm(): void {
    this.name = '';
    this.birthdate = '';
    this.email = '';
  }
}
