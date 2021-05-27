
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

var attribute = characterSheet.attributes

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
            <button type="button" class="btn btn-success" id="race-accept-pd" onclick="onRaceAccept()"><b>Zaakceptuj</b> (+20 PD)</button>
            <select class="form-select" id="race-choice-form">
                <option value="Człowiek">Człowiek</option>
                <option value="Niziołek">Niziołek</option>
                <option value="Krasnolud">Krasnolud</option>
                <option value="Gnom">Gnom</option>
                <option value="Wysoki Elf">Wysoki Elf</option>
                <option value="Leśny Elf">Leśny Elf</option>
            </select>
            <button type="button" class="btn btn-warning" id="race-accept-nopd" onclick="onRaceChoose()"><b>Wybierz własną</b> (+0 PD)</button>
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
    var attribute = characterSheet.attributes
    if (characterSheet.race == "Człowiek") {
        // Attributes
        attribute.WW = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.US = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.S = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Wt = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.I = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zw = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zr = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.SW = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Ogd = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        // Other
        attribute.Żyw = getBonus(attribute.S) + 2*getBonus(attribute.Wt) + getBonus(attribute.SW)
        attribute.PP = 2
        attribute.PB = 1
        attribute.PS = 2
        attribute.PDet = 1
        attribute.DP = 3
        attribute.Szyb = 4

    } else if (characterSheet.race == "Krasnolud") {
        // Attributes
        attribute.WW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.US = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.S = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Wt = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.I = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zw = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.SW = 40 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Ogd = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
       
        // Other
        attribute.Żyw = getBonus(attribute.S) + 2*getBonus(attribute.Wt) + getBonus(attribute.SW)
        attribute.PP = 0
        attribute.PB = 2
        attribute.PS = 0
        attribute.PDet = 2
        attribute.DP = 2
        attribute.Szyb = 3

    }   else if (characterSheet.race == "Niziołek") {
        // Attributes
        attribute.WW = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.US = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.S = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Wt = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.I = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zw = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.SW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Ogd = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)

        // Other
        attribute.Żyw = 2*getBonus(attribute.Wt) + getBonus(attribute.SW)
        attribute.PP = 0
        attribute.PB = 2
        attribute.PS = 0
        attribute.PDet = 2
        attribute.DP = 3
        attribute.Szyb = 3

    } else if (characterSheet.race == "Gnom") {
        // Attributes
        attribute.WW = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.US = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.S = 10 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Wt = 15 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.I = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zw = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Int = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.SW = 40 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Ogd = 15 + getRandomInt(1, 10) + getRandomInt(1, 10)
        
        // Other
        attribute.Żyw = 2*getBonus(attribute.Wt) + getBonus(attribute.SW)
        attribute.PP = 2
        attribute.PB = 0
        attribute.PS = 2
        attribute.PDet = 0
        attribute.DP = 2
        attribute.Szyb = 3

    } else if (characterSheet.race == "Wysoki Elf" || characterSheet.race == "Leśny Elf") {
        // Attributes
        attribute.WW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.US = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.S = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Wt = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.I = 40 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zw = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Zr = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Int = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.SW = 30 + getRandomInt(1, 10) + getRandomInt(1, 10)
        attribute.Ogd = 20 + getRandomInt(1, 10) + getRandomInt(1, 10)
        
        // Other
        attribute.Żyw = getBonus(attribute.S) + 2*getBonus(attribute.Wt) + getBonus(attribute.SW) 
        attribute.PP = 0
        attribute.PB = 0
        attribute.PS = 0
        attribute.PDet = 0
        attribute.DP = 2
        attribute.Szyb = 5

    }

    const div = document.createElement('div')
    div.innerHTML = `
    <table class="table table-bordered table-hover" id="att-primary-table">
        <thead>
            <tr>
            <th class="col-md-1">WW</th>
            <th class="col-md-1">US</th>
            <th class="col-md-1">S</th>
            <th class="col-md-1">Wt</th>
            <th class="col-md-1">I</th>
            <th class="col-md-1">Zw</th>
            <th class="col-md-1">Zr</th>
            <th class="col-md-1">Int</th>
            <th class="col-md-1">SW</th>
            <th class="col-md-1">Ogd</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td id="add-ww-value">${attribute.WW}</td>
            <td id="add-us-value">${attribute.US}</td>
            <td id="add-s-value">${attribute.S}</td>
            <td id="add-wt-value">${attribute.Wt}</td>
            <td id="add-i-value">${attribute.I}</td>
            <td id="add-zw-value">${attribute.Zw}</td>
            <td id="add-zr-value">${attribute.Zr}</td>
            <td id="add-int-value">${attribute.Int}</td>
            <td id="add-sw-value">${attribute.SW}</td>
            <td id="add-ogd-value">${attribute.Ogd}</td>
            </tr>
        </tbody>
    </table>
    <table class="table table-bordered table-hover" id="att-add-table">
        <thead>
            <tr>
            <th class="col-md-1">Pkt. Bohatera</th>
            <th class="col-md-1">Pkt. Determinacji</th>
            <th class="col-md-1">Pkt. Przeznaczenia</th>
            <th class="col-md-1">Pkt. Szczęścia</th>
            <th class="col-md-1">Pkt. Dodatkowe</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><input id="add-pb-value" type="number" min="0" max="9" value=${attribute.PB}></td>
            <td id="add-pdet-value">${attribute.PDet}</td>
            <td><input id="add-pp-value" type="number" min="0" max="99" value=${attribute.PP}></td>
            <td id="add-ps-value">${attribute.PS}</td>
            <td>${attribute.DP}</td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-success btn-att" id="att-accept-50" onclick="attOn50()"><b>Zaakceptuj cechy</b> (+50 PD)</button>
    <button type="button" class="btn btn-primary btn-att" id="att-accept-25" onclick="attOn25()"><b>Zmień kolejność cech</b> (+25 PD)</button>
    <button type="button" class="btn btn-warning btn-att" id="att-accept-0" onclick="attOn0()"><b>Rozdysponuj 100 pkt.</b> (+0 PD)</button>
    `
    document.getElementById('creation-form').appendChild(div)
}

