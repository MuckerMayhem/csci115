var time = 2000;

var x = (function () {
    let counter = 0;
    return function (id) {
        console.log("counter is " + counter);

        if (document.getElementById(id).innerHTML === "ACTIVE") {
            counter++;
            console.log("hit active button.");

            document.getElementById("points").innerHTML = "" + counter;
            y();
            clearInterval(t);
            t = setInterval(y, time);
        }
        return counter;
    }
})();

var y = (function () {
    var button = 0;
    var lastButton = -1;
    return function () {
        if (lastButton !== -1) document.getElementById("but" + button).innerHTML = "Button";

        button = Math.floor(Math.random() * 16);
        if (lastButton === button) button++;
        lastButton = button;
        console.log(button);
        document.getElementById("but" + button).innerHTML = "ACTIVE";
    }

})();

/* Alternate active buttons on an interval, 1000 = 1 sec */
var t = setInterval(y, time);