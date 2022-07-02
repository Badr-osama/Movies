  // Select dom items
  const menuBtn =
  document.querySelector(".menu-btn");

const menu =
  document.querySelector(".menu");

const menuNav =
  document.querySelector(".menu-nav");

const menuBranding =
  document.querySelector(".menu-branding");

const navItems =
  document.querySelectorAll(".nav-item");

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menu.style.backgroundColor= "white"
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach((item) =>
          item.classList.add("show"));

      // Reset the menu state
      showMenu = true;
  } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach((item) =>
          item.classList.remove("show"));

      // Reset the menu state
      showMenu = false;
  }
}


let allMovies=[];
async function getMovies(category)
{
    let allData=await fetch(`https://api.themoviedb.org/3/${category}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3AiGhdKzcs8_GUJf9dhWUXYBl1bCZ-hI3e-C7LV6FEAl2I-xXytWTOIVA`)
    let response=await allData.json();
    allMovies=response.results;
    displayMovies();
    console.log(allMovies);
}
getMovies("movie/now_playing");

$(".nowPlaying").click(function(){
    getMovies("movie/now_playing")
})

$(".popular").click(function(){
    getMovies("movie/popular")
})

$(".topRated").click(function(){
    getMovies("movie/top_rated")
})

$(".trending").click(function(){
    getMovies("trending/all/day")
})

function displayMovies()
{
    let cartona="";
    for(let i=0;i<allMovies.length;i++)  
    {
        cartona+=
        `
        <div class="col-lg-4 col-md-6">
        <div class="content1 mt-5">
            <div class="parent-div">
                <img src="${'https://image.tmdb.org/t/p/w500/'+allMovies[i].poster_path}" alt="${allMovies[i].title?allMovies[i].title:allMovies[i].name}">
                <div class="overlay">
                    <h3>${allMovies[i].title?allMovies[i].title:allMovies[i].name}</h3>
                    <h4>${allMovies[i].overview}</h4>
                    <h5>rate:${allMovies[i].vote_average}</h5>
                    <p>${allMovies[i].release_date?allMovies[i].release_date:allMovies[i].first_air_date}</p>
                </div>
            </div>
        </div>
    </div>
        `
    }
    document.querySelector(".mv").innerHTML=cartona;
    console.log(allMovies.length);
}

function searchOnPage(word)
{
    let cartona="";
    
    for(let i=0;i<10;i++)
    {
        if(allMovies[i].title?allMovies[i].title.toLowerCase().includes(word.toLowerCase()):allMovies[i].name.toLowerCase().includes(word.toLowerCase()))
        {
            cartona+=
            `
            <div class="col-lg-4 col-md-6">
            <div class="content1 mt-5">
                <div class="parent-div">
                    <img src="${'https://image.tmdb.org/t/p/w500/'+allMovies[i].poster_path}" alt="${allMovies[i].title?allMovies[i].title:allMovies[i].name}">
                    <div class="overlay">
                        <h3>${allMovies[i].title?allMovies[i].title:allMovies[i].name}</h3>
                        <h4>${allMovies[i].overview}</h4>
                        <h5>rate:${allMovies[i].vote_average}</h5>
                        <p>${allMovies[i].release_date?allMovies[i].release_date:allMovies[i].first_air_date}</p>
                    </div>
                </div>
            </div>
        </div>
            `
        }
    }
    document.querySelector(".mv").innerHTML=cartona;
}

$(".searchMovie").keyup(function(e){
    console.log(e.target.value);
    console.log(this.value);
    searchOnPage(this.value);
})




// Validation
function validateName()
{
    let reg=/^[A-Za-z][A-Za-z0-9_]{7,15}$/;
    return reg.test(document.querySelector(".name").value)
}

function validateEmail()
{
    let reg=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return reg.test(document.querySelector(".email").value)
}

function validatePhone()
{
    let reg=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    return reg.test(document.querySelector(".phone").value)
}

function validatePassword()
{
    let reg=/^[a-zA-Z]\w{3,14}$/;
    return reg.test(document.querySelector(".password").value)
}

function validateRePassword()
{
    let reg=/^[a-z]{3,15}$/;
    return reg.test(document.querySelector(".rePassword").value)
}




function checkNameInput()
{
    if(validateName()==false)
    {
        $('.nameError').removeClass("d-none");
        $('.nameError').addClass("d-block");
        console.log("false");
    }
    else
    {
        $('.nameError').removeClass("d-block");
        $('.nameError').addClass("d-none");
        console.log("true");
    }
}
function checkEmailInput()
{
    if(validateEmail()==false)
    {
        $('.emailError').removeClass("d-none");
        $('.emailError').addClass("d-block");
        console.log("false");
    }
    else
    {
        $('.emailError').removeClass("d-block");
        $('.emailError').addClass("d-none");
        console.log("true");
    }
}
function checkPhoneInput()
{
    if(validatePhone()==false)
    {
        $('.phoneError').removeClass("d-none");
        $('.phoneError').addClass("d-block");
        console.log("false");
    }
    else
    {
        $('.phoneError').removeClass("d-block");
        $('.phoneError').addClass("d-none");
        console.log("true");
    }
}
function checkAgeInput()
{
    if(document.querySelector(".age").value>=18 && document.querySelector(".age").value<70)
    {

        $('.ageError').removeClass("d-block");
        $('.ageError').addClass("d-none");
        console.log("true");

        
    }
    else
    {
        $('.ageError').removeClass("d-none");
        $('.ageError').addClass("d-block");
        console.log("false");
    }
}
function checkPasswordInput()
{
    if(validatePass()==false)
    {
        $('.passwordError').removeClass("d-none");
        $('.passwordError').addClass("d-block");
        console.log("false");
    }
    else
    {
        $('.passwordError').removeClass("d-block");
        $('.passwordError').addClass("d-none");
        console.log("true");
    }
}
function checkRePasswordInput()
{
    if(document.querySelector(".pass").value!=document.querySelector(".rePass").value)
    {
        $('.repasswordError').removeClass("d-none");
        $('.repasswordError').addClass("d-block");
        console.log("false");
    }
    else
    {
        $('.repasswordError').removeClass("d-block");
        $('.repasswordError').addClass("d-none");
        console.log("true");
    }
}

$(".name").on("focus keyup",function(){
    checkNameInput();
})

$(".email").on("focus keyup",function(){
    checkEmailInput();
})

$(".email").on("focus keyup",function(){
    checkEmailInput();
})

$(".phone").on("focus keyup",function(){
    checkPhoneInput();
})

$(".age").on("focus keyup",function(){
    checkAgeInput();
})

$(".password").on("focus keyup",function(){
    checkPasswordInput();
})

$(".rePassword").on("focus keyup",function(){
    checkRePasswordInput();
})




