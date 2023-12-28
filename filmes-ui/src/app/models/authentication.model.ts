import { ERole } from "../role.enum";

export class Authentication {
  id: number = 0;
  email: string = '';
  nome: string = '';
  token: string = '';
  roles?: ERole[];
}
