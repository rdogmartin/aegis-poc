import { FormBuilder } from '@angular/forms';
import { instance, mock } from 'ts-mockito';

import { AddAddressComponent } from './add-address.component';

describe('OverviewComponent', () => {
  let component: AddAddressComponent;
  let formBuilderMock: FormBuilder;

  beforeEach(() => {
    formBuilderMock = mock(FormBuilder);
    component = new AddAddressComponent(
      instance(formBuilderMock)
    );
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
