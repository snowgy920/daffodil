import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioApiServiceInterface } from './api-service.interface';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../../core/assets/fetch/service.interface';
import { DAFFIO_DOCS_PATH_TOKEN } from '../../services/docs-path.token';
import { DaffioApiReference } from '../models/api-reference';

@Injectable({ providedIn: 'root' })
export class DaffioApiService implements DaffioApiServiceInterface {

  constructor(
    @Inject(DaffioAssetFetchService) private fetchAsset: DaffioAssetFetchServiceInterface,
    @Inject(DAFFIO_DOCS_PATH_TOKEN) private docsPath: string,
  ) {}

  list(): Observable<DaffioApiReference[]> {
    return this.fetchAsset.fetch<DaffioApiReference[]>(`${this.docsPath}docs/api/api-list.json`);
  }
}