function attOn50() {
    attribute.WW = parseInt(document.getElementById("add-ww-value").innerText)
    attribute.US = parseInt(document.getElementById("add-us-value").innerText)
    attribute.S = parseInt(document.getElementById("add-s-value").innerText)
    attribute.Wt = parseInt(document.getElementById("add-wt-value").innerText)
    attribute.I = parseInt(document.getElementById("add-i-value").innerText)
    attribute.Zw = parseInt(document.getElementById("add-zw-value").innerText)
    attribute.Zr = parseInt(document.getElementById("add-zr-value").innerText)
    attribute.Int = parseInt(document.getElementById("add-int-value").innerText)
    attribute.SW = parseInt(document.getElementById("add-sw-value").innerText)
    attribute.Ogd = parseInt(document.getElementById("add-ogd-value").innerText)

    attribute.PB = parseInt(document.getElementById("add-pb-value").value)
    attribute.PDet = attribute.PB
    attribute.PP = parseInt(document.getElementById("add-pp-value").value)
    attribute.PS = attribute.PP

    pd += 50
    document.getElementById("pd-card").innerText = pd + " PD"
    document.getElementById("att-accept-50").remove()
    document.getElementById("att-accept-25").remove()
    document.getElementById("att-accept-0").remove()
    document.getElementById("att-add-table").remove()
    const div = document.createElement('div')
    div.innerHTML = `
    <table class="table table-bordered table-hover" id="att-add-table">
        <thead>
            <tr>
            <th class="col-md-1">Pkt. Bohatera</th>
            <th class="col-md-1">Pkt. Determinacji</th>
            <th class="col-md-1">Pkt. Przeznaczenia</th>
            <th class="col-md-1">Pkt. Szczęścia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${attribute.PB}</td>
            <td>${attribute.PDet}</td>
            <td>${attribute.PP}</td>
            <td>${attribute.PS}</td>
            </tr>
        </tbody>
    </table>
    `
    document.getElementById('creation-form').appendChild(div)
}

