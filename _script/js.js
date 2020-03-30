var App =
{
    Init: function () {
        App.x = $("#x");
        App.IncludeHTML(App.x, "_materias/matematica/matematica.html");
    },


    IncludeHTML(tag, file) {
        var xhttp;
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { tag.html(this.responseText);}
                    if (this.status == 404) { tagx.innerHTML = "UPS! Página no econtrada!"; }
                    file = null;
                    App.IncludeHTML(tag, file)
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

$(document).ready(function () {
    $(document).on({
    });

    App.Init();
});