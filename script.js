
// JSON data containing image URLs
        const imageData = [
            { "url": "/bird1.jpeg"},
            { "url": "/bird2.jpeg"},
            { "url": "/bird3.jpeg"},
            { "url": "/bird4.jpeg"},
            { "url": "/bird5.jpeg"}


        ];

        let currentIndex = 0; // Tracks the current image index

        let imagebut = "load-image-btn";

        document.getElementById(imagebut).addEventListener("click", () => {
            const container = document.getElementById("image-container");

            // Clear previous image
            container.innerHTML = "";

            // Load the next image
            const img = document.createElement("img");
            img.src = imageData[currentIndex].url;
            container.appendChild(img);

            // Update index for next click
            currentIndex = (currentIndex + 1) % imageData.length;
        });

function calculate(){
    var op = (document.getElementById("operator").value); //выбранный оператор

      var result;
      var num1 = Number(document.getElementById("num1").value);
      var num2 = Number(document.getElementById("num2").value);
      switch (op) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2) {
            result = num1 / num2;
          } else {
            result = 'бесконечность';
          }
          break;
        default:
          result = 'выберите операцию';
      }
  
      document.getElementById("result").innerHTML = result;
    }
