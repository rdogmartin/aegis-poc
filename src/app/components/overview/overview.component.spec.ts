import { HttpClient } from "@angular/common/http";
import { instance, mock } from "ts-mockito";
import { OverviewComponent } from "./overview.component";

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let httpMock: HttpClient;

  beforeEach(() => {
    httpMock = mock(HttpClient);
    component = new OverviewComponent(
      instance(httpMock)
    );
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
