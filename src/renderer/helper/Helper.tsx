import { SubcategoryType, CategoryListType } from 'renderer/types/Types';

export default function subcategoryFromCategory(
  categories: CategoryListType[],
  id: string
): SubcategoryType[] {
  let subcategoryList: SubcategoryType[] = [];
  categories.forEach((el) => {
    if (el.id === id) subcategoryList = el.subcategory;
  });
  return subcategoryList;
}
