const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))

if(currentUser){
    currentUser.role === 'admin' ? console.log(currentUser.name) : window.location.href = "index.hmtl"; 
}else{
    window.location.href = "index.html";
}

