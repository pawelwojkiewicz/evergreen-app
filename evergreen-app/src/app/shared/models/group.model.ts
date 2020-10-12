export interface GroupInterface {
  name: string,
  gender: string,
  age: number,
  medication: string,
  hapiness: string
}

export class Group implements GroupInterface {
  constructor(public name: string,public gender: string, public age: number, public medication: string, public hapiness: string) {}
}
