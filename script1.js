function reverseString() {
    var str = document.getElementById('reverseElement').value;
    var newString = "";

    for (var i=str.length-1; i>=0; i--){
        newString += str[i];
    }
    document.getElementById('showReverseElement').value = newString;
}

// const countWords = () => {
//     let noc = document.getElementById('reverseElement').value.length;
//     document.getElementById('showcount').innerHTML = noc;
// }

  // Load function every 0 second
  setInterval(function () {
    textarea();
    charactercount();
  }, 0);

  function textarea() {
    return $('textarea').val();
  }

  function charactercount() {
    $('#showcount').text(textarea().length);
  }

// function countWords2() {
 
//     // Get the input text value
//     var text = document
//         .getElementById("reverseElement").value;

//     // Initialize the word counter
//     var numWords = 0;

//     // Loop through the text
//     // and count spaces in it
//     for (var i = 0; i < text.length; i++) {
//         var currentCharacter = text[i];

//         // Check if the character is a space
//         if (currentCharacter == " ") {
//             numWords += 1;
//         }
//     }

//     // Add 1 to make the count equal to
//     // the number of words
//     // (count of words = count of spaces + 1)
//     numWords += 1;

//     // Display it as output
//     document.getElementById("show")
//         .innerHTML = numWords;
// }
function countWord2() {
 
    // Get the input text value
    var words = document
        .getElementById("reverseElement").value;

    // Initialize the word counter
    var count = 0;

    // Split the words on each
    // space character
    var split = words.split(' ');

    // Loop through the words and
    // increase the counter when
    // each split word is not empty
    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }

    // Display it as output
    document.getElementById("show")
        .innerHTML = count;
}