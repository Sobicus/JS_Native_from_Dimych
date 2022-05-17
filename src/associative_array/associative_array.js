let user = {
    "name": "Pol",
    "age": 32,
    "address": {
        "city": {
            "title": "Alikante"
        }
    }
}

console.log(user.address.city.title)
console.log(user['address']['city']['title'])

let city = {}

city.title = "Barselona"
city["citizenCount"] = 10000

console.log(city)

let users = ["Sasha","Misha","Pasha","Dasha"]

console.log(users['0'])
console.log(users["map"]((e)=> e.toUpperCase()))
console.log(users.map((e)=> e.toUpperCase()))


let usersObj = {
    "0" : "Sasha",
    "1" : "Misha",
    "2" : "Pasha",
    "3" : "Dasha",
}

Object.keys(usersObj).map()
Object.values(usersObj).map()