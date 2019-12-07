//create jar, name jar, place string in jar
//var firstName = "Marco";

//alert is method(built in function in JS)
//alert("Hello" + firstName);

//modern JS
//alert(`Hello ${firstName}`);

//console.log("Hello" + firstName);

console.log("Java Script Linked Up");




(function(){
	"use strict";

	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);

	/*window.onload = function() {
  var logo = document.getElementById('logo_middle')
  logo.style.marginTop = "25px";
	};

	// Timeline Reveal
	document.addEventListener('aos:in',  ({ detail }) => {
  	console.log('animated in', detail);
});*/

// window.onscroll = function() {myFunction()};

// // Get the header
// var mainHeader = document.getElementById("mainHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     mainHeader.classList.add("sticky");
//   } else {
//     mainHeader.classList.remove("sticky");
//   }
// }


const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

		function buildPopover(data, el) {
            popOver.querySelector(".Headings").textContent = ` ${data.Headings}`;
			popOver.querySelector(".Copy").textContent = ` ${data.Copy}`;
			popOver.querySelector(".Tools").textContent = `Tools: ${data.Tools}`;
            
            // popOver.querySelector("img").src = `images/${data.graph}`;
    
            // show the popover
            popOver.classList.add('show-popover');
			el.appendChild(popOver);


			/* get help with this section */
		}

		function closePopover(){
			popOver.classList.remove('show-popover');
		  }
	  


			function fetchData() {
				let targetEl = this,
				  url = `/svgdata/${this.dataset.target}`;
			  
				  fetch(url)
				  .then(res => res.json())
				  .then(data => {
					  console.log(data);
	  
					  // populate the popover
					  buildPopover(data, targetEl);
				  })
				  .catch((err) => console.log(err));
			}

			 const portfolio = document.querySelector(".svg-wrapper");

			// portfolio.addEventListener("click", function() {
			//   	console.log(this);
			//  })

			
			seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));

			

			document.querySelector('.popover #close').addEventListener("click",closePopover);
    

})();