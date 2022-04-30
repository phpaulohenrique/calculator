

const checkboxToggleTheme = document.getElementById("checkbox-switch-theme");
const Allbuttons = document.querySelectorAll('button')

// console.log(checkboxToggleTheme.checked);
// console.log(Allbuttons);


const isThemeDark = localStorage.getItem("isThemeDark");

// if it exists in localStorage then the theme is dark

console.log(isThemeDark);

if(isThemeDark){

    checkboxToggleTheme.checked = true;

    Allbuttons.forEach((button) => button.classList.toggle("btn-theme-dark"))

}

checkboxToggleTheme.addEventListener('click',

    () => { 
        // Allbuttons.classList.toggle(".btn-theme-dark");

        console.log(checkboxToggleTheme.checked);

        if(checkboxToggleTheme.checked == true){
            
            localStorage.setItem("isThemeDark", "true");
        }
        else{
            localStorage.removeItem("isThemeDark");

        }

        Allbuttons.forEach((button) => button.classList.toggle("btn-theme-dark"))
    }
)

