const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))

if(currentUser){
    currentUser.role === 'carlos' ? console.log(currentUser.name) : window.location.href = "productos.html"; 
}else{
    window.location.href = "index.html";
}