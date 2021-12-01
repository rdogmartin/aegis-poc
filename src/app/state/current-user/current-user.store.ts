import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CurrentUser } from 'src/app/shared/models/model';

function createInitialState(): CurrentUser {
  return {
    userName: '',
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'CurrentUser' })
export class CurrentUserStore extends Store<CurrentUser> {
  constructor() {
    super(createInitialState());
  }
}
