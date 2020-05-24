import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectonsArray = createSelector(
  [selectShopCollections],
  (collections) =>
    Object.keys(collections).map(
      (nameIdentifire) => collections[nameIdentifire]
    )
);

export const selectShopCategory = (categoryId) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[categoryId]
  );
