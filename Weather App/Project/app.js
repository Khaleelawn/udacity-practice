//open weather details
const apiKey =`0531b880590d27b6694dba0edb090676`;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const projectData = async function(baseUrl, apiKey, cityName){
    
    const response = await fetch(baseUrl+cityName+'&appid='+apiKey);
    console.log(response);
    try{
        const data = response.json();
        //console.log("Data "+data);
        return data;
    } catch(error) {
        console.log("Error "+error);
    }
}
projectData(baseUrl,apiKey,'London');
