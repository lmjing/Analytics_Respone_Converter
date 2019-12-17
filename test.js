"use strict";

// let request = new Request("./test.json");
// fetch(request)
//     .then(resp => resp.json())
//     .then(json => {
//         let data = json.data;
//         let prettyEl = document.querySelector('#pretty');
//         prettyEl.innerHTML = data;
//         return data;
//     })
//     .then(data => {
//         let totalEl = document.querySelector('#total');
//         let total = data.replace(/"/gi, "'");
//         totalEl.innerText = total.substring(1, total.length-1);
//
//         return JSON.parse(data)
//     })
//     .then(data => {
//         let {series, xAxis, yAxis} = data;
//         // TODO : 상위 keys들만큼 넣어 만들기
//         let seriesEl = document.querySelector('#series');
//         let xAxisEl = document.querySelector('#xAxis');
//         let yAxisEl = document.querySelector('#yAxis');
//         seriesEl.innerText = JSON.stringify(series);
//         xAxisEl.innerText = JSON.stringify(xAxis);
//         yAxisEl.innerText = JSON.stringify(yAxis);
//     });

let input = document.querySelector("[type=text]");
let button = document.querySelector("[type=button]");
let prettyEl = document.querySelector('#pretty');
let totalEl = document.querySelector('#high-chart');
let seriesEl = document.querySelector('#series');
let xAxisEl = document.querySelector('#xAxis');
let yAxisEl = document.querySelector('#yAxis');

function convertJson() {
    let resp = JSON.parse(input.value);

    let data = resp.data;
    prettyEl.innerHTML = data;

    let total = data.replace(/"/gi, "'");
    totalEl.innerText = total.substring(1, total.length - 1);

    let {series, xAxis, yAxis} = JSON.parse(data);
    seriesEl.innerText = JSON.stringify(series);
    xAxisEl.innerText = JSON.stringify(xAxis);
    yAxisEl.innerText = JSON.stringify(yAxis);
}


button.addEventListener('click', convertJson);
