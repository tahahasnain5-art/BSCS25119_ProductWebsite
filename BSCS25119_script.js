alert("Welcome!");
 document.getElementById("demo").innerHTML = new Date().getFullYear();


 function getStock(id)
 {
    let check=document.getElementById(id).textContent;
    if (check.includes ('In Stock'))
    {
        alert ("Item is in stock");
    }
    else
    {
        alert ("Item is out of stock");
    }
 }
 function sendMessage() 
 {

  let input = document.getElementById("user-input").value.toLowerCase().trim();
  let chatLog = document.getElementById("chat-log");


  if (input === "")  return; 
  let userMsg = document.createElement("p");
  userMsg.innerHTML = "<strong>You:</strong> " + input;
  chatLog.appendChild(userMsg);
  let botResponse = getBotResponse(input);
  let botMsg = document.createElement("p");
  botMsg.innerHTML = "<strong>Bot:</strong> " + botResponse;
  chatLog.appendChild(botMsg);
  chatLog.scrollTop = chatLog.scrollHeight;
  document.getElementById("user-input").value = "";

}

function getBotResponse(input) 
{
  if (input.includes("hello") || input.includes("hi")) 
{
    return "Hello there! How can I help you today?";
} 
  else if (input.includes("price")) 
{
    return "Our prices range from 1800 to 2250. Check our products page for more information!";
}
else if (input.includes("bye") || input.includes("goodbye")) 
{
    return "Goodbye! Have a nice day!";
} 
else if (input.includes("help")) 
{
    return "You can ask me about products, pricing, or contact info.";
} else 
{
    return "I'm not sure about that. Try asking something else. I apologise for the inconvenience";
}
}  // <-- ✅ this was missing

function validateForm() 
{
 
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();


  if (name === "") 
{
    alert("Please enter your name.");
    return false;
}


  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") 
{
    alert("Please enter your email.");
    return false;
} 
else if (!emailPattern.test(email)) 
{
    alert("Please enter a valid email address.");
    return false;
}

  
  if (message === "") 
{
    alert("Please enter your message.");
    return false;
}


  alert("Form submitted successfully!");
  return true;
}
