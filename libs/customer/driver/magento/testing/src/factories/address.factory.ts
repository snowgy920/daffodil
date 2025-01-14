import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCustomerAddress } from '@daffodil/customer/driver/magento';

export class MockMagentoCustomerAddress implements MagentoCustomerAddress {
  __typename = 'CustomerAddress';
  id = faker.helpers.unique(faker.datatype.number);
  region = {
    __typename: 'CustomerAddressRegion',
    region_code: faker.address.stateAbbr(),
    region_id: faker.helpers.unique(faker.datatype.number),
  };
  country_code = faker.address.countryCode();
  street = [faker.address.streetAddress()];
  company = faker.company.name();
  telephone = faker.phone.number();
  postcode = faker.address.zipCode();
  city = faker.address.city();
  firstname = faker.name.firstName();
  lastname = faker.name.lastName();
  email = faker.internet.email();
  default_billing = faker.datatype.boolean();
  default_shipping = faker.datatype.boolean();
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerAddressFactory extends DaffModelFactory<MagentoCustomerAddress> {
  constructor() {
    super(MockMagentoCustomerAddress);
  }
}
