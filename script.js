//Use the map function to manipulate the array above and create 4 list elements dynamically
const newGirls = document.getElementById('list')
const techGirls = ['Dami', 'balqees', 'Mary', 'Esther']

let newArr = techGirls.map(function(val, index){
    return `key: ${index} value: ${val}`
    
})
console.log(newArr)

newGirls.innerHTML = JSON.stringify(newArr)