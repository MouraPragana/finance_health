import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

export function addTokenRequest(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = inject(TokenService).getAuthToken();

  if (authToken){
    const newReq = req.clone({
      headers: req.headers.append("authorization", `Bearer ${authToken}`)
    })

    return next(newReq)
  }

  return next(req)
}
