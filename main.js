var time = 2000;

var clickButton = (function () {
    let counter = 0;
    return function (id) {
        console.log("counter is " + counter);

        if (document.getElementById(id).innerHTML === "ACTIVE") {
            document.getElementById((id).innerHTML = "Button");
            counter++;
            console.log("hit active button.");
            console.log("time is: " + time);

            document.getElementById("points").innerHTML = "" + counter + document.getElementById("pph").value - 1;
            if (document.getElementById("points").innerHTML >= 5) {
                clearInterval(t);

                time = time - document.getElementById("points").innerHTML * document.getElementById("speed").value;
                t = setInterval(setNextButton, time);
            }
            setNextButton();
            clearInterval(t);
            t = setInterval(setNextButton, time);
        }
        return counter;
    }
})();

var setNextButton = (function () {
    var button = 0;
    var lastButton = -1;
    return function () {
        if (lastButton !== -1) document.getElementById("but" + button).innerHTML = "Button";

        button = Math.floor(Math.random() * 16);
        if (lastButton === button) button++;

        if (button > 15) button = 0;

        lastButton = button;
        console.log(button);
        document.getElementById("but" + button).innerHTML = "ACTIVE";
    }

})();

/* Alternate active buttons on an interval, 1000 = 1 sec */
var t = setInterval(setNextButton, time);