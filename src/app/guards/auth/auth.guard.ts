import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

export const authGuard: CanActivateFn = async(route, state) => {
  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);
  const isTokenTrusted: boolean = await tokenService.verifyAuthToken();

    if (isTokenTrusted){
      return true
    }

    tokenService.cleanAuthToken();
    router.navigate(["login"]);
    return false;
};
