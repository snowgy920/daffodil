import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';

/**
 * The interface responsible for mediating the interaction of the shipping
 * information of a cart with a given platform.
 */
export interface DaffCartShippingInformationServiceInterface<T extends DaffCart = DaffCart>{
  /**
   * Get the currently selected shipping method of a cart.
   */
  get(cartId: T['id']): Observable<T['shipping_information']>;

  /**
   * Update the currently selected shipping method of a cart.
   */
  update(cartId: T['id'], shippingInfo: Partial<T['shipping_information']>): Observable<Partial<T>>;

  /**
   * Remove the currently selected shipping method from a cart.
   */
  delete(cartId: T['id'], id?: T['shipping_information']['id']): Observable<Partial<T>>;
}

export const DaffCartShippingInformationDriver = new InjectionToken<
DaffCartShippingInformationServiceInterface
>('DaffCartShippingInformationDriver');
