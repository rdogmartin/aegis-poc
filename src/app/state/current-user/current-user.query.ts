import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CurrentUser } from 'src/app/shared/models/model';
import { CurrentUserStore } from './current-user.store';

@Injectable({ providedIn: 'root' })
export class CurrentUserQuery extends Query<CurrentUser> {
  isLoggedIn$ = this.select(state => !!state.userName);

  constructor(protected override store: CurrentUserStore) {
    super(store);
  }

}
