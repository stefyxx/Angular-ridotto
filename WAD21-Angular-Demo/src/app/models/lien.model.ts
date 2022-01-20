export interface Lien {
    nom : string
    url? : string
    children? : Lien[]
    isChildrenVisible? : boolean
}