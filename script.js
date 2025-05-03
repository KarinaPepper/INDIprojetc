
// JSON data containing image URLs

        const imageData = {
          "load-image-btn4": [
            { "url": "/INDIprojetc/original4.png"},
            { "url": "/INDIprojetc/image search41.png"},
            { "url": "/INDIprojetc/image search42.png"},
            { "url": '/INDIprojetc/image search43.png'},
            { "url": '/INDIprojetc/image search44.png'},
            { "url": '/INDIprojetc/image search45.png'},
            { "url": '/INDIprojetc/image search43.png'},
            { "url": '/INDIprojetc/image search44.png'},
            { "url": '/INDIprojetc/image search45.png'},
            { "url": '/INDIprojetc/image search43.png'},
            { "url": '/INDIprojetc/image search44.png'},
            { "url": "/INDIprojetc/original4last.png"}
          ],
          "load-image-btn5": [
            { "url": "/INDIprojetc/image5.png"}
          ],
          "load-image-btn6": [
            { "url": "/INDIprojetc/image6.png"}
          ],
          "load-image-btn": [
            { "url": "/INDIprojetc/image1.png"}
          ],
          "load-image-btn2": [
            { "url": "/INDIprojetc/image2.png"}
          ],
          "load-image-btn3": [
            { "url": "/INDIprojetc/image3.png"}
          ]

        };


        const stepAlgoData = {
          "load-image-btn4": [
            "0,1,2,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4",
            "0,2,1,4"
          ],
        }
      
const buttons = document.querySelectorAll('.btn');
let currentIndexs = {}; // Tracks the current image index
      
buttons.forEach(button => {
button.addEventListener('click', () => {
        const buttonName = button.getAttribute('data-name'); // Получаем значение data-name
        const cool = button.getAttribute('data-div');
        //const step = button.getAttribute('data-text');

        let currentIndex = currentIndexs[buttonName];
        if (currentIndex == undefined || currentIndex == null)
          currentIndex = 0;
    

        //let currentIndex = 0; // Tracks the current image index

        //document.getElementById(buttonName) //.addEventListener("click", () => {
        let images = imageData[buttonName]; 
            
            const container = document.getElementById(cool);

            // Clear previous image
            container.innerHTML = "";

            // Load the next image
            const img = document.createElement("img");
            img.src = images[currentIndex].url;
            container.appendChild(img);




            //let stepAlgos = stepAlgoData[buttonName];

            //const container2 = document.getElementById(step);

            // Clear previous image
            // if (currentIndex == 0)
              // container2.innerHTML = "";

            // Load the next image
            //const textdata = document.createElement("p");
            //textdata.innerHTML = `Step ${currentIndex}:` + stepAlgos[currentIndex];
            //container2.appendChild(textdata);



            // Update index for next click
            currentIndex = (currentIndex + 1) % images.length;
            currentIndexs[buttonName] = currentIndex;
    });
  }); 


function oldtext(){
  const oldTextElement = document.getElementById('sostep2');
  const oldTextElement2 = document.getElementById('sostep3');

  oldTextElement.textContent = '';
  oldTextElement2.textContent = '';

}

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

