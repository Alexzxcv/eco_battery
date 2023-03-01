let year = $("#years"),
    hour = $('#hour'),
    allHour = 0,
    allYear = 0,
    allTime = 0,
    result_Ei = 0,
    percent_Ei = 0,
    percent_Lpg = 0,
    percent_Diesel = 0,
    result_1 = 0,
    result_2 = 0,
    costEl = 0,
    costLPG = 0,
    costDiesel = 0,
    resultLpg = 0,
    resultDiesel = 0,
    max_result = 0;

let zipCode = $(`#zpp`);

let costStateElectric = {
    newEnglang: 0.27,
    middleAtlantic: 0.19,
    eastNorthCentral: 0.16,
    westNorthCentral: 0.12,
    southAtlantic: 0.13,
    eastSouthCentral: 0.13,
    westSouthCentral: 0.13,
    mountain: 0.13,
    pacificContiguous: 0.18,
    pacificNoncontiguous: 0.34,
};

let costStateGas = {
    newEnglang: 27.04,
    middleAtlantic: 19.34,
    eastNorthCentral: 15.62,
    westNorthCentral: 11.62,
    southAtlantic: 13.46,
    eastSouthCentral: 12.73,
    westSouthCentral: 13.39,
    mountain: 12.62,
    pacificContiguous: 17.67,
    pacificNoncontiguous: 33.61,
};

let costStateDiesel = {
    newEnglang: 27.04,
    middleAtlantic: 19.34,
    eastNorthCentral: 15.62,
    westNorthCentral: 11.62,
    southAtlantic: 13.46,
    eastSouthCentral: 12.73,
    westSouthCentral: 13.39,
    mountain: 12.62,
    pacificContiguous: 17.67,
    pacificNoncontiguous: 33.61,
};

zipCodeFunc();

const input1 = document.querySelector('#years');
input1.addEventListener('input', () => {
    let inputValue = input1.value.replace(/[^0-9.,]/g, '');
    input1.value = inputValue;
    if (input1.value === "00") {
        input1.value = 0;
    }
    if (input1.value.length === 9) {
        input1.classList.add('success');
    } else {
        input1.classList.remove('success');
    }
});

const input2 = document.querySelector('#hour');
input2.addEventListener('input', () => {
    let inputValue = input2.value.replace(/[^0-9.,]/g, '');
    input2.value = inputValue;
    if (input2.value === "00") {
        input2.value = 0;
    }

    if (input2.value.length === 9) {
        input2.classList.add('success');
    } else {
        input2.classList.remove('success');
    }
});

function zipCodeFunc() {
    switch (zipCode.val()) {
        case "1":
            $(`#El_sumCost`).text(costStateElectric.newEnglang)
            $(`#lpg_sumCost`).text(costStateGas.newEnglang)
            $(`#Diesel_sumCost`).text(costStateDiesel.newEnglang)
            costEl = costStateElectric.newEnglang;
            costLPG = costStateGas.newEnglang;
            costDiesel = costStateDiesel.newEnglang;
            break;
        case "2":
            $(`#El_sumCost`).text(costStateElectric.middleAtlantic)
            $(`#lpg_sumCost`).text(costStateGas.middleAtlantic)
            $(`#Diesel_sumCost`).text(costStateDiesel.middleAtlantic)
            costEl = costStateElectric.middleAtlantic;
            costLPG = costStateGas.middleAtlantic;
            costDiesel = costStateDiesel.middleAtlantic;
            break;
        case "3":
            $(`#El_sumCost`).text(costStateElectric.eastNorthCentral)
            $(`#lpg_sumCost`).text(costStateGas.eastNorthCentral)
            $(`#Diesel_sumCost`).text(costStateDiesel.eastNorthCentral)
            costEl = costStateElectric.eastNorthCentral;
            costLPG = costStateGas.eastNorthCentral;
            costDiesel = costStateDiesel.eastNorthCentral;
            break;
        case "4":
            $(`#El_sumCost`).text(costStateElectric.westNorthCentral)
            $(`#lpg_sumCost`).text(costStateGas.westNorthCentral)
            $(`#Diesel_sumCost`).text(costStateDiesel.westNorthCentral)
            costEl = costStateElectric.westNorthCentral;
            costLPG = costStateGas.westNorthCentral;
            costDiesel = costStateDiesel.westNorthCentral;
            break;
        case "5":
            $(`#El_sumCost`).text(costStateElectric.southAtlantic)
            $(`#lpg_sumCost`).text(costStateGas.southAtlantic)
            $(`#Diesel_sumCost`).text(costStateDiesel.southAtlantic)
            costEl = costStateElectric.southAtlantic;
            costLPG = costStateGas.southAtlantic;
            costDiesel = costStateDiesel.southAtlantic;
            break;
        case "6":
            $(`#El_sumCost`).text(costStateElectric.eastSouthCentral)
            $(`#lpg_sumCost`).text(costStateGas.eastSouthCentral)
            $(`#Diesel_sumCost`).text(costStateDiesel.eastSouthCentral)
            costEl = costStateElectric.eastSouthCentral;
            costLPG = costStateGas.eastSouthCentral;
            costDiesel = costStateDiesel.eastSouthCentral;
            break;
        case "7":
            $(`#El_sumCost`).text(costStateElectric.westSouthCentral)
            $(`#lpg_sumCost`).text(costStateGas.westSouthCentral)
            $(`#Diesel_sumCost`).text(costStateDiesel.westSouthCentral)
            costEl = costStateElectric.westSouthCentral;
            costLPG = costStateGas.westSouthCentral;
            costDiesel = costStateDiesel.westSouthCentral;
            break;
        case "8":
            $(`#El_sumCost`).text(costStateElectric.mountain)
            $(`#lpg_sumCost`).text(costStateGas.mountain)
            $(`#Diesel_sumCost`).text(costStateDiesel.mountain)
            costEl = costStateElectric.mountain;
            costLPG = costStateGas.mountain;
            costDiesel = costStateDiesel.mountain;
            break;
        case "9":
            $(`#El_sumCost`).text(costStateElectric.pacificContiguous)
            $(`#lpg_sumCost`).text(costStateGas.pacificContiguous)
            $(`#Diesel_sumCost`).text(costStateDiesel.pacificContiguous)
            costEl = costStateElectric.pacificContiguous;
            costLPG = costStateGas.pacificContiguous;
            costDiesel = costStateDiesel.pacificContiguous;
            break;
        case "10":
            $(`#El_sumCost`).text(costStateElectric.pacificNoncontiguous)
            $(`#lpg_sumCost`).text(costStateGas.pacificNoncontiguous)
            $(`#Diesel_sumCost`).text(costStateDiesel.pacificNoncontiguous)
            costEl = costStateElectric.pacificNoncontiguous;
            costLPG = costStateGas.pacificNoncontiguous;
            costDiesel = costStateDiesel.pacificNoncontiguous;
            break;
        default:
            $(`#El_sumCost`).text(costStateElectric.newEnglang)
            $(`#lpg_sumCost`).text(costStateGas.newEnglang)
            $(`#Diesel_sumCost`).text(costStateDiesel.newEnglang)
            costEl = costStateElectric.newEnglang;
            costLPG = costStateGas.newEnglang;
            costDiesel = costStateDiesel.newEnglang;
    }
}

