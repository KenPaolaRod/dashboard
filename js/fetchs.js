// export { fetchData, apiArray }

// const apiUrl = `https://api.stockdata.org/v1/data/quote?symbols=%2CTSLA%2CMSFT&api_token=4icw5TsyauRdPZCa7UKoxdUieoizFy26GbPDOb5g`;
// const apiUrl = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=gq1sFgR9jNPSXzEjCsYFonsVIiO0jtLh76MnPFGM`;
// const apiUrl = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=rRi0Uh73qccC4z1jLDScJWpEmIiKArhw8DCuTets`;
const apiUrl = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=ZK9EP6e3w2Pj9WdyCTTJYIz8EjuYPUJaEtHbVHl2`;


// import { boxElemts } from "./dataBox.js"

 async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(`Ocurrió un error ${error.message}`);
  }
}

  const containerData = document.querySelector('#containerchart')

 export const chartsData = document.getElementById('chartData')

  document.addEventListener('DOMContentLoaded', getChartData)

  async function getChartData(){
    // const apiUrl = await fetch (`https://api.stockdata.org/v1/data/eod?symbols=TSLA&api_token=ZkibrAspSTxzw4ysxWgmcEy4IssnIh3XXpsghA5i`);
    // const apiUrl = await fetch (` https://api.stockdata.org/v1/data/eod?symbols=AAPL&api_token=eNwylMhuthKzubM7xLiTc384o6VDVMz2dNTLlHr5`);
    const apiUrl = await fetch (`https://api.stockdata.org/v1/data/eod?symbols=AAPL&interval=week&api_token=Nq9FmwkD0tyfJBJM6uJMNZmKdsfbJZCLJOkVAsCK`);

    const respuesta = await apiUrl.json();
    const stockInfo = respuesta.data.splice(0,9);

    return stockInfo
  }




  export { fetchData, getChartData } 
