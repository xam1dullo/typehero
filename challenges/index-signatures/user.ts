type GroceryList = {
  [name: string]: number | string | boolean;
};

type InappropriateActionBySituation = {
  [property: string]: Array<string>;
};

type CharactersById = {
  [property: number]: {
    id: number;
    name: string;
    status: string;
    species: string;
  };
};
