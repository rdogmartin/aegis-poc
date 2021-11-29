import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CurrentUserQuery } from '../state/current-user/current-user.query';
import { CurrentUserStore } from '../state/current-user/current-user.store';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  get isLoggedIn$(): Observable<boolean> {
    return this.currentUserQuery.isLoggedIn$;
  }

  constructor(
    private currentUserQuery: CurrentUserQuery,
    private currentUserStore: CurrentUserStore,
  ) { }

  public signIn(userName: string): Observable<boolean> {
    return this.authenticateUser(userName)
      .pipe(
        tap(isAuthenticated => {
          if (isAuthenticated) {
            this.currentUserStore.update({ userName });
          }
        })
      );
  }

  public signOut() {
    this.currentUserStore.update({ userName: '' });
  }

  public changeUserName(newUserName: string): void {
    this.currentUserStore.update({ userName: newUserName });
  }

  private authenticateUser(userName: string): Observable<boolean> {
    // In a real app, this will probably make an HTTP call.
    return of(true);
  }
}
