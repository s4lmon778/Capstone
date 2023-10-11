let storage = []

function displayPost() {
//obtains msg from input box and stores it in storage var.
  let storage = []
  let userInput = document.querySelector("#insertPost");
  
//selects the existing container
  var threadContainer = document.querySelector("#threadContainer");
//makes a new div or post box
  var post_container = document.createElement('div')
  post_container.setAttribute('class', 'post')
//content inside div or post box
  var message_content = document.createElement('p')
  message_content.setAttribute('class', 'display')
//pushes values from user input into storage
//displays message from user input by putting into message_content
  storage.push(userInput.value)
  message_content.textContent = `${storage}`
//append everything into container 
  post_container.append(message_content)
  threadContainer.append(post_container)
  document.body.append(threadContainer)
  
//clears the input box
  userInput.value = '';
  
}


