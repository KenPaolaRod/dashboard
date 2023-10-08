const apiUrl = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=rRi0Uh73qccC4z1jLDScJWpEmIiKArhw8DCuTets`;

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

  // const containerData = document.querySelector('#containerchart')
  export const chartsData = document.getElementById('chartData');

  async function getChartData(symbol){
    const apiUrl = await fetch (`https://api.stockdata.org/v1/data/eod?symbols=${symbol}&api_token=ZkibrAspSTxzw4ysxWgmcEy4IssnIh3XXpsghA5i`);
    const respuesta = await apiUrl.json();
    const stockInfo = respuesta.data.splice(0,9);

    return stockInfo
  };

  export { fetchData, getChartData } 

