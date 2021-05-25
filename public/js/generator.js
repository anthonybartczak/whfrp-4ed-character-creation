
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

function getBonus(attribute) {
    return Math.trunc(attribute/10)
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
    rollAttributes()
}

function onRaceChoose() {
    characterSheet.race = document.getElementById("race-choice-form").value
    document.getElementById("race-card").innerHTML = "Wybrana rasa <br><hr>" + characterSheet.race
    document.getElementById("race-accept-pd").remove()
    document.getElementById("race-choice-form").remove()
    document.getElementById("race-accept-nopd").remove()
    rollAttributes()
}

function rollAttributes() {
    if (characterSheet.race == "Człowiek") {

        // Attributes
        characterSheet.attributes.WW = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.US = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.S = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Wt = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.I = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zw = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zr = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.SW = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Ogd = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        // Other
        characterSheet.attributes.Żyw = getBonus(characterSheet.attributes.S) + 2*getBonus(characterSheet.attributes.Wt) + getBonus(characterSheet.attributes.SW)
        characterSheet.attributes.PP = 2
        characterSheet.attributes.PB = 1
        characterSheet.attributes.PS = 2
        characterSheet.attributes.PDet = 1
        characterSheet.attributes.DP = 3
        characterSheet.attributes.Szyb = 4

    } else if (characterSheet.race == "Krasnolud") {
        // Attributes
        characterSheet.attributes.WW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.US = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.S = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Wt = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.I = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zw = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.SW = 40 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Ogd = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        // Other
        characterSheet.attributes.Żyw = getBonus(characterSheet.attributes.S) + 2*getBonus(characterSheet.attributes.Wt) + getBonus(characterSheet.attributes.SW)
        characterSheet.attributes.PP = 2
        characterSheet.attributes.PB = 1
        characterSheet.attributes.PS = 2
        characterSheet.attributes.PDet = 1
        characterSheet.attributes.DP = 3
        characterSheet.attributes.Szyb = 4

    }   else if (characterSheet.race == "Niziołek") {
        // Attributes
        characterSheet.attributes.WW = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.US = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.S = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Wt = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.I = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zw = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.SW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Ogd = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        // Other
        characterSheet.attributes.Żyw = getBonus(characterSheet.attributes.S) + 2*getBonus(characterSheet.attributes.Wt) + getBonus(characterSheet.attributes.SW)
        characterSheet.attributes.PP = 2
        characterSheet.attributes.PB = 1
        characterSheet.attributes.PS = 2
        characterSheet.attributes.PDet = 1
        characterSheet.attributes.DP = 3
        characterSheet.attributes.Szyb = 4

    } else if (characterSheet.race == "Gnom") {
        // Attributes
        characterSheet.attributes.WW = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.US = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.S = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Wt = 15 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.I = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zw = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.SW = 40 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Ogd = 15 + getRandomInt(1, 10) + getRandomInt(1, 10)
        // Other
        characterSheet.attributes.Żyw = getBonus(characterSheet.attributes.S) + 2*getBonus(characterSheet.attributes.Wt) + getBonus(characterSheet.attributes.SW)
        characterSheet.attributes.PP = 2
        characterSheet.attributes.PB = 1
        characterSheet.attributes.PS = 2
        characterSheet.attributes.PDet = 1
        characterSheet.attributes.DP = 3
        characterSheet.attributes.Szyb = 4

    } else if (characterSheet.race == "Wysoki Elf" || characterSheet.race == "Leśny Elf") {
        // Attributes
        characterSheet.attributes.WW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.US = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.S = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Wt = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.I = 40 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zw = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Int = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.SW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        characterSheet.attributes.Ogd = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        // Other
        characterSheet.attributes.Żyw = getBonus(characterSheet.attributes.S) + 2*getBonus(characterSheet.attributes.Wt) + getBonus(characterSheet.attributes.SW)
        characterSheet.attributes.PP = 2
        characterSheet.attributes.PB = 1
        characterSheet.attributes.PS = 2
        characterSheet.attributes.PDet = 1
        characterSheet.attributes.DP = 3
        characterSheet.attributes.Szyb = 4
        
    }
}