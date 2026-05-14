const init = () => {
  const inputForm = document.querySelector("form")

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = e.target.searchByID
    //console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)    
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("section#movieDetails p")

        if(data.title == undefined) {
          title.innerText = "Movie not found"
          summary.innerText = ""
        } else {
          title.innerText = data.title
          summary.innerText = data.summary
        }
      })

      e.target.reset()
  })
}

document.addEventListener('DOMContentLoaded', init);