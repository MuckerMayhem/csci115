var time = 2000;

var clickButton = (function () {
    let counter = 0;
    return function (id) {
        console.log("counter is " + counter);

        // run this chunk if we hit an active button.
        if (document.getElementById(id).innerHTML === "ACTIVE") {
            document.getElementById((id).innerHTML = "Button");

            // increase the counter by whatever the dynamic value is set too.
            counter = counter + parseInt(document.getElementById("pph").value);
            console.log("hit active button.");
            document.getElementById("points").innerHTML = "" + counter;

            console.log("time is: " + time);
            // increase speed of changing buttons once we hit 5 or more points.
            if (document.getElementById("points").innerHTML >= 5) {
                clearInterval(t);
                //decrease time it takes for a button to switch without being hit every time we hit an active button.
                time = time - document.getElementById("points").innerHTML * document.getElementById("speed").value;
                t = setInterval(setNextButton, time);
            }
            // reset the interval after each successful hit
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
        // if lastButton = -1, then this is the first time a button was hit in this instance.
        // we keep track of this so we can make sure the same button isn't chosen twice in a row.
        if (lastButton !== -1) document.getElementById("but" + button).innerHTML = "Button";

        // choose a number between 0 and 15.
        button = Math.floor(Math.random() * 16);
        if (lastButton === button) button++;

        if (button > 15) button = 0;

        lastButton = button;
        console.log(button);
        //set the chosen button as the active button.
        document.getElementById("but" + button).innerHTML = "ACTIVE";
    }

})();

/* Alternate active buttons on an interval, 1000 = 1 sec */
var t = setInterval(setNextButton, time);