document.getElementById("addBookForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    genre: document.getElementById("genre").value,
    status: document.getElementById("status").value,
    user_rating: document.getElementById("user_rating").value,
  };
  await fetch("/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  window.location.href = "/";
});
