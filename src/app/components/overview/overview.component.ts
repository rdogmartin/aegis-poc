import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  public constructor(
    private http: HttpClient,
  ) { }

  public throwError(): void {
    throw new Error('This is a test error');
  }

  public invokeHttp(): void {
    const url = 'https://www.aegispremier.com/';
    this.http.get(url).subscribe()
  }
}
