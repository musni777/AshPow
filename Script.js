const editor = document.getElementById("editor");

// Apply formatting
function format(command) {
  document.execCommand(command, false, null);
  autoSave(); // Save every time formatting changes
}

// Auto-save to localStorage
function autoSave() {
  localStorage.setItem("myDoc", editor.innerHTML);
}

// Save manually and download as HTML
function saveDocument() {
  const content = editor.innerHTML;
  const blob = new Blob([content], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "document.html";
  a.click();
}

// Load from localStorage
function loadDocument() {
  const saved = localStorage.getItem("myDoc");
  if (saved) {
    editor.innerHTML = saved;
  } else {
    alert("No saved content found.");
  }
}

// Clear editor and localStorage
function clearDocument() {
  if (confirm("Clear document? This will erase local storage.")) {
    editor.innerHTML = "";
    localStorage.removeItem("myDoc");
  }
}

// Load on page load if available
window.onload = () => {
  loadDocument();
};
