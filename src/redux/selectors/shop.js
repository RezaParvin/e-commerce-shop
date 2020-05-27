import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectonsArray = createSelector(
  [selectShopCollections],
  (collections) =>
    collections
      ? Object.keys(collections).map(
          (nameIdentifire) => collections[nameIdentifire]
        )
      : []
);

export const selectShopCategory = (categoryId) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[categoryId] : null
  );

export const selectIsFetchingShopData = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsLoadCollections = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
