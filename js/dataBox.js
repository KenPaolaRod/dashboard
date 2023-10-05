const dataBox = document.querySelector(".data-box")
import { fetchData } from "./app.js";

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
      dayChange.classList.add("day-change-negatv")
      dayChange.textContent = e.day_change



      dataBoxes.appendChild(data);
      data.append(dataTicker, dataName, dataPrice, dayChange);

      if (dayChange <= 0) {
        dayChange.classList.add("day-change-negatv");
      } else {
        dayChange.classList.add("day-change-positve");
      }  

    });
  
  
  })

}

boxElemts()