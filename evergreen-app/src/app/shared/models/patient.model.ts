export interface PatientInterface {
  name: string,
  number: string,
  gender: string,
  born: string
}

export class Patient implements PatientInterface {
  constructor(public name: string,public number: string,public gender: string, public born:string) {}
}
