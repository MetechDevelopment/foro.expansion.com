const URL = window.location.href;

$('.transition').on('click', function (e) {
    e.preventDefault();
    var current = $(this).data('current');
    var target = $(this).data('target');
    $(current).modal('hide');
    $(target).modal('show');
})

$('body').on('shown.bs.modal', function () {
    $('body').addClass('modal-open').css("padding-right", "15px"); 
});

function openSideDrawer() {
    document.getElementById("side-drawer").style.right = "0";
    document.getElementById("side-drawer-void").classList.add("d-block");
    document.getElementById("side-drawer-void").classList.remove("d-none");
}

function closeSideDrawer() {
    document.getElementById("side-drawer").style.right = "-336px";
    document.getElementById("side-drawer-void").classList.add("d-none");
    document.getElementById("side-drawer-void").classList.remove("d-block");
}

function setMenuActive(url){
    const splittedUrl = url.split('/');
    var section = splittedUrl[3];
    if(section == '' ) {
        section = 'home'
    };
    $('#links>a').removeClass('active');
    $('#link-' + section).addClass('active');
}

function checkBg(url){
    const splittedUrl = url.split('/');
    var section = splittedUrl[3];
    if(section == '' ) {
        section = 'home'
    };
    $('body').addClass(section)
}

function authMiddleware() {
    var access_token = localStorage.getItem('access_token');

    if (!access_token) {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        let access_token = urlParams.get('token');

        console.log(access_token);

        if(access_token) {
            localStorage.setItem('access_token', access_token);
        } else {
            window.location.href = '/';
        }
    }

    return {
        'access_token': access_token
    };
}

function isLogged() {
    var access_token = localStorage.getItem('access_token');

    if (access_token) {
        if(document.getElementById("link-evento")) {
            document.getElementById("link-evento").classList.remove("d-none");
        }
        if(document.getElementById("link-participantes")) {
            document.getElementById("link-participantes").classList.remove("d-none");
        }
        if(document.getElementById("link-login")) {
            document.getElementById("link-login").classList.add("d-none");
        }
    }
}

function getJson(url, token, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            callback(xhr.status, JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.send();
}

function postJson(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            callback(xhr.status, JSON.parse(xhr.responseText));
        }
    };
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(JSON.stringify(Object.fromEntries(data)));
}

if(document.querySelector("#registration")) {
    document.querySelector("#registration").addEventListener("submit", function(e) {
        e.preventDefault();    //stop form from submitting
        let form = new FormData(e.target);
        postJson(e.target.action, form, function(status, response) {
            if(status != 200) {
                Swal.fire(
                    'Disculpe las molestias',
                    'Ha habido un error al registrar su solicitud, contacte con foro.expansion@unidadeditorial.es',
                    'danger'
                );
            }
            let product = form.get('product');
            let promo = form.get('promo');
            let data = new FormData();
            data.append("product_id", product);
            data.append("promo", promo);
            data.append("user_id", response.id);
            postJson('https://inscripciones.expansion.com/api/v1/registration', data, function(status, response) {
                if(status != 200) {
                    Swal.fire(
                        'Disculpe las molestias',
                        'Ya había solicitado su inscripción previamente.',
                        'warning'
                    );
                } else {
                    Swal.fire(
                        'Solicitud de inscripción registrada',
                        'En la mayor brevedad posible le indicaremos si ha sido posible aceptar su solicitud.',
                        'success'
                    );

                    localStorage.removeItem('promo');
                }
            });
        });
    });
}

if(document.querySelector("#login")) {
    document.querySelector("#login").addEventListener("submit", function(e) {
        e.preventDefault();    //stop form from submitting
        login(e);
    });
}

if(document.querySelector("#loginM")) {
    document.querySelector("#loginM").addEventListener("submit", function(e) {
        e.preventDefault();    //stop form from submitting
        login(e);
    });
}

function login(e) {
    let form = new FormData(e.target);
    postJson(e.target.action, form, function(status, response) {
        if(status != 200) {
            Swal.fire(
                'Disculpe las molestias',
                'Ha habido un error al tratar de identificar su usuario, contacte con foro.expansion@unidadeditorial.es',
                'danger'
            );
        } else {
            localStorage.setItem('access_token', response.access_token);
            window.location.href = '/streaming';
        }
    });
}

$(document).ready(function() {
    setMenuActive(URL);
    checkBg(URL);

    $('.btn-block').click(function() {
        let element = $(this).children('i.bi');
        !$(this).hasClass('collapsed') ? element.removeClass('bi-chevron-down').addClass('bi-chevron-up') : element.removeClass('bi-chevron-up').addClass('bi-chevron-down');
    });
});
