const dataBox = document.querySelector(".data-box");
const actualDate = document.getElementById("actual-date");

import { fetchData, getChartData, chartsData } from "./fetchs.js";

// agregando la informacion de las empresas en el UI
function boxElemts() {
  const dataBoxes = document.createElement("div");
  dataBoxes.classList.add("data-boxes");
  dataBox.appendChild(dataBoxes);

  fetchData().then(companies => {
  
    companies.forEach(e => {
      const data = document.createElement("div");
      data.classList.add("data");

      const dataTicker = document.createElement("p");
      dataTicker.classList.add("ticker");
      dataTicker.textContent = e.ticker

      const dataName = document.createElement("p");
      dataName.classList.add("name");
      dataName.textContent = e.name;

      const dataPrice = document.createElement("p");
      dataPrice.classList.add("price");
      dataPrice.textContent = e.price

      const dayChange = document.createElement("p");
      dayChange.classList.add("day-change")
      dayChange.textContent = e.day_change

      dataBoxes.appendChild(data);
      data.append(dataTicker, dataName, dataPrice, dayChange);
      
      if (e.day_change <= 0) {
        dayChange.classList.add("day-change-negatv");
      } else {
        dayChange.classList.add("day-change-positve");      
      } 

    });
  
  
  });

};

// Mostrando datos en el chart
function graficar() {

  getChartData().then(chartData => {
    const  closePrice = [];
    const dataDate = [];
    console.log(chartData);

    

    chartData.forEach(element => {
      closePrice.push(element.close);
      dataDate.push(element.date.slice(0, 10));

      console.log(element.date.slice(0, 10));
    });

    new Chart(chartsData, {
      type: 'line',
      data: {
        labels: dataDate.splice(0,5),
        datasets: [{
          type: "line",
          label: 'Close Price',
          data: closePrice,
          borderWidth: 1,
          borderColor: '#0D1F4B',
          backgroundColor: "#03CF83"
        }],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    });
    
  });
  
}

graficar()
boxElemts();

// aqui estoy mostrando en el UI el dia actual 
function currentDate() {
  const date = new Date();
  const weekDay = date.toLocaleDateString('en-US', { weekday: 'long' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear()

  actualDate.textContent = `${weekDay} ${day} ${month} ${year}`
}

currentDate()