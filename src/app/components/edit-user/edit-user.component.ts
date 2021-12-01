import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CurrentUser } from 'src/app/shared/models/model';
import { CurrentUserQuery } from 'src/app/state/current-user/current-user.query';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  currentUser$: Observable<CurrentUser> = this.currentUserQuery.select();

  constructor(
    private authorizationService: AuthorizationService,
    private currentUserQuery: CurrentUserQuery,
    private router: Router,
  ) { }

  onKeyUp(event: Event) {
    const userName = (event.target as HTMLInputElement).value;
    this.authorizationService.changeUserName(userName);
  }

  onSubmit(userName: string) {
    this.authorizationService.changeUserName(userName);
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
