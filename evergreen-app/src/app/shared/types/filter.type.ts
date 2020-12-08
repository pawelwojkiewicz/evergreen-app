export type Gender = string;
export type Age = number[];
export type Value = Age | Gender;
export type Name = string;

export type Filters = { gender: Gender, age: Age };
export type SelectedFilters = { value: Value, name: Name };
