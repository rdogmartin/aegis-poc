import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/models/model';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
  public addAddressForm: FormGroup;

  get firstName() { return this.formControls.firstName; }
  get zipCode() { return this.formControls.zipCode; }

  private formControls: {
    firstName: FormControl,
    zipCode: FormControl,
  };

  constructor(private formBuilder: FormBuilder) {
    this.formControls = {
      firstName: this.formBuilder.control('', [Validators.required]),
      zipCode: this.formBuilder.control('', [Validators.required, Validators.pattern("^[0-9]{5}$")]), // , MyValidators.CustomValidator
    };
    this.addAddressForm = this.formBuilder.group(this.formControls);
  }

  public onSubmit(): void {
    const address: Address = {
      firstName: this.formControls.firstName.value,
      zipCode: this.formControls.zipCode.value,
    }

    // TODO: Save to server
    console.log(address);
  }
}
