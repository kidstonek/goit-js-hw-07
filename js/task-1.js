const my = document.querySelector('ul#categories');
console.log("Numbers of categories:", my.querySelectorAll('li.item').length)
for (const myItem of my.querySelectorAll('li.item')) {
    console.log("Category:", myItem.querySelector('h2').textContent);
    console.log("Elements:", myItem.querySelectorAll('li').length)
}