let url = "https://swapi.dev/api/people/1";

let container = document.querySelector(".container");

async function getStarwardata() {
  try {
    let data = await fetch(url);  // Fetching the data
    let resultData = await data.json();  // Parsing the response as JSON
    showData(resultData);  // Passing the fetched data to showData function
  } catch (error) {
    console.error("Error fetching data:", error);  // Catch any error in fetching
  }
}
 
function showData(data) {
  // Clear the content of container before adding new data
  
  container.innerHTML = `
    <div class="name">Name: ${data.name}</div>
    <div class="gender">Gender: ${data.gender}</div>
    <div class="height">Height: ${data.height} cm</div>`;
}

// Call the function to get data
getStarwardata();