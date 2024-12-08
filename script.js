document.addEventListener("DOMContentLoaded", function () {
    displayResults(blogs);
  
    document.getElementById("searchBox").addEventListener("input", filterResults);
  
    document.querySelectorAll("input[name='category']").forEach(radio => {
      radio.addEventListener("change", filterResults);
    });
  });
  
  const blogs = [
    { title: "JavaScript Basics", category: "tech" },
    { title: "Understanding React", category: "tech" },
    { title: "Life Hacks for Productivity", category: "life" },
    { title: "CSS for Beginners", category: "tech" },
    { title: "Balancing Work and Life", category: "life" }
  ];
  
  function displayResults(filteredBlogs) {
    const results = document.getElementById("results");
    results.innerHTML = "";
  
    if (filteredBlogs.length === 0) {
      results.innerHTML = "<li>No results found</li>";
      return;
    }
  
    filteredBlogs.forEach(blog => {
      const li = document.createElement("li");
      li.textContent = blog.title;
      results.appendChild(li);
    });
  }
  
  function filterResults() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const category = document.querySelector("input[name='category']:checked").value;
  
    const filteredBlogs = blogs.filter(blog => {
      const matchesQuery = blog.title.toLowerCase().includes(query);
      const matchesCategory = category === "all" || blog.category === category;
      return matchesQuery && matchesCategory;
    });
  
    displayResults(filteredBlogs);
  }
  