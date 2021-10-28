var findRestaurant = function(list1, list2) {
    let sharedFavorites = [];
    list1.forEach((restaurant) => {
      if (list2.includes(restaurant)) {
        sharedFavorites.push(restaurant);
      }
    })
    return sharedFavorites

};
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KNN","KFC","Burger King","Tapioca Express","Shogun"] ))