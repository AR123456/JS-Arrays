const box = document.querySelector(".box");

box.addEventListener("click", function() {
  //the this is the box div
  console.log(this);
});

// verses using an arrow function
box.addEventListener("click", () => {
  //the this is the window
  //when you use an arrow function the value of this is not re bound inside the function it is inherrited from the parent scope.  the parent scope of this is the window
  // in this case we need the value to be the actual box that got clicked that is more important
  console.log(this);
});
