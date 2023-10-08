import React from 'react'
import './App.css'


const App = () => {
//   var input = document.querySelector('input'); 
// var btn = document.querySelector(".addTask > button");
// btn.addEventListener('click', addList);

// function addList(e) {

//     var notCompleted = document.querySelector(".notCompleted");
//     var Completed = document.querySelector(".Completed");
//     var newLi = document.createElement("li");

//     // two check and delete btn  
//     var checkBtn = document.createElement('button');
//     var delBtn = document.createElement('button');

//     checkBtn.innerHTML = '<i class="fa fa-check"></i>';
//     delBtn.innerHTML = '<i class="fa fa-trash"></i>';

//     if(input.value !== ''){
//         newLi.textContent = input.value;
//         input.value = '';
//         notCompleted.appendChild(newLi);
//         newLi.appendChild(checkBtn);
//         newLi.appendChild(delBtn); 
//         checkBtn.addEventListener('click', function() {
//             var parent = this.parentNode;
//             parent.remove();
//             Completed.appendChild(parent);
//             checkBtn.style.display = "none";
//         }); 
//         delBtn.addEventListener('click', function() {
//             var parent = this.parentNode;
//             parent.remove();
//         }); 
//     } 
// }

  return (
    <>
    
    <div class="container">
      <div class="addTask">
        <input type="text" placeholder="Add a Task" />
        <button>Add</button>
      </div>
      <ol id="not" class="notCompleted">
        <h3>Not Completed</h3>
      </ol>
      <ol class="Completed">
        <h3>Completed</h3>
      </ol>
    </div>
    

    </>
  )
}

export default App

