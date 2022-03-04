console.log("this is the browser");
fetch("/cats")
.then(response => response.json())
.then(data => {
  console.log(data);
})