import {Directive} from '@angular/core';
import {FormGroup, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS,
    useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {

  validate(formGroup: FormGroup): { [key: string]: any } {
    let adressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let facebookEventUrlControl = (<FormGroup>formGroup.root).controls['facebookEventUrl'];

    if((adressControl && adressControl.value &&
      cityControl && cityControl.value &&
      countryControl && countryControl.value) ||
      (facebookEventUrlControl && facebookEventUrlControl.value)) {
      return null; // validator passing
    } else {
      return {validateLocation: false}
    }
  }

}
