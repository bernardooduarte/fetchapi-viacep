let cep = "36021630"

fetch(`https://viacep.com.br/ws/${cep}/json/`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))