const api = "https://jsonplaceholder.typicode.com/todos/1";
async function getData(){
  const  reponce = await fetch(api);
  const data = await reponce.json();
   console.log(data);
}
getData();

function printData() {
    const header = document.querySelector("#header");
    header.innerHTML = '<select><option>${}</option></select>';
      


     
}


