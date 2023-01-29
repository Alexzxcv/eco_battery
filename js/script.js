let year = $("#years"), hour = $('#hour'), allHour = 0, allYear = 0, allTime = 0, result_Ei = 0, percent_Ei = 0, percent_Lpg = 0, percent_Diesel = 0, result_1 = 0, result_2 = 0;
let costEl = 0, costLPG = 0, costDiesel = 0, result_Lpg = 0, result_Diesel = 0, max_result = 0;
let zipCode = $(`#zpp`);
let arrZip = [[40, 50, 100], [10, 20, 30], [45, 65, 75]];
let checkId = 0;
zipCodeFunc();

const input1 = document.querySelector('#years');
input1.addEventListener('input', () => {
    let inputValue = input1.value.replace(/[^0-9.,]/g, '');
    input1.value = inputValue;
    if (input1.value === "00"){
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
    if (input2.value === "00"){
        input2.value = 0;   
    }

    if (input2.value.length === 9) {
        input2.classList.add('success');
    } else {
        input2.classList.remove('success');
    }
});


function zipCodeFunc() {
    if (zipCode.val() == 1) {
        $(`#El_sumCost`).text(arrZip[0][0])
        $(`#lpg_sumCost`).text(arrZip[1][0])
        $(`#Diesel_sumCost`).text(arrZip[2][0])
        costEl = Number($(`#El_sumCost`).text());
        costLPG = Number($(`#lpg_sumCost`).text());
        costDiesel = Number($(`#Diesel_sumCost`).text());
    }

    if (zipCode.val() == 2) {
        $(`#El_sumCost`).text(arrZip[0][1])
        $(`#lpg_sumCost`).text(arrZip[1][1])
        $(`#Diesel_sumCost`).text(arrZip[2][1])
        costEl = Number($(`#El_sumCost`).text());
        costLPG = Number($(`#lpg_sumCost`).text());
        costDiesel = Number($(`#Diesel_sumCost`).text());
    }

    if (zipCode.val() == 3) {
        $(`#El_sumCost`).text(arrZip[0][2])
        $(`#lpg_sumCost`).text(arrZip[1][2])
        $(`#Diesel_sumCost`).text(arrZip[2][2])
        costEl = Number($(`#El_sumCost`).text());
        costLPG = Number($(`#lpg_sumCost`).text());
        costDiesel = Number($(`#Diesel_sumCost`).text());
    }
}

$('#zpp').change(function () {
    zipCodeFunc();
    allHourFunc();
});
result_1 = $("#years").keyup(function () {
    allHourFunc()
    check()
});

result_2 = $("#hour").keyup(function () {
    allHourFunc()
    check()
});

$('#years').change(function () {
    allHourFunc()
});

$('#hour').change(function () {
    allHourFunc()
});

$('#el_consamption').change(function () {
    allHourFunc()
});

$('#lpg_consamption').change(function () {
    allHourFunc()
});

$('#diesel_consamption').change(function () {
    allHourFunc()
});

let add = function () {

    allTime = allYear * allHour * 365;
    result_Ei = costEl * allTime * Number($('#el_consamption').val());
    result_Lpg = costLPG * allTime * Number($('#lpg_consamption').val());
    result_Diesel = costDiesel * allTime * Number($('#diesel_consamption').val());
    max_result = Math.max(result_Ei, result_Lpg, result_Diesel);
    if (result_Ei > 0 && result_Lpg > 0 && result_Diesel > 0 && max_result === result_Ei) {
        percent_Diesel = (result_Diesel * 100) / result_Ei;
        percent_Lpg = (result_Lpg * 100) / result_Ei;
        $("#el_progress").val(100);
        $("#lpg_progress").val(percent_Lpg);
        $("#diesel_progress").val(percent_Diesel);
        AllValue();
    }

    if (result_Ei > 0 && result_Lpg > 0 && result_Diesel > 0 && max_result === result_Lpg) {
        percent_Ei = (result_Ei * 100) / result_Lpg;
        percent_Diesel = (result_Diesel * 100) / result_Lpg;
        $("#el_progress").val(percent_Ei);
        $("#lpg_progress").val(100);
        $("#diesel_progress").val(percent_Diesel);
        AllValue();
    }

    if (result_Ei > 0 && result_Lpg > 0 && result_Diesel > 0 && max_result === result_Diesel) {
        percent_Ei = (result_Ei * 100) / result_Diesel;
        percent_Lpg = (result_Lpg * 100) / result_Diesel;
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
    $(`#sumCostLpg`).text("$" + result_Lpg)
    $(`#sumCostDiesel`).text("$" + result_Diesel)
}

