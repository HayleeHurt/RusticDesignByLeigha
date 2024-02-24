// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);
  
    var items = document.querySelectorAll(".collapsible");
    M.Collapsible.init(items);
  });
  
  const tasks = document.querySelector(".tasks");
  const loggedOutLinks = document.querySelectorAll(".logged-out");
  const loggedInLinks = document.querySelectorAll(".logged-in");
  
  const setupUI = (user) => {
    if (user) {
      //toggle UI elements
      loggedInLinks.forEach((item) => (item.style.display = "block"));
      loggedOutLinks.forEach((item) => (item.style.display = "none"));
    } else {
      //toggle UI elements
      loggedInLinks.forEach((item) => (item.style.display = "none"));
      loggedOutLinks.forEach((item) => (item.style.display = "block"));
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    //Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Tasks
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
  });