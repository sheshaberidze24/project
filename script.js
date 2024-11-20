var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ btn-ის მნიშვნელობის მისაღებად აქ ვიყენებთ loop-ს ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}
function sin() {
    screen.value = Math.sin(screen.value);/*სინუსი */
}

function cos() {
    screen.value = Math.cos(screen.value);/*კოსინუსი */
}

function tan() {
    screen.value = Math.tan(screen.value);/*ტანგესი */
}

function pow() {
    screen.value = Math.pow(screen.value, 2);/*კვადრატი */
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);/*კვადრატული ფესვის გამოთვლა*/
}

function log() {
    screen.value = Math.log(screen.value);/*ლოგარითმის გამოთვლა */
}

function pi() {
    screen.value = 3.14159265359;/*პი–ს მნიშვნელობბა */
}

function e() {
    screen.value = 2.71828182846;/*ე–ის მნიშვნელობა */
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}



// ცვლადები შექმნა 

const checkbox = document.getElementById('toggle-checkbox');
const buttons = document.querySelectorAll('.btn');
const buttons1 = document.querySelectorAll('.btn1');
const display = document.querySelector('.display')
const ce = document.getElementById('ce');
const  ac = document.getElementById('ac');
const evalBtn = document.getElementById('eval')




// ფერის შეცვლის ფუნქცია
checkbox.addEventListener('change', function() {
  if (!checkbox.checked) {  //თუ light mode-ზეა

    buttons.forEach(button => {
        button.style.color = "#000" 

        button .style.backgroundColor = '#00b4d8'; //btn class მქონე ელემენტების background ფერის შეცვლა

        button.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee'
        
        button.addEventListener('mouseover', function(){
            button.style.background = '#4cc9f0';
            button.style.boxShadow = 'inset 5px 5px 8px #023e8a,inset -5px -5px 8px #4361ee';
        })
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#00b4d8';  // ჰოვერის შემდეგ რა ფერი უნდა მიღოს თუ არაფერი ეწერა დარკ მოუსი ფერს გადმოიტანს (ცარიელი არ დატოვოთ)
            button.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee'; //იგივე ლოგიკა რაც მაღლა (ცარიელი არ დატოვოთ)
        });
    });
    

    buttons1.forEach(button => {

        button.style.color = '#000' 

        button .style.backgroundColor = '#a2d2ff'; //btn class მქონე ელემენტების background ფერის შეცვლა
        button.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee'
        button.addEventListener('mouseover', function(){
            button.style.background = '#4cc9f0';
            button.style.boxShadow = 'inset 5px 5px 8px #023e8a,inset -5px -5px 8px #4361ee';
        })
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#a2d2ff';  // ჰოვერის შემდეგ რა ფერი უნდა მიღოს თუ არაფერი ეწერა დარკ მოუსი ფერს გადმოიტანს (ცარიელი არ დატოვოთ)
            button.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee'; //იგივე ლოგიკა რაც მაღლა (ცარიელი არ დატოვოთ)
        });
    })
    

    //ce button in light mode hover efect
    ce.addEventListener('mouseover', function(){
        ce.style.boxShadow = 'inset 5px 5px 8px #f1a7c3, inset -5px -5px 8px #ff9dbe';
    })
    ce.addEventListener('mouseout', function(){
        ce.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee';
    })

    //ac button in light mode hover efect
    ac.addEventListener('mouseover', function(){
        ac.style.boxShadow = 'inset 5px 5px 8px #5a8fc1, inset -5px -5px 8px #7a93c9';
    })
    ac.addEventListener('mouseout', function(){
        ac.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee';
    })



    ce.style.backgroundColor = 'pink'; //დანარჩენი კალკულატორის ღილაკების ფერის შეცვლა
    ce.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee';

    ac.style.backgroundColor = '#1554ba';    
    ac.style.boxShadow = '5px 5px 8px #0000009c, -5px -5px 8px #4361ee';

    evalBtn.style.backgroundColor = '#33ccff'
    evalBtn.style.boxShadow = 'inset 5px 5px 8px #66d9ff,inset -5px -5px 8px #00ace6'
    
    display.style.backgroundColor = ' '  //დისფლეის სადაც input-ები ჩდება ფერის შეცვლა
    screen.style.background = '#fff'

    
} 
  
  
  //თუ light mode არა გაკტიურებული თავდაპირველ ფერს დაუბრუნდება
  else {
    
    document.body.style.backgroundColor = '';  

    buttons.forEach(button => {
        button.style.color = '#000' 

        button .style.backgroundColor = '#03045e';
        button.style.boxShadow = '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3'
        
        button.addEventListener('mouseover', function(){
            button.style.backgroundColor = '#1d3bc5';
            button.style.boxShadow = 'inset 5px 5px 8px rgba(16, 16, 16, .1),inset -5px -5px 8px #3a0ca3';
        })
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#03045e'; 
            button.style.boxShadow = '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3';
        });
    });

    buttons1.forEach(button => {
        button.style.color = '#ade8f4' 

        button .style.backgroundColor = '#023e8a ';
        button.style.boxShadow = '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3'
        
        button.addEventListener('mouseover', function(){
            button.style.backgroundColor = '#1d3bc5';
            button.style.boxShadow = 'inset 5px 5px 8px rgba(16, 16, 16, .1),inset -5px -5px 8px #3a0ca3';
        })
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#023e8a '; 
            button.style.boxShadow = '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3';
        });
    });




    ce.addEventListener('mouseover', function(){
        ce.style.boxShadow = 'inset 5px 5px 8px #c66391,inset -5px -5px 8px #ff758f';
    })
    ce.addEventListener('mouseout', function(){
        ce.style.boxShadow = '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3';
    })


    ac.addEventListener('mouseover', function(){
        ac.style.boxShadow = 'inset 5px 5px 8px #0353a4,inset -5px -5px 8px #435eaf';
    })
    ac.addEventListener('mouseout', function(){
        ac.style.boxShadow = '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3';
    })

    display.style.backgroundColor = ''

    ce.style.backgroundColor = ''
    ce.style.boxShadow =  '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3'

    ac.style.backgroundColor = ''
    ac.style.boxShadow =  '5px 5px 8px #0000009c,-5px -5px 8px #3a0ca3'

    evalBtn.style.backgroundColor = '#1982c4'
    evalBtn.style.boxShadow = 'inset 5px 5px 8px #3399cc, inset -5px -5px 8px #006f99';

    screen.style.backgroundColor = ''
  }

  
});


  

// input filde შემოწმება შეყვანილია თუ არა სახელი და გვარი
function validateForm(event) {
    event.preventDefault(); // ფორმის შეწყვეტა ჯავასკრიპტში რო გადმოვიდეს
    const userName = document.getElementById("username");
    const lastName = document.getElementById("surname");
    const errorMessage = document.getElementById("error-message");

    
    errorMessage.textContent = "";
    errorMessage.style.color = "red";

    // ამოწმებს შევსებულია თუ არა
    if (userName.value == "" || lastName.value == "") {
        errorMessage.textContent = "Please fill out all fields.";
        
        return; // ფუნქციას წყვეტს
    }

    
    if (userName.value.length < 4) {
        errorMessage.textContent = "your name has to be longer than 4";
        return
    }

    if (lastName.value.length < 8) {
        errorMessage.textContent = "your surname has to be longer that 8";
        return
    }

    window.location.href = "calculator.html"; // სხვა გვერდზე გადასვლა
}
function handleSubmit () {
    const name = document.getElementById('username').value;
    const surname = document.getElementById('surname').value;

    // to set into local storage
    localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname);
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);

    return;
}





















