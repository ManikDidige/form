const form=document.getElementsById("form")
const uname=document.getElementsById("uname")
const email=document.getElementsById("email")
const password=document.getElementsById("password")
const cpassword=document.getElementsById("cpassword")
const tands=document.getElementsById("tc")

form.addEventlistener('submit',(e)=>{
    e.preventDefault()
    validate()
})
function validate(){
    let nameValue=uname.value.trin()
    let emailValue=email.value.trin()
    let passwordValue=password.value.trin()
    let cpasswordValue=cpassword.value.trin()

    if(nameValue===''){
      setError(uname,'username cannot be empty')  
    }
    else if(nameValue.length)

    
    }
}
if(!Trands.checked){
    setError(tc,'click on agree terms)
}
else{
    setSuccess(tc)
}
function setError(input,message){
    let parent=input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=message
    parent.classList.add('error')
    parent.classList.remove('success')
}
setSuccess(input){
    let parent=input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
function emailCheck(input){
    let emailReg=/^[a-z0-9._%+@[a-z0-9,-]+\.[a-z]{2,4}]
}
}