var DATA = {
    "development tools": {
        "vscode": {
            "title": "Visual Studio Code",
            "logopath": "img/logos/vscode.png",
            "description": "One of the best code editors! Simple and easy.",
            "url": "https://code.visualstudio.com/"
        },
        "brackets": {
            "title": "Brackets",
            "logopath": "img/logos/brackets.jpg",
            "description": "Another of the best code editors!",
            "url": "http://brackets.io/"
        },
        "sublimetext": {
            "title": "Sublime Text",
            "logopath": "img/logos/sublime.png",
            "description": "Another of the best code editors alternatives!",
            "url": "https://www.sublimetext.com/"
        },
        "codepen": {
            "title": "Codepen",
            "logopath": "img/logos/codepen.png",
            "description": "Online and simple text editor!",
            "url": "https://codepen.io/"
        },
        "w3school": {
            "title": "W3Schools",
            "logopath": "img/logos/w3schools.ico",
            "description": "One of the best options to learn web development!",
            "url": "https://www.w3schools.com/"
        }
    },
    "html": {
        "htmlreferencebymdn": {
            title: "HTML Reference by MDN",
            "logopath": "img/logos/mdn.png",
            "description": "Reference for all HTML elements.",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        },
        "emmet": {
            "title": "Emmet Cheat Sheet",
            "logopath": "img/logos/emmet.png",
            "description": "Powerfull tool to write fast HTML.",
            "url": "https://docs.emmet.io/cheat-sheet/"
        }
    },
    "css": {
        "cssreferencebymdn": {
            title: "CSS Reference by MDN",
            "logopath": "img/logos/mdn.png",
            "description": "Reference for CSS properties, pseudo-classes, pseudo-elements, data types, and at-rules...",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
        },
        "animate.css": {
            title: "animate.css",
            "logopath": "img/logos/animatecss.png",
            "description": "Easy animations for your website, just adding clases.",
            "url": "https://daneden.github.io/animate.css/"
        },
        "UIGradients": {
            title: "UIGradients",
            "logopath": "img/logos/uigradients.png",
            "description": "Easy gradient background picker.",
            "url": "https://uigradients.com/"
        },
    },
    "javascript": {
        "jsreferencebymdn": {
            title: "JS Reference by MDN",
            "logopath": "img/logos/mdn.png",
            "description": "Reference for JS.",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
        },
        "wow.js": {
            title: "wow.js",
            "logopath": "img/logos/wowjs.gif",
            "description": "Delay your animations so they activate when scrolled down. Works very well with animate.css",
            "url": "https://wowjs.uk/"
        },
        "nojquery": {
            title: "You might not need Jquery",
            "logopath": "img/logos/nojquery.png",
            "description": "Self explanatory title.",
            "url": "http://youmightnotneedjquery.com/"
        },
        
    },
    "frameworks": {
        "bootstrap": {
            title: "Bootstrap",
            "logopath": "img/logos/bootstrap.png",
            "description": "Full css and javascript framework to make interfaces quickly.",
            "url": "https://getbootstrap.com/"
        },
    },
    "fonts and typography": {
        "": {
            title: "",
            "logopath": "img/logos/.png",
            "description": "",
            "url": ""
        },
        "": {
            title: "",
            "logopath": "img/logos/.png",
            "description": "",
            "url": ""
        },
    },
    "images and videos": {
        "": {
            title: "",
            "logopath": "img/logos/.png",
            "description": "",
            "url": ""
        },
        "": {
            title: "",
            "logopath": "img/logos/.png",
            "description": "",
            "url": ""
        },
    },
    "icons": {
        "ionicons": {
            title: "Ionicons",
            "logopath": "img/logos/ionicons.png",
            "description": "Beautifully crafted open source icons.",
            "url": "https://ionicons.com/"
        },
        "font awesome": {
            title: "Font Awesome",
            "logopath": "img/logos/fontawesome.png",
            "description": "Get vector icons and social logos on your website.",
            "url": "https://fontawesome.com/"
        },
    }
};

var data = DATA;
console.log(data);

const updateUI = (data) => {
    let text = '';
    let keys = Object.keys(data);
    console.log(keys);
    for (let key in keys) {
        text += `<section class="section"><div class="container"><header><h2 class="section-header"><i class="fas fa-code section-icon"></i>${keys[key]}</h2></header><article><div class="row">`;
        for (let tool in data[keys[key]]) {
            let act = data[keys[key]][tool];
            text += `<div class="col-4 resource">
            <img src="${act.logopath}" alt="" class="resource-logo">
            <h3 class="resource-heading">
                <a class="resource-link" href="${act.url}">${act.title}</a>
            </h3>
            <p href="resource-text">${act.description}</p>
        </div>`
        }
        text += '</div></article></div></section>';

    }
    document.getElementById('root').insertAdjacentHTML('beforeend', text);
}

const loadJSON = (path) => {

    var xhr = new XMLHttpRequest();
    //xhr.overrideMimeType("application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {

            console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.open('GET', path, true);
    xhr.send();
}

window.onload = () => {
    updateUI(data);
}


// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript