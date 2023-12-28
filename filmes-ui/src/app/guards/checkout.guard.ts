import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationHelper } from "../helpers/authentication.helper";


@Injectable()
export class CheckoutGuard implements CanActivate {

    constructor(
      private authenticationHelper: AuthenticationHelper,
      private router: Router
    ) {

    }

    canActivate() {

        if (this.authenticationHelper.get() != null) {
          return true;
        }
        this.router.navigate(['']);
        return false;
    }
}
