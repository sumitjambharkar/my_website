let i = 0 , j = 0;
let array = document.getElementById("texts").innerHTML.split(",");

const split_word = () => {
  if (j < array[i].length) {
    document.getElementById("holder").innerHTML += array[i].charAt(j);
    j++;
    setTimeout(split_word, 110); // Time gap between each letter
  } else {
    setTimeout(delete_word, 700); // Pause after every word
  }
};

const delete_word = () => {
  if (j >= 0) {
    let del = array[i].toString().slice(0, j);
    document.getElementById("holder").innerHTML = del;
    j--;
    setTimeout(delete_word, 40);  // Deletion speed
  } 
  else {
      i++;
    if (i >= array.length){ 
      i = 0;
    }
    setTimeout(split_word, 110);  // Wait for next word
  }
};

split_word();