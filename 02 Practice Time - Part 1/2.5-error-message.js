// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function purchase() {
  // Get the error message element
  const errorElement = document.getElementById("error");

  // Set the error message
  errorElement.textContent = "Something went wrong, please try again";
}
