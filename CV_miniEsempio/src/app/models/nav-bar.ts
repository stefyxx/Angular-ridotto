// export interface NavBar {
//     name:string
//     url:string
// }
// vediamo di varlo con piu' elementi
export interface NavBar {
    name:string
    url?:string  //x default url=""
    children? : NavBar[]
    
}