export const FETCH_IDEAS_WITH_CATEGORIES_QUERY =
  'SELECT Ideas.*, Categories.name AS category_name, Categories.icon AS category_icon FROM Ideas \
  INNER JOIN Categories \
  ON Ideas.category_id = Categories.category_id';
