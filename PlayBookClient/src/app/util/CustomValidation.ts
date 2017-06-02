import {AbstractControl} from '@angular/forms';
/**
 * Created by Donato Wolfisberg on 21.04.2017.
 */
export class CustomValidation {
  public static email (control: AbstractControl): {[key: string]: any} {
    const email = control.value;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email) === false ? {'email': { email }} : null;
  }
}
