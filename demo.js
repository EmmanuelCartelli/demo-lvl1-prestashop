let buttonSwitch = document.querySelector(".switch");
document.querySelector("img").setAttribute("src", "https://www.lvl1.fr/wp-content/uploads/2021/03/site-65.png");
document.querySelector(".loader img").setAttribute("src", "https://www.lvl1.fr/wp-content/uploads/2021/03/Logo-V3-noir.png");
let borderColor = document.querySelector("header");
let wpIcon = '<i class="fab fa-wordpress-simple"></i>';
let prestaIcon = '<img src="prestashop.png" alt="icon prestashop">';
let iconContainer = document.querySelector(".icon");
let version = document.querySelector(".version");
let change = document.querySelector(".change");

function loader(){
    setTimeout(function(){
        document.querySelector(".loader").setAttribute("style", "display:none;")
    }, 3000)
    document.querySelector(".loader").setAttribute("style", "display:flex;")
}



function urlID(){
    return new URL(location.href).searchParams.get("name")
}

function getName(parametres){
    let nameWP = "wordpress";
    let namePS = "prestashop";
        if(parametres == nameWP){
            buttonSwitch.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);") 
            buttonSwitch.setAttribute("style", "background:#ff0075;")
            document.querySelector("iframe").setAttribute("src", "https://webdemo.lvl1.fr/");
            buttonSwitch.textContent = "Découvrez la demo Prestashop";
            borderColor.setAttribute("style", "border-bottom: solid 5px #0073aa");
            iconContainer.innerHTML = prestaIcon;
            buttonSwitch.appendChild(iconContainer);
            change.textContent = "Vous consultez la version WP / WooCommerce";
            change.setAttribute("style", "background: #0073aa;")
        }
        else if(parametres == namePS){
            buttonSwitch.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);")
            document.querySelector("iframe").setAttribute("src", "https://prestademo.lvl1.fr/");
            buttonSwitch.textContent = "Découvrez la demo Wordpress";
            borderColor.setAttribute("style", "border-bottom: solid 5px #ff0075");
            iconContainer.innerHTML = wpIcon;
            buttonSwitch.appendChild(iconContainer);
            change.textContent = "Vous consultez la version Prestashop";
            change.setAttribute("style", "background: #ff0075;")
        }
}
function main(){
    let nameCMS = urlID();
    if(nameCMS == null){
        nameCMS = "wordpress";
        getName(nameCMS);
    }else{
        getName(nameCMS);
    }
    console.log(nameCMS)
    loader();
    buttonSwitch.addEventListener("click", function(){
        loader();
        if(nameCMS == "wordpress"){
            document.querySelector("iframe").setAttribute("src", "https://prestademo.lvl1.fr/");
            setTimeout(function(){
                buttonSwitch.textContent = "Découvrez la demo Wordpress";  
                buttonSwitch.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);")
                borderColor.setAttribute("style", "border-bottom: solid 5px #ff0075");
                iconContainer.innerHTML = wpIcon;
                buttonSwitch.appendChild(iconContainer);
                change.textContent = "Vous consultez la version Prestashop";
                change.setAttribute("style", "background: #ff0075;")
            },1500)
            nameCMS = "prestashop";
        }
        else{
            document.querySelector("iframe").setAttribute("src", "https://webdemo.lvl1.fr/");
            setTimeout(function(){
                buttonSwitch.textContent = "Découvrez la demo Prestashop";
                buttonSwitch.setAttribute("style", "background:#ff0075;");
                borderColor.setAttribute("style", "border-bottom: solid 5px #0073aa");
                iconContainer.innerHTML = prestaIcon;    
                buttonSwitch.appendChild(iconContainer);
                change.textContent = "Vous consultez la version WP / WooCommerce";
                change.setAttribute("style", "background: #0073aa;")
            },1500)
            nameCMS = "wordpress";
        }
    })
}

main();

