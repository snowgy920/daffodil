import { InjectionToken } from '@angular/core';

/**
 * The path to which the user should be redirected if the cart has no items when {@link DaffCartItemsGuard} is invoked.
 */
export const DaffCartItemsGuardRedirectUrl = new InjectionToken<string>('DaffCartItemsGuardRedirectUrl', { factory: () => '/' });
