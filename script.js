const api = "https://jsonplaceholder.typicode.com/todos";
async function getData(){
  const  reponce = await fetch(api);
  const data = await reponce.json();
  console.log(data);
}

getData();