function attOn25() {
    attribute.PB = parseInt(document.getElementById("add-pb-value").value)
    attribute.PDet = attribute.PB
    attribute.PP = parseInt(document.getElementById("add-pp-value").value)
    attribute.PS = attribute.PP

    pd += 25
    document.getElementById("att-add-table").remove()
    document.getElementById("att-accept-50").remove()
    document.getElementById("att-accept-25").remove()
    document.getElementById("att-accept-0").remove()
    document.getElementById("pd-card").innerText = pd + " PD"
    const div = document.createElement('div')
    div.innerHTML = `
    <table class="table table-bordered table-hover" id="att-add-table">
        <thead>
            <tr>
            <th class="col-md-1">Pkt. Bohatera</th>
            <th class="col-md-1">Pkt. Determinacji</th>
            <th class="col-md-1">Pkt. Przeznaczenia</th>
            <th class="col-md-1">Pkt. Szczęścia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${attribute.PB}</td>
            <td>${attribute.PDet}</td>
            <td>${attribute.PP}</td>
            <td>${attribute.PS}</td>
            </tr>
        </tbody>
    </table>
    <table class="table table-bordered table-hover" id="att-input-table">
        <thead>
            <tr>
            <th class="col-md-1">WW</th>
            <th class="col-md-1">US</th>
            <th class="col-md-1">S</th>
            <th class="col-md-1">Wt</th>
            <th class="col-md-1">I</th>
            <th class="col-md-1">Zw</th>
            <th class="col-md-1">Zr</th>
            <th class="col-md-1">Int</th>
            <th class="col-md-1">SW</th>
            <th class="col-md-1">Ogd</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><input id="add-ww-input-value" type="number" min="1" max="99" value=${attribute.WW}></td>
            <td><input id="add-us-input-value" type="number" min="1" max="99" value=${attribute.US}></td>
            <td><input id="add-s-input-value" type="number" min="1" max="99" value=${attribute.S}></td>
            <td><input id="add-wt-input-value" type="number" min="1" max="99" value=${attribute.Wt}></td>
            <td><input id="add-i-input-value" type="number" min="1" max="99" value=${attribute.I}></td>
            <td><input id="add-zw-input-value" type="number" min="1" max="99" value=${attribute.Zw}></td>
            <td><input id="add-zr-input-value" type="number" min="1" max="99" value=${attribute.Zr}></td>
            <td><input id="add-int-input-value" type="number" min="1" max="99" value=${attribute.Int}></td>
            <td><input id="add-sw-input-value" type="number" min="1" max="99" value=${attribute.SW}></td>
            <td><input id="add-ogd-input-value" type="number" min="1" max="99" value=${attribute.Ogd}></td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-success btn-att" id="att-accept-post-25" onclick="attOnPost25()"><b>Zaakceptuj cechy</b></button>
    `
    document.getElementById('creation-form').appendChild(div)
}

