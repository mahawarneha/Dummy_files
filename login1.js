const username=document.getElementById("inputuser");
const password=document.getElementById("inputpass");
const form=document.getElementById("datacollect");
const errorElement=document.getElementById("error")

form.addEventListener('submit',(e)=>{
    e.preventDefault()

if(username.value=="" || username.value==null){
 console.log("username is requied");
}
if(password.value ==" "){
    console.log("password never be empty")
}
if(password.value.length <= 8 && password.value.length >= 20){
    console.log("minimum character are 8 and maximum 20")
}

})