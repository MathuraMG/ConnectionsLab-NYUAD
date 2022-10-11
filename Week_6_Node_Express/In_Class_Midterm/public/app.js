window.addEventListener("load",() => {

  let input = document.getElementById("class-input");
  input.addEventListener("submit", (e) => {
    e.preventDefault();
    let courseName = document.getElementById("class-input-text").value;
    console.log(courseName);
    
    //after submitting text, get info about ONLy that course
    let url = "/midterms?userselectedcourse="+courseName;
    fetch(url) // accessing the API
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  })
})