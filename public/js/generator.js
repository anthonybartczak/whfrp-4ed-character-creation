
var pd = 0

var characterSheet = {
    race: "",

    attributes : {
        WW: 0,
        US: 0,
        S: 0,
        Wt: 0,
        I: 0,
        Zw: 0,
        Zr: 0,
        Int: 0,
        SW: 0,
        Ogd: 0,
        Żyw: 0,
        PP: 0,
        PB: 0,
        PS: 0,
        PDet: 0,
        DP: 0,
        Szyb: 0,
    }
}


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
    characterSheet.race = rollRace(roll)
    const div = document.createElement('div')
    document.getElementById("button-container").remove()
    div.innerHTML = `
        <div class="row" id="race-roll-row">
            <div class="col">
                <div class="card roll-card">Twój rzut K100 <br/><hr>${roll.toString()}</div>
            </div>
            <div class="col">
                <div class="card roll-card" id="race-card">Wylosowana rasa <br/><hr>${characterSheet.race}</div>
            </div>
        </div>
        <div class="row" id="race-button-row">
            <button type="button" class="btn btn-success" id="race-accept-pd" onclick="onRaceAccept()">Zaakceptuj (+20 PD)</button>
            <select class="form-select" id="race-choice-form">
                <option value="Człowiek">Człowiek</option>
                <option value="Niziołek">Niziołek</option>
                <option value="Krasnolud">Krasnolud</option>
                <option value="Gnom">Gnom</option>
                <option value="Wysoki Elf">Wysoki Elf</option>
                <option value="Leśny Elf">Leśny Elf</option>
            </select>
            <button type="button" class="btn btn-warning" id="race-accept-nopd" onclick="onRaceChoose()">Wybierz własną</button>
        </div>`;

    document.getElementById('creation-form').appendChild(div)
}

function onRaceAccept() {
    pd += 20
    characterSheet.race = document.getElementById("race-choice-form").value
    document.getElementById("pd-card").innerText = pd + " PD"
    document.getElementById("race-accept-pd").remove()
    document.getElementById("race-choice-form").remove()
    document.getElementById("race-accept-nopd").remove()
}

function onRaceChoose() {
    race = document.getElementById("race-choice-form").value
    document.getElementById("race-card").innerHTML = "Wybrana rasa <br><hr>" + characterSheet.race
    document.getElementById("race-accept-pd").remove()
    document.getElementById("race-choice-form").remove()
    document.getElementById("race-accept-nopd").remove()
}

function rollAttributes() {
    if (characterSheet.race = "Człowiek") {
        
    }
}