function attOnPost25() {
    attribute.WW = parseInt(document.getElementById("add-ww-input-value").value)
    attribute.US = parseInt(document.getElementById("add-us-input-value").value)
    attribute.S = parseInt(document.getElementById("add-s-input-value").value)
    attribute.Wt = parseInt(document.getElementById("add-wt-input-value").value)
    attribute.I = parseInt(document.getElementById("add-i-input-value").value)
    attribute.Zw = parseInt(document.getElementById("add-zw-input-value").value)
    attribute.Zr = parseInt(document.getElementById("add-zr-input-value").value)
    attribute.Int = parseInt(document.getElementById("add-int-input-value").value)
    attribute.SW = parseInt(document.getElementById("add-sw-input-value").value)
    attribute.Ogd = parseInt(document.getElementById("add-ogd-input-value").value)

    document.getElementById("att-primary-table").remove()
    document.getElementById("att-accept-post-25").remove()
    document.getElementById("att-input-table").remove()
    const div = document.createElement('div')
    div.innerHTML = `
    <table class="table table-bordered table-hover" id="att-primary-table">
        <thead>
            <tr>
            <th class="col-md-1">WW</th>
            <th class="col-md-1">US</th>
            <th class="col-md-1">S</th>
            <th class="col-md-1">Wt</th>
            <th class="col-md-1">I</th>
            <th class="col-md-1">Zw</th>
            <th class="col-md-1">Zr</th>
            <th class="col-md-1">Int</th>
            <th class="col-md-1">SW</th>
            <th class="col-md-1">Ogd</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${attribute.WW}</td>
            <td>${attribute.US}</td>
            <td>${attribute.S}</td>
            <td>${attribute.Wt}</td>
            <td>${attribute.I}</td>
            <td>${attribute.Zw}</td>
            <td>${attribute.Zr}</td>
            <td>${attribute.Int}</td>
            <td>${attribute.SW}</td>
            <td>${attribute.Ogd}</td>
            </tr>
        </tbody>
    </table>
    `
    document.getElementById('creation-form').appendChild(div)
}

function attOn0() {
    attribute.PB = parseInt(document.getElementById("add-pb-value").value)
    attribute.PDet = attribute.PB
    attribute.PP = parseInt(document.getElementById("add-pp-value").value)
    attribute.PS = attribute.PP

    document.getElementById("att-add-table").remove()
    document.getElementById("att-accept-50").remove()
    document.getElementById("att-accept-25").remove()
    document.getElementById("att-accept-0").remove()
    const div = document.createElement('div')
    div.innerHTML = `
    <table class="table table-bordered table-hover" id="att-add-table">
        <thead>
            <tr>
            <th class="col-md-1">Pkt. Bohatera</th>
            <th class="col-md-1">Pkt. Determinacji</th>
            <th class="col-md-1">Pkt. Przeznaczenia</th>
            <th class="col-md-1">Pkt. Szczęścia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${attribute.PB}</td>
            <td>${attribute.PDet}</td>
            <td>${attribute.PP}</td>
            <td>${attribute.PS}</td>
            </tr>
        </tbody>
    </table>
    <table class="table table-bordered table-hover" id="att-input-table">
        <thead>
            <tr>
            <th class="col-md-1">WW</th>
            <th class="col-md-1">US</th>
            <th class="col-md-1">S</th>
            <th class="col-md-1">Wt</th>
            <th class="col-md-1">I</th>
            <th class="col-md-1">Zw</th>
            <th class="col-md-1">Zr</th>
            <th class="col-md-1">Int</th>
            <th class="col-md-1">SW</th>
            <th class="col-md-1">Ogd</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><input id="add-ww-input-value" type="number" min="1" max="99" value=${attribute.WW}></td>
            <td><input id="add-us-input-value" type="number" min="1" max="99" value=${attribute.US}></td>
            <td><input id="add-s-input-value" type="number" min="1" max="99" value=${attribute.S}></td>
            <td><input id="add-wt-input-value" type="number" min="1" max="99" value=${attribute.Wt}></td>
            <td><input id="add-i-input-value" type="number" min="1" max="99" value=${attribute.I}></td>
            <td><input id="add-zw-input-value" type="number" min="1" max="99" value=${attribute.Zw}></td>
            <td><input id="add-zr-input-value" type="number" min="1" max="99" value=${attribute.Zr}></td>
            <td><input id="add-int-input-value" type="number" min="1" max="99" value=${attribute.Int}></td>
            <td><input id="add-sw-input-value" type="number" min="1" max="99" value=${attribute.SW}></td>
            <td><input id="add-ogd-input-value" type="number" min="1" max="99" value=${attribute.Ogd}></td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-success btn-att" id="att-accept-post-25" onclick="attOnPost25()"><b>Zaakceptuj cechy</b></button>
    `
    document.getElementById('creation-form').appendChild(div)
}