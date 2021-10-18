let buttonSwitch = document.querySelector(".switch");
document.querySelector("img").setAttribute("src", "https://www.lvl1.fr/wp-content/uploads/2021/03/site-65.png");
document.querySelector(".loader img").setAttribute("src", "https://www.lvl1.fr/wp-content/uploads/2021/03/Logo-V3-noir.png");
let borderColor = document.querySelector("header");
let wpIcon = '<i class="fab fa-wordpress-simple"></i>';
let prestaIcon = '<img src="prestashop.png" alt="icon prestashop">';
let iconContainer = document.querySelector(".icon");
let version = document.querySelector(".version");
let change = document.querySelector(".change");
let iconSwap = document.querySelector(".iconSwap");
console.log(iconSwap);

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
            buttonSwitch.textContent = "La Demo Prestashop";
            change.textContent = "La Demo WP / WooCommerce";
            change.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);")
            borderColor.setAttribute("style", "border-bottom: solid 5px #0073aa");
            iconContainer.innerHTML = prestaIcon;
            buttonSwitch.appendChild(iconContainer);
            change.setAttribute
            iconSwap.innerHTML = wpIcon;
            change.appendChild(iconSwap);
        }
        else if(parametres == namePS){
            buttonSwitch.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);")
            document.querySelector("iframe").setAttribute("src", "https://prestademo.lvl1.fr/");
            buttonSwitch.textContent = "La Demo Wordpress";
            change.textContent = "La Demo Prestashop";
            borderColor.setAttribute("style", "border-bottom: solid 5px #ff0075");
            iconContainer.innerHTML = wpIcon;
            buttonSwitch.appendChild(iconContainer);
            change.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);")
            change.setAttribute("style", "background:#ff0075;");
            iconSwap.innerHTML = prestaIcon;
            change.appendChild(iconSwap);
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
                change.textContent = "Demo Prestashop ";
                change.setAttribute("style", "background:#ff0075;")
                buttonSwitch.textContent = "Demo Wordpress";  
                buttonSwitch.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);")
                borderColor.setAttribute("style", "border-bottom: solid 5px #0073aa");
                iconContainer.innerHTML = wpIcon;
                buttonSwitch.appendChild(iconContainer);
                version.textContent="Version WP/WooCommerce :";
                iconSwap.innerHTML = prestaIcon;
                change.appendChild(iconSwap);
            },1500)
            nameCMS = "prestashop";
        }
        else{
            document.querySelector("iframe").setAttribute("src", "https://webdemo.lvl1.fr/");
            setTimeout(function(){
                change.textContent = "La demo WP / WooCommerce";
                change.setAttribute("style", "background: linear-gradient(45deg, #0073aa, #0085ba);")
                version.textContent = "La version Prestashop :"
                buttonSwitch.textContent = "Demo Prestashop";
                buttonSwitch.setAttribute("style", "background:#ff0075;")
                borderColor.setAttribute("style", "border-bottom: solid 5px #ff0075");
                iconContainer.innerHTML = prestaIcon;    
                buttonSwitch.appendChild(iconContainer);
                iconSwap.innerHTML = wpIcon;
                change.appendChild(iconSwap);
            },1500)
            nameCMS = "wordpress";
        }
    })
}

main();

