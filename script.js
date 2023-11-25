fetch("https://viacep.com.br/ws/36021630/json/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))