type GroceryStore<Name, City> = {
  name: Name;
  city: City;
};

type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = GroceryItem<"MacBook", 2000, true>;
