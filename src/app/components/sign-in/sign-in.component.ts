import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CurrentUser } from 'src/app/shared/models/model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  currentUser: CurrentUser = { userName: '' };
  private subscriptions = new Subscription();

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    const subscription = this.authorizationService.signIn(this.currentUser.userName)
      .subscribe(isAuthorized => {
        if (isAuthorized) {
          this.router.navigate(['/']);
        } else {
          alert('auth error');
        }
      });

    this.subscriptions.add(subscription);
  }
}
