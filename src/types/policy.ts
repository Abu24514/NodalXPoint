export interface Clause {
  number: string;
  heading: string;
  body: string;
}

export interface Policy {
  id: string;
  label: string;
  summary: string;
  clauses: Clause[];
}