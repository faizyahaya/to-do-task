const conversations = [
  {
    name: "Aisha Bello",
    lastSeen: "Last seen 1h ago",
    messages: [
      { from: "provider", text: "Hello! How can I help you?" },
      { from: "user", text: "Can you come fix a leaking tap?" }
    ]
  },
  {
    name: "Kolade Artworks",
    lastSeen: "Online",
    messages: [
      { from: "user", text: "Do you offer wall art services?" },
      { from: "provider", text: "Yes! We paint murals too." }
    ]
  }
];

const conversationList = document.getElementById("conversations");
const chatMessages = document.getElementById("chat-messages");
const chatWith = document.getElementById("chat-with");
const lastSeen = document.getElementById("last-seen");
const form = document.getElementById("message-form");
const input = document.getElementById("message-input");

let currentIndex = null;

// Populate sidebar
conversations.forEach((conv, index) => {
  const li = document.createElement("li");
  li.textContent = conv.name;
  li.onclick = () => loadConversation(index);
  conversationList.appendChild(li);
});

function loadConversation(index) {
  currentIndex = index;
  const conv = conversations[index];
  chatWith.textContent = conv.name;
  lastSeen.textContent = conv.lastSeen;
  chatMessages.innerHTML = "";

  conv.messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message " + (msg.from === "user" ? "from-user" : "from-provider");
    div.innerHTML = `<div class="bubble">${msg.text}</div>`;
    chatMessages.appendChild(div);
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  if (currentIndex === null) return;
  const text = input.value.trim();
  if (!text) return;

  conversations[currentIndex].messages.push({ from: "user", text });
  loadConversation(currentIndex);
  input.value = "";
});
