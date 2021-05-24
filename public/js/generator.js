function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function between(x, min, max) {
    return x >= min && x <= max;
}

function rollRace(roll) {
    if (between(roll, 1, 89)) {
        return "Człowiek"
    } else if (between(roll, 90, 93)) {
        return "Niziołek"
    } else if (between(roll, 94, 97)) {
        return "Krasnolud"
    } else if (roll == 98) {
        return "Gnom"
    } else if (roll == 99) {
        return "Wysoki Elf"
    } else if (roll == 100) {
        return "Leśny Elf"
    }
}

function addRaceElement() {
    var roll = getRandomInt(1, 100)
    var race = rollRace(roll)
    const div = document.createElement('div')
    //document.getElementsByClassName("btn-create")[0].disabled = true
    document.getElementById("button-container").remove()
    div.innerHTML = `
        <div class="row">
            <div class="col">
                <div class="card roll-card">Twój rzut K100 <br/><hr>${roll.toString()}</div>
            </div>
            <div class="col">
                <div class="card roll-card"><span>Wylosowana rasa <br/><hr>${race}</span></div>
            </div>
        </div>
        <div class="row" id="race-button-row">
            <button type="button" class="btn btn-success" id="race-accept-pd" onclick="onRaceAccept()">Zaakceptuj (+20 PD)</button>
            <button type="button" class="btn btn-warning" id="race-accept-nopd onclick="onRaceChoose()"">Wybierz własną</button>
        </div>`;

    document.getElementById('creation-form').appendChild(div)
}

function onRaceAccept() {

}

function onRaceChoose() {
    
}