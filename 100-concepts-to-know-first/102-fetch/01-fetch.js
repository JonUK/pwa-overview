
fetch('https://api.github.com/users/JonUK/repos')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
