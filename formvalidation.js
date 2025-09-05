const submit_Button = document.getElementById("submit_btn");
const reset_Button = document.getElementById("reset_btn");

submit_Button.addEventListener('click', ()=>{
event.preventDefault();

//name

const name_area = document.getElementById("input_box").value;
const name_element=document.getElementById("name_error");
const name_input = document.getElementById("input_box");

//REGEX NAME
const name_Regex = /^[A-Z][a-z]/;

if(name_area==="")
{
name_element.innerText="**NAME AREA SHOULD BE REQUIRED.";
name_input.style.border = "2px solid red";

}
else if(name_area.length <4)
{
name_element.innerText="**NAME AT LEAST 4 CHARACTERS";
name_input.style.border = "2px solid red";
}

//REGEX NAME

else if(!name_Regex.test(name_area))
{
    name_element.innerText= "**ONLY CHARACTERS ALLOWED";
    name_input.style.border = "2px solid red";
}
else{
    localStorage.setItem('name',name_area);
    localStorage.getItem('name') || '';

}


//Surname

const surname_area = document.getElementById("input_box2").value;
const surname_element = document.getElementById("surname_error");
const surname_input = document.getElementById("input_box2");

//REGEX_SURNAME
const surname_Regex = /^[A-Z][a-z]/;

if(surname_area===null)
{
surname_element.innerText="**SURNAME SHOULD BE REQUIRED.";
surname_input.style.border = "2px solid red";

}
else if(surname_area.length <4)
{
surname_element.innerText="**SURNAME AT LEAST 4 CHARACTERS";
surname_input.style.border = "2px solid red";
}

//REGEX SURNAME

else if(!surname_Regex.test(surname_area))
    {
        surname_element.innerText= "**ONLY CHARACTERS ALLOWED";
        surname_input.style.border = "2px solid red";
    }
else{
    localStorage.setItem('surname',surname_area);
    localStorage.getItem('surname') || '';
}


//email-id

const email_area = document.getElementById("input_box3").value;
const email_element = document.getElementById("email_error");
const email_input = document.getElementById("input_box3");

//regex 
const email_Regex = /^[A-Za-z0-9_]+@[a-z]+\.[a-z]/;

if(email_area===null)
{
    email_element.innerText="**EMAIL-ID SHOULD BE REQUIRED.";
    email_input.style.border = "2px solid red";

}

//regex pattern

else if (!email_Regex.test(email_area))
{
    email_element.innerText="**WRONG SYNTAX OF EMAIL-ID";
    email_input.style.border="2px solid red";
    
  
}
    else{
        localStorage.setItem('email-id',email_area);
        localStorage.getItem('email') || '';

}


//contact

const contact_area = document.getElementById("input_box4").value;
const contact_element = document.getElementById("contact_error");
const contact_input = document.getElementById("input_box4");

if(contact_area===null)
{
    contact_element.innerText="**CONTACT SHOULD BE REQUIRED.";
    contact_input.style.border = "2px solid red";

}
else if(contact_area.length != 10)
{
    contact_element.innerText="**AT LEAST 10 DIGIT";
    contact_input.style.border = "2px solid red";
}
    else{
        localStorage.setItem('contact',contact_area);
        localStorage.getItem('CONTACT') || '';

}


//Password

const password_area = document.getElementById("input_box5").value;
const password_element = document.getElementById("pswd_error");
const password_input = document.getElementById("input_box5");

if(password_area===null)
{
    password_element.innerText="**PASSWORD MUST REQUIRED";
    password_input.style.border = "2px solid red";

}
else if(password_area.length < 8  || password_area.length > 15)
{
    password_element.innerText="**PASSWORD MUST BE 8 to 15 CHARACTERS";
    password_input.style.border = "2px solid red";
}
    else{

        localStorage.setItem('password',password_area);
        localStorage.getItem('PASSWORD') || '';
}


//  confirm password

    
const confPassword_area = document.getElementById("input_box6").value;
const confPassword_element = document.getElementById("confirmPswd_error");
const confirm_input = document.getElementById("input_box6");

if(confPassword_area==="")
{
    confPassword_element.innerText ="**FILL THIS AREA";
    confirm_input.style.border = "2px solid red";
}
else if(confPassword_area!==password_area)
{
    confPassword_element.innerText="**do not match";
    confirm_input.style.border = "2px solid red";

}
else{
    localStorage.setItem('confirm password',confPassword_area);
    localStorage.getItem('CONFIRM PASSWORD') || '';
   
}


//gender-RADIO BUTTON
    
const radioButtons = document.getElementsByName("mf");
const element = document.getElementById("error");

let selected= radioButtons[0].checked || radioButtons[1].checked;

if(!selected)
{
    element.innerText="**SELECT ONE OF THEM";

}
else{
    localStorage.setItem('Gender',radioButtons);
    localStorage.getItem('Gender') || '';
}


// DATE OF BIRTH


const date_of_Birth = document.getElementById("input_box8").value;
const date_element = document.getElementById("date_error");
const date_input = document.getElementById("input_box8");

if(date_of_Birth==="")
{
    date_element.innerText="**REQUIRED AREA";
    date_input.style.border = "2px solid red";

}
else{
    localStorage.setItem('DATE OF BIRTH',date_of_Birth);
    localStorage.getItem('DATE OF BIRTH') || '';
}



//STATE-dropdown

const state = document.getElementsByName("state").value;
const state_element = document.getElementById("state_error");

let selected_state=false;
if(selected_state)
{
    state_element.innerText="**SELECT ONE OF THEM";
}
else{

    localStorage.setItem('STATE',state);
    localStorage.getItem('STATE') || '';
}

//COURSES___checkbox

const check_box = document.getElementsByTagName("input");
const course_element = document.getElementById("course_error");

let selected_course=0;
for(let i=0; i< check_box.length; i++)
{
    if(check_box[i].type==="checkbox" && check_box[i].checked)
        selected_course++;
}
if(selected_course < 2)
{
    course_element.innerText="**SELECT AT LEAST TWO OF THEM";

}
else{
    localStorage.setItem('COURSES',check_box);
    localStorage.getItem('COURSES') || '';
    alert('Form Registered successfully');
}

});


// RESET BUTTON
reset_Button.addEventListener('click',() =>
{
//    localStorage.clear(); 
   localStorage.removeItem();
});
