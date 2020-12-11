export type Gender = string;
export type Age = number[];
export type Label = string;
export type DeleteFilter = () => void;

export type Filters = { gender: Gender, age: Age };
export type SelectedFilters = { label: Label, onDelete: DeleteFilter };
