import { Injectable } from '@angular/core';
import {CanActivate, CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DeactivatorService implements CanDeactivate<boolean>, CanActivate{ //ctrl +I for implement
  canActivate(): boolean {
    return confirm('proseed?');
  }
  canDeactivate(): boolean {
    return confirm('Leave out?');
  }

  constructor() { }
}
