
fetch('https://api.github.com/users/JonUK/repos')
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
  });


// Notes: response.json() can only be called once.
// The body of ReadableStream is considered "consumable" meaning it can only be read once.
// If a ReadableStream needs to be consumed more than once, create a copy using the clone().


