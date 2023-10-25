window.onload = function() {

  // Your web app's Firebase configuration

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyANz66h9AjAVX2rPT0kAkyVS1v6nmiT4Zg",
      authDomain: "chat778-89638.firebaseapp.com",
      projectId: "chat778-89638",
      storageBucket: "chat778-89638.appspot.com",
      messagingSenderId: "166295732088",
      appId: "1:166295732088:web:b7a896f8d722712b5d128d",
      measurementId: "G-HX8SDM3EEG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // This is very IMPORTANT!! We're going to use "db" a lot.
    var db = firebase.database()
    // We're going to use oBjEcT OrIeNtEd PrOgRaMmInG. Lol
    class CHAT{
      // Home() is used to create the home page
      home(){
        // First clear the body before adding in
        // a title and the join form
        document.body.innerHTML = ''
        this.create_title()
        this.create_join_form()
      }
      // chat() is used to create the chat page
      chat(){
        this.create_title()
        this.create_chat()
      }
      // create_title() is used to create the title
//       create_title(){
        
//             // Code for the navbar
//         var navbar = document.createElement('nav');
//         navbar.setAttribute('class', 'navbar');

//         var homeLink = document.createElement('a');
//         homeLink.href = 'index.html';
//         homeLink.textContent = 'Home';

//         var chatLink = document.createElement('a');
//         chatLink.href = 'chat.html';
//         chatLink.textContent = 'Chat';

//         var aboutLink = document.createElement('a');
//         aboutLink.href = 'abt.html';
//         aboutLink.textContent = 'AboutUs';

//         navbar.append(homeLink, chatLink, aboutLink);

        
//                 // This is the title creator. 🎉
//         var title_container = document.createElement('div')
//         title_container.setAttribute('id', 'title_container')
//         var title_inner_container = document.createElement('div')
//         title_inner_container.setAttribute('id', 'title_inner_container')
  
//         var title = document.createElement('h1')
//         title.setAttribute('id', 'title')
//         title.textContent = 'Testing'
  
//         title_inner_container.append(title)
//         title_container.append(title_inner_container)
//         document.body.append(title_container)
//       }
      create_title() {
        // Create the header element
const headerElement = document.createElement("header");
headerElement.className = "header";

// Create the anchor element for the logo
const logoAnchorElement = document.createElement("a");
logoAnchorElement.href = "index.html";
logoAnchorElement.className = "logo";

// Create the image element for the logo
const logoImgElement = document.createElement("img");
logoImgElement.src = "https://cdn.glitch.global/ab2b39ee-452e-47f4-a75d-fdc6454efb21/bread%20(1).png?v=1689880019376";
logoImgElement.style.width = "6vh";

// Append the image element to the anchor element
logoAnchorElement.appendChild(logoImgElement);

// Append the logo anchor element to the header element
headerElement.appendChild(logoAnchorElement);

// Create the navigation element
const navElement = document.createElement("nav");
navElement.className = "navbar";

// Create anchor elements for the navigation items
const homeAnchorElement = document.createElement("a");
homeAnchorElement.href = "index.html";
homeAnchorElement.textContent = "Home";

const chatAnchorElement = document.createElement("a");
chatAnchorElement.href = "chat.html";
chatAnchorElement.textContent = "Chat";

const aboutUsAnchorElement = document.createElement("a");
aboutUsAnchorElement.href = "abt.html";
aboutUsAnchorElement.textContent = "About Us";

// Append the anchor elements to the navigation element
navElement.appendChild(homeAnchorElement);
navElement.appendChild(chatAnchorElement);
navElement.appendChild(aboutUsAnchorElement);

// Append the navigation element to the header element
headerElement.appendChild(navElement);

// Append the header element to the document body or any desired container
document.body.appendChild(headerElement);
//         // Code for the header container
//         var header = document.createElement('header');
//         header.setAttribute('class', 'header');

//         // Logo
//         var logoLink = document.createElement('a');
//         logoLink.href = 'index.html';
//         logoLink.textContent= 'Logo';
//         logoLink.setAttribute('class', 'logo');
        
        
//         // Code for the navbar
//         var navbar = document.createElement('nav');
//         navbar.setAttribute('class', 'navbar');

//         var homeLink = document.createElement('a');
//         homeLink.href = 'index.html';
//         homeLink.textContent = 'Home';

//         var chatLink = document.createElement('a');
//         chatLink.href = 'chat.html';
//         chatLink.textContent = 'Chat';

//         var aboutLink = document.createElement('a');
//         aboutLink.href = 'abt.html';
//         aboutLink.textContent = 'AboutUs';

//         navbar.append(homeLink, chatLink, aboutLink);

//         header.append(logoLink, navbar);

//         document.body.append(header);
        
        
        var title_container = document.createElement('div')
        title_container.setAttribute('id', 'title_container')
        var title_inner_container = document.createElement('div')
        title_inner_container.setAttribute('id', 'title_inner_container')
  
        var title = document.createElement('h1')
        title.setAttribute('id', 'title')
        title.textContent = 'Start Chatting Now...'
  
        title_inner_container.append(title)
        title_container.append(title_inner_container)
        document.body.append(title_container)
      }

      // ... (Other methods and properties of the class)


      // create_join_form() creates the join form
      create_join_form(){
        // YOU MUST HAVE (PARENT = THIS). 
        var parent = this;
  
        var join_container = document.createElement('div')
        join_container.setAttribute('id', 'join_container')
        var join_inner_container = document.createElement('div')
        join_inner_container.setAttribute('id', 'join_inner_container')
  
        var join_button_container = document.createElement('div')
        join_button_container.setAttribute('id', 'join_button_container')
  
        var join_button = document.createElement('button')
        join_button.setAttribute('id', 'join_button')
        join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>'
  
        var join_input_container = document.createElement('div')
        join_input_container.setAttribute('id', 'join_input_container')
  
        var join_input = document.createElement('input')
        join_input.setAttribute('id', 'join_input')
        join_input.setAttribute('maxlength', 15)
        join_input.placeholder = 'Enter a nickname'
        // Every time we type into the join_input
        join_input.onkeyup  = function(){
          // If the input we have is longer that 0 letters
          if(join_input.value.length > 0){
            // Make the button light up
            join_button.classList.add('enabled')
            // Allow the user to click the button
            join_button.onclick = function(){
              // Save the name to local storage. Passing in
              // the join_input.value
              parent.save_name(join_input.value)
              // Remove the join_container. So the site doesn't look weird.
              join_container.remove()
              // parent = this. But it is not the join_button
              // It is (MEME_CHAT = this).
              parent.create_chat()
            }
          }else{
            // If the join_input is empty then turn off the
            // join button
            join_button.classList.remove('enabled')
          }
        }
  
        // Append everything to the body
        join_button_container.append(join_button)
        join_input_container.append(join_input)
        join_inner_container.append(join_input_container, join_button_container)
        join_container.append(join_inner_container)
        document.body.append(join_container)
      }
      // create_load() creates a loading circle that is used in the chat container
      create_load(container_id){
        // YOU ALSO MUST HAVE (PARENT = THIS). BUT IT'S WHATEVER THO.
        var parent = this;
  
        // This is a loading function. Something cool to have.
        var container = document.getElementById(container_id)
        container.innerHTML = ''
  
        var loader_container = document.createElement('div')
        loader_container.setAttribute('class', 'loader_container')
  
        var loader = document.createElement('div')
        loader.setAttribute('class', 'loader')
  
        loader_container.append(loader)
        container.append(loader_container)
  
      }
      // create_chat() creates the chat container and stuff
      create_chat(){
        var parent = this;
        var title_container = document.getElementById('title_container')
        var title = document.getElementById('title')
        title_container.classList.add('chat_title_container')
        // Make the title smaller by making it 'chat_title'
        title.classList.add('chat_title')
  
        var chat_container = document.createElement('div')
        chat_container.setAttribute('id', 'chat_container')
  
        var chat_inner_container = document.createElement('div')
        chat_inner_container.setAttribute('id', 'chat_inner_container')
  
        var chat_content_container = document.createElement('div')
        chat_content_container.setAttribute('id', 'chat_content_container')
  
        var chat_input_container = document.createElement('div')
        chat_input_container.setAttribute('id', 'chat_input_container')
  
        var chat_input_send = document.createElement('button')
        chat_input_send.setAttribute('id', 'chat_input_send')
        chat_input_send.setAttribute('disabled', true)
        chat_input_send.innerHTML = `^` //`<i class="far fa-paper-plane"></i>`

  
        var chat_input = document.createElement('input')
        chat_input.setAttribute('id', 'chat_input')
        // Only a max message length of 1000
        chat_input.setAttribute('maxlength', 1000)
        // Get the name of the user
        chat_input.placeholder = `${parent.get_name()}. Say something...`
        chat_input.onkeyup  = function(){
          if(chat_input.value.length > 0){
            chat_input_send.removeAttribute('disabled')
            chat_input_send.classList.add('enabled')
            chat_input_send.onclick = function(){
              chat_input_send.setAttribute('disabled', true)
              chat_input_send.classList.remove('enabled')
              if(chat_input.value.length <= 0){
                return
              }
              // Enable the loading circle in the 'chat_content_container'
              parent.create_load('chat_content_container')
              // Send the message. Pass in the chat_input.value
              parent.send_message(chat_input.value)
              // Clear the chat input box
              chat_input.value = ''
              // Focus on the input just after
              chat_input.focus()
            }
          }else{
            chat_input_send.classList.remove('enabled')
          }
        }
  
        var chat_logout_container = document.createElement('div')
        chat_logout_container.setAttribute('id', 'chat_logout_container')
  
        var chat_logout = document.createElement('button')
        chat_logout.setAttribute('id', 'chat_logout')
        chat_logout.textContent = `${parent.get_name()} • logout`
        // "Logout" is really just deleting the name from the localStorage
        chat_logout.onclick = function(){
          localStorage.clear()
          // Go back to home page
          parent.home()
        }
  
        chat_logout_container.append(chat_logout)
        chat_input_container.append(chat_input, chat_input_send)
        chat_inner_container.append(chat_content_container, chat_input_container, chat_logout_container)
        chat_container.append(chat_inner_container)
        document.body.append(chat_container)
        // After creating the chat. We immediatly create a loading circle in the 'chat_content_container'
        parent.create_load('chat_content_container')
        // then we "refresh" and get the chat data from Firebase
        parent.refresh_chat()
      }
      // Save name. It literally saves the name to localStorage
      save_name(name){
        // Save name to localStorage
        localStorage.setItem('name', name)
      }
      // Sends message/saves the message to firebase database
      send_message(message){
        var parent = this
        // if the local storage name is null and there is no message
        // then return/don't send the message. The user is somehow hacking
        // to send messages. Or they just deleted the
        // localstorage themselves. But hacking sounds cooler!!
        if(parent.get_name() == null && message == null){
          return
        }
  
        // Get the firebase database value
        db.ref('chats/').once('value', function(message_object) {
          // This index is mortant. It will help organize the chat in order
          var index = parseFloat(message_object.numChildren()) + 1
          db.ref('chats/' + `message_${index}`).set({
            name: parent.get_name(),
            message: message,
            index: index
          })
          .then(function(){
            // After we send the chat refresh to get the new messages
            parent.refresh_chat()
          })
        })
      }
      // Get name. Gets the username from localStorage
      get_name(){
        // Get the name from localstorage
        if(localStorage.getItem('name') != null){
          return localStorage.getItem('name')
        }else{
          this.home()
          return null
        }
      }
      // Refresh chat gets the message/chat data from firebase
      refresh_chat(){
        var chat_content_container = document.getElementById('chat_content_container')
  
        // Get the chats from firebase
        db.ref('chats/').on('value', function(messages_object) {
          // When we get the data clear chat_content_container
          chat_content_container.innerHTML = ''
          // if there are no messages in the chat. Retrun . Don't load anything
          if(messages_object.numChildren() == 0){
            return
          }
  
          // convert the message object values to an array.
          var messages = Object.values(messages_object.val());
          var guide = [] // this will be our guide to organizing the messages
          var unordered = [] // unordered messages
          var ordered = [] // we're going to order these messages
  
          for (var i, i = 0; i < messages.length; i++) {
            // The guide is simply an array from 0 to the messages.length
            guide.push(i+1)
            // unordered is the [message, index_of_the_message]
            unordered.push([messages[i], messages[i].index]);
          }
  
          // Sort the unordered messages by the guide
          guide.forEach(function(key) {
            var found = false
            unordered = unordered.filter(function(item) {
              if(!found && item[1] == key) {
                // Now push the ordered messages to ordered array
                ordered.push(item[0])
                found = true
                return false
              }else{
                return true
              }
            })
          })
  
          // Now we're done. Simply display the ordered messages
          ordered.forEach(function(data) {
            var name = data.name
            var message = data.message
  
            var message_container = document.createElement('div')
            message_container.setAttribute('class', 'message_container')
  
            var message_inner_container = document.createElement('div')
            message_inner_container.setAttribute('class', 'message_inner_container')
  
            var message_user_container = document.createElement('div')
            message_user_container.setAttribute('class', 'message_user_container')
  
            var message_user = document.createElement('p')
            message_user.setAttribute('class', 'message_user')
            message_user.textContent = `${name}`
  
            var message_content_container = document.createElement('div')
            message_content_container.setAttribute('class', 'message_content_container')
  
            var message_content = document.createElement('p')
            message_content.setAttribute('class', 'message_content')
            message_content.textContent = `${message}`
  
            message_user_container.append(message_user)
            message_content_container.append(message_content)
            message_inner_container.append(message_user_container, message_content_container)
            message_container.append(message_inner_container)
  
            chat_content_container.append(message_container)
          });
          // Go to the recent message at the bottom of the container
          chat_content_container.scrollTop = chat_content_container.scrollHeight;
      })
  
      }
    }
    var app = new CHAT()
    // If we have a name stored in localStorage.
    // Then use that name. Otherwise , if not.
    // Go to home.
    if(app.get_name() != null){
      app.chat()
    }
  }