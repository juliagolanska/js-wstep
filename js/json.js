let jsonObj = {
    "employees" : [
        {
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "firstName": "Anna",
            "lastName": "Smith"
        },
        {
            "firstName": "Peter",
            "lastName": "Jones"
        },
    ]
}

console.log(jsonObj.employees[1].lastName);
//wyciaga nam pierwsze w tablicy o kluczy 

for(let i=0; i < jsonObj.employees.length; i++) {
    console.log(jsonObj.employees[i].firstName + ' ' + jsonObj.employees[i].lastName);
}

jsonObj.employees.forEach(function(element, index) {
    console.log(element.firstName + " " + element.lastName);
})