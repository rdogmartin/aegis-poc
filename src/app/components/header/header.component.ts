import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CurrentUser } from 'src/app/shared/models/model';
import { CurrentUserQuery } from 'src/app/state/current-user/current-user.query';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentUser$: Observable<CurrentUser> = this.currentUserQuery.select();

  constructor(
    private authorizationService: AuthorizationService,
    private currentUserQuery: CurrentUserQuery,
    ) { }

    signOut() {
      this.authorizationService.signOut();
    }
}
