async function getObjectById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    const obj = json.find(item => item.id === id);
    console.log(obj);
}

getObjectById(5);