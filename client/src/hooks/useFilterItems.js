const useFilterItems = (renderedItems, favorites, filters) => {
  // FILTERING
  let itemsTemp = renderedItems;
  console.log(itemsTemp);
  if (filters.favorites) {
    itemsTemp = itemsTemp.filter((creation) => {
      return favorites.find((fav) => fav === creation.props.id);
    });
  }
  if (filters.blogs) {
    itemsTemp = itemsTemp.filter((creation) => {
      return creation.props.title;
    });
  } else if (filters.authors) {
    itemsTemp = itemsTemp.filter((creation) => {
      return creation.props.username;
    });
  }
  if (filters.category.value) {
    itemsTemp = itemsTemp.filter((creation) => {
      const selector =
        creation.props.selectedCategory || creation.props.category;
      console.log(selector);
      return selector === filters.category.value;
    });
  }
  return { itemsTemp };
};

export default useFilterItems;
