
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});


// CVS file

fetch('/Users/yousifal-hamadani/Desktop/cap 1 project/Homepage/data.csv')
  .then(response => response.text())
  .then(csvText => {
    const parsedData = Papa.parse(csvText, { header: true }).data;
    displayCsvData(parsedData);
  });

  function displayCsvData(data) {
    const container = document.getElementById('csv-container');
    const table = document.createElement('table');
  
    // Add header row
    const headerRow = document.createElement('tr');
    for (const key of Object.keys(data[0])) {
      const headerCell = document.createElement('th');
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
  
    // Add data rows
    for (const record of data) {
      const row = document.createElement('tr');
      for (const key of Object.keys(record)) {
        const cell = document.createElement('td');
        cell.textContent = record[key];
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    container.appendChild(table);
  }

  fetch('/Users/yousifal-hamadani/Desktop/cap 1 project/Homepage/data.csv')
  .then(response => response.text())
  .then(csvText => {
    const parsedData = Papa.parse(csvText, { header: true }).data;
    displayCsvData(parsedData);
  });

fetch('/Users/yousifal-hamadani/Desktop/cap 1 project/Homepage/data.csv')
    .then(response => response.text())
    .then(data => {
        const parsedData = Papa.parse(data, { header: true });
        const table = document.createElement('table');
        const headers = Object.keys(parsedData.data[0]);
        const headerRow = table.insertRow();
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        parsedData.data.forEach(rowData => {
            const row = table.insertRow();
            headers.forEach(header => {
                const cell = row.insertCell();
                cell.textContent = rowData[header];
            });
        });
        document.getElementById('csv-container').appendChild(table);
    });

    // pop up function 
    
    function showPopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "block";
      popup.style.width = "50%";
      popup.style.left = "25%";
      popup.style.top = "25%";
      var closeBtn = document.getElementById("closeBtn");
      closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
      });
    }