export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Integration {
  id: string;
  type: string;
  status: string;
}

export interface Automation {
  id: string;
  name: string;
  trigger: string;
  action: string;
}
