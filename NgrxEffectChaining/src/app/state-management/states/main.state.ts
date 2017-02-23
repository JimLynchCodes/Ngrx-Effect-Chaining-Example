export interface MainState {
  counter:number;
  adjectiveForJim:string;
  isAuthenticated:boolean
}
;

export const intitialState:MainState = {
  counter: 10,
  adjectiveForJim: "not logged in..",
  isAuthenticated: false,
};
