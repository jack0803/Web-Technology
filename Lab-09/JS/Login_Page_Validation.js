function check_validation(){
    const email = document.form.email.value;
    const pass = document.form.password.value;
    
    if(email == "" || email == null)
    {
        alert("Email can't blank");
        return false;
    }
    else if(pass == "" || pass == null)
    {
        alert("Password can't blank");
        return false;
    }
    else if(pass.length < 6){
        alert("required password length is 6")
    }
}