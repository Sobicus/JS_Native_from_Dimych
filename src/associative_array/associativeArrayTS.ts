export const usersArrays = ['Dimych', 'Natasha', 'Valera', 'Katya']

export const usersObj = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: "Natasha"},
    '1212': {id: 1212, name: "Valera"},
    '1': {id: 1, name: "Katya"},
}
export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: "Natasha"},
    {id: 1212, name: "Valera"},
    {id: 1, name: "Katya"},
]
//-------------------------------------------------------------------
type UsersType = {
[key:string]: {id:number, name:string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: "Natasha"},
    '1212': {id: 1212, name: "Valera"},
    '1': {id: 1, name: "Katya"},
}
const user = {id: 100500, name: "Igor"}
users[user.id] = user



