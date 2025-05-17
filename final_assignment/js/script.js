    function formatNumber(value) {
      if (value >= 1000) {
        return (value / 1000).toFixed(1) + "K+";
      }
      return value + "+";
    }

    function animateCounter(id, start, end, duration) {
      let range = end - start;
      let current = start;
      let increment = range / (duration / 10);
      let el = document.getElementById(id);

      let timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        el.innerText = formatNumber(Math.floor(current));
      }, 10);
    }

    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".accordion .btn").forEach(button => {
        button.addEventListener("click", function () {
          let icon = this.querySelector(".icon");
          let allIcons = document.querySelectorAll(".accordion .icon");

          // Reset all icons to ">"
          allIcons.forEach(i => i.textContent = ">");

          // Toggle current icon
          if (this.classList.contains("collapsed")) {
            icon.textContent = "-";
          } else {
            icon.textContent = ">";
          }
        });
      });
    });
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".accordion, .accordion-frequent").forEach(accordion => {
        accordion.querySelectorAll(".btn").forEach(button => {
          button.addEventListener("click", function () {
            let icon = this.querySelector(".icon-frequent"); // Selects both types of icons
            let allIcons = accordion.querySelectorAll(" .icon-frequent");
    
            // Reset all icons to ">"
            allIcons.forEach(i => i.textContent = ">");
    
            // Toggle current icon
            if (this.classList.contains("collapsed-frequent")) {
              icon.textContent = "-";
            } else {
              icon.textContent = ">";
            }
          });
        });
      });
    });
    

    // document.addEventListener("DOMContentLoaded", function () {
    //   document.querySelectorAll(".accordion-frequent .btn").forEach(button => {
    //     button.addEventListener("click", function () {
    //       let icon = this.querySelector(".icon");
    //       let allIcons = document.querySelectorAll(".accordion-frequent .icon-frequent");

    //       // Reset all icons to ">"
    //       allIcons.forEach(i => i.textContent = ">");

    //       // Toggle current icon
    //       if (this.classList.contains("collapsed-frequent")) {
    //         icon.textContent = "-";
    //       } else {
    //         icon.textContent = ">";
    //       }
    //     });
    //   });
    // });

    

    document.addEventListener("DOMContentLoaded", function () {
      const tabs = document.querySelectorAll(".content .tab-section-heading");
      const contentContainer = document.querySelector(".written");
      const imageContainer = document.querySelector(".tab-section-image");
  
      const individualContent = `
        <div class="main-heading">Individual Brokerage Account</div>
        <div class="center">We help companies become stronger, grow faster, and ensure they are well-positioned for sustainable long-term growth.</div>
        <div class="button">Learn More ></div>
      `;
      const individualImage = "url('../images/Invest Image.svg')";
  
      const institutionalContent = `
        <div class="main-heading">Institutional Brokerage Account</div>
        <div class="center">Our institutional solutions help firms scale their financial operations efficiently.</div>
        <div class="button">Learn More ></div>
      `;
       "url('../images/Invest Image.svg')";
  
      tabs.forEach(tab => {
        tab.addEventListener("click", function () {
          tabs.forEach(t => {
            t.classList.remove("active-tab");
          });
          this.classList.add("active-tab");
  
          if (this.classList.contains("individual")) {
            contentContainer.innerHTML = individualContent;
            imageContainer.style.backgroundImage = individualImage;
          } else {
            contentContainer.innerHTML = institutionalContent;
            imageContainer.style.backgroundImage = institutionalImage;
          }
        });
      });
    });

    function openNav() {
      document.getElementById("mySidenav").style.right = "0px";
    }
  
    function closeNav() {
      document.getElementById("mySidenav").style.right = "-300px";
    }