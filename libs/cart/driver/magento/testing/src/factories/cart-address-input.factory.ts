import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MagentoCartAddressInput } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockMagentoCartAddressInput implements MagentoCartAddressInput {
  region_id = faker.helpers.unique(faker.datatype.number);
  country_code = faker.address.countryCode();
  street = [faker.address.streetAddress()];
  company = faker.company.name();
  telephone = faker.phone.number();
  postcode = faker.address.zipCode();
  city = faker.address.city();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  save_in_address_book = faker.datatype.boolean();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCartAddressInputFactory extends DaffModelFactory<MagentoCartAddressInput> {
  constructor() {
    super(MockMagentoCartAddressInput);
  }
}
