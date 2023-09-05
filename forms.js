function validation(){
    let name=document.forms["myform"]["myname"].value;
    if(name=="")
    {
        alert("you must fill your name");
        return false;
    }

    let mail=document.forms["myform"]["mymail"].value;
    if(mail=="")
    {
        alert("you must fill your mail id");
        return false;
    }

    let r_buttons=document.getElementsByName("gender")
    if(r_buttons[0].checked!=true && r_buttons[1].checked!=true)
    {
        alert("choose the gender");
        return false;
    }

    let password=document.forms["myform"]["pass"].value;
    let cpassword=document.forms["myform"]["cpass"].value;
    if(cpassword!=password)
    {
        alert("please check with your confirm password");
        return false;
    }


    let mobile_No = document.forms["myform"]["mynum"].value;
    let rem, count = 0;
    while (mobile_No > 0) {
    rem = mobile_No % 10;
    count++;
    mobile_No = Math.floor(mobile_No / 10);
    }
    if (count != 10) {
    alert("Give correct mobileNo");
    return false;
    }

    let c_buttons=document.getElementsByName("need")
    if(c_buttons[0].checked!=true && c_buttons[1].checked!=true)
    {
        alert("choose your purpose");
        return false;
    }
    
    return true;
    }