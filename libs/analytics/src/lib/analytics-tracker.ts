import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAnalyticsEvent } from './event/event';

/**
 * The interface that an analytics service must implement to be compatible
 * with the `@daffodil/analytics` package.
 */
export interface DaffAnalyticsTrackerClass {
  track(event: DaffAnalyticsEvent): Observable<unknown>;
}

/**
 * A function that tracks analytics events.
 */
export type DaffAnalyticsTrackerFunction = (event: DaffAnalyticsEvent) => Observable<unknown>;

/**
 * The tracker type.
 *
 * Trackers can either be classes:
 *
 * ```ts
 * export class MyTracker implements DaffAnalyticsTracker {
 *    track(event: DaffAnalyticsEvent) {
 *       return of(true);
 *    }
 * }
 * ```
 *
 * or functions:
 *
 * ```ts
 * export const trackThis = (event: DaffAnalyticsEvent) => {
 *    return of(true);
 * }
 * ```
 */
export type DaffAnalyticsTracker = DaffAnalyticsTrackerFunction | DaffAnalyticsTrackerClass;

/**
 * An injection token representing all of the different analytics trackers.
 */
export const DaffAnalyticsServices = new InjectionToken<DaffAnalyticsTracker[]>('DaffAnalyticsServices', {
  factory: () => [],
});
