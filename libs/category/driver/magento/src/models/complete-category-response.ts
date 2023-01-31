import { DaffSortDirectionEnum } from '@daffodil/core';
import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';
import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';

import { MagentoCategory } from './category';

export interface MagentoCompleteCategoryResponse {
  category: MagentoCategory;
  aggregates: MagentoAggregation[];
  products: MagentoProduct[];
  sort_fields: MagentoProductSortFields;
  page_info: MagentoSearchResultPageInfo;
  total_count: number;
  appliedSortOption?: string;
  appliedSortDirection?: DaffSortDirectionEnum;
}
