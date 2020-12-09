import { FormGroup } from '@angular/forms';

export type Gender = string;
export type Age = number[];
export type Label = string;
export type DeleteFilter = (form: FormGroup) => void;

export type Filters = { gender: Gender, age: Age };
export type SelectedFilters = { label: Label, onDelete: DeleteFilter };
