const courseNamesAllowed = {
    appetizers: 'appetizers',
    mains: 'mains',
    desserts: 'desserts'
}

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      
    },
    get mains() {
  
    },
    get desserts() {
  
    },
    set appetizers(appetizerIn) {
  
    },
    set mains (mainIn) {
  
    },
    set desserts (dessertIn) {
  
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
     const dish = {
       name: dishName,
       price: dishPrice
      }
        menu._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse(courseNamesAllowed.appetizers);
      const main = this.getRandomDishFromCourse(courseNamesAllowed.mains);
      const dessert = this.getRandomDishFromCourse(courseNamesAllowed.desserts);
      const appetizerPrice = appetizer.price;
      const mainPrice = main.price;
      const dessertPrice = dessert.price;
      const totalPrice = appetizerPrice + mainPrice + dessertPrice;
      return `Your appetizer is ${appetizer.name}, your main dish is ${main.name}, your dessert is ${dessert.name}, and your total price is ${totalPrice}.`
    },
  };
  
menu.addDishToCourse(courseNamesAllowed.appetizers, 'Wings of Fire', 5);
menu.addDishToCourse(courseNamesAllowed.mains, 'Beef Stroganoff', 7);
menu.addDishToCourse(courseNamesAllowed.desserts, 'Chocolate Cheesecake', 4);
menu.addDishToCourse(courseNamesAllowed.appetizers, 'Mozzarella Sticks', 5);
menu.addDishToCourse(courseNamesAllowed.mains, 'Bacon Cheeseburger', 9);
menu.addDishToCourse(courseNamesAllowed.desserts, 'Hot Fudge Brownie', 3);
menu.addDishToCourse(courseNamesAllowed.appetizers, 'Caeser Salad', 4);
menu.addDishToCourse(courseNamesAllowed.mains, 'Shrimp Alfredo', 10);
menu.addDishToCourse(courseNamesAllowed.desserts, 'Vanilla Ice Cream', 3);

const meal = menu.generateRandomMeal();

console.log(meal);