$('#zpp').change(function () {
    zipCodeFunc();
    allHourFunc();
});
result_1 = $("#years").keyup(function () {
    allHourFunc();
});

result_2 = $("#hour").keyup(function () {
    allHourFunc();
});

$('#years').change(function () {
    allHourFunc();
});

$('#hour').change(function () {
    allHourFunc();
});

$('#el_consamption').change(function () {
    allHourFunc();
});

$('#lpg_consamption').change(function () {
    allHourFunc();
});

$('#diesel_consamption').change(function () {
    allHourFunc();
});

let add = function () {

    allTime = allYear * allHour * 365;
    result_Ei = costEl * allTime * Number($('#el_consamption').val());
    resultLpg = costLPG * allTime * Number($('#lpg_consamption').val());
    resultDiesel = costDiesel * allTime * Number($('#diesel_consamption').val());
    max_result = Math.max(result_Ei, resultLpg, resultDiesel);
    if (result_Ei > 0 && resultLpg > 0 && resultDiesel > 0 && max_result === result_Ei) {
        percent_Diesel = (resultDiesel * 100) / result_Ei;
        percent_Lpg = (resultLpg * 100) / result_Ei;
        $("#el_progress").val(100);
        $("#lpg_progress").val(percent_Lpg);
        $("#diesel_progress").val(percent_Diesel);
        AllValue();
    }

    if (result_Ei > 0 && resultLpg > 0 && resultDiesel > 0 && max_result === resultLpg) {
        percent_Ei = (result_Ei * 100) / resultLpg;
        percent_Diesel = (resultDiesel * 100) / resultLpg;
        $("#el_progress").val(percent_Ei);
        $("#lpg_progress").val(100);
        $("#diesel_progress").val(percent_Diesel);
        AllValue();
    }

    if (result_Ei > 0 && resultLpg > 0 && resultDiesel > 0 && max_result === resultDiesel) {
        percent_Ei = (result_Ei * 100) / resultDiesel;
        percent_Lpg = (resultLpg * 100) / resultDiesel;
        $("#el_progress").val(percent_Ei);
        $("#lpg_progress").val(percent_Lpg);
        $("#diesel_progress").val(100);
        AllValue();
    }
}
let allHourFunc = function () {
    allHour = Number(result_2.val());
    allYear = Number(result_1.val());
    if (allYear > 0 && allHour > 0) {
        add()
    }
}

let AllValue = function () {
    $(`#sumCostEL`).text("$" + result_Ei)
    $(`#sumCostLpg`).text("$" + resultLpg)
    $(`#sumCostDiesel`).text("$" + resultDiesel)
}

