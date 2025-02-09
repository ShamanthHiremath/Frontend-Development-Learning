// import { countryList } from "./countryList.js";

const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdown = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("button");

const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

const msg = document.querySelector(".msg");

document.addEventListener("DOMContentLoaded", () => {
    updateFlag(fromCurrency);
    updateFlag(toCurrency);
    updateExchangeRate();
});

for (let select of dropdown) {
    for (let code in countryList) {
        let option = document.createElement("option");
        option.value = code;
        option.text = code;
        if(select.name === "from") {
            if(code === "INR") {
                option.selected = "selected";
            }
        } else if(select.name === "to") {
            if(code === "USD") {
                option.selected = "selected";
            }
        }
        select.appendChild(option);
    }

    select.addEventListener("change", () => {
        updateFlag(select);
    });
}



const updateFlag = (select) => {
    // const img = select.nextElementSibling;
    let cuntCode = select.value;
    
    let newImg = `https://flagsapi.com/${countryList[cuntCode]}/shiny/64.png`;
    select.previousElementSibling.src = newImg;
}

btn.addEventListener("click", async (evt) => {
    // prevent the default form submission from refreshing the page in default browser behaviour
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async () => {
    let amountInput = document.getElementById("amount");
    console.log(amountInput);
    let amountVal = parseFloat(amountInput.value);
    console.log(amountVal);
    if(amountVal <= 0 || isNaN(amountVal)) {
        alert("Please enter a valid amount");
        return;
    }

    console.log(fromCurrency.value, toCurrency.value);

    const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`; 

    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
    console.log(rate);

    let result = amountVal * rate;
    console.log(result);
    msg.innerText = `${amountVal} ${fromCurrency.value} = ${result} ${toCurrency.value}`;
}