let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomdiceimage = "dice"+ randomNumber1 + ".png";
let randomimagesourse = "images/" + randomdiceimage;
let imge1 = document.querySelectorAll("img")[0];
imge1 = setAttribute("src",randomimagesourse);


