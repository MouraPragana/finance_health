import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

export function execGlobalInteceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = inject(TokenService);
  const authToken = token.getAuthToken();
  const refresh_token = token.getRefreshToken();

  if (authToken){
    const modifiedBody = {...req.body, refresh_token}

    const newReq = req.clone({
      headers: req.headers.append("authorization", `Bearer ${authToken}`),
      body: modifiedBody
    })

    return next(newReq)
  }

  return next(req)
}
