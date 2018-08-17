
fetch('http://localhost:3000/todos')
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
  });


// Notes: response.json() can only be called once.
// The body of ReadableStream is considered "consumable" meaning it can only be read once.
// If a ReadableStream needs to be consumed more than once, create a copy using the clone().

const newTodo = { name: 'Eat a pot noodle' };

fetch('http://localhost:3000/todos', {
  method: 'POST',
  body: JSON.stringify(newTodo),
  headers: {
    'content-type': 'application/json'
  }
})
