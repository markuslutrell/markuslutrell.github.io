// Popup window 
let darkLayer = document.createElement('div');
let modalWin = document.getElementById('popupWin');
let modalWinEdit = document.getElementById('popupWinEdit');
let allTasks = document.querySelectorAll(".todo__item");   
let editValue = document.querySelectorAll(".todo__item_select");

function showModalWin() {
   
   darkLayer.id = 'shadow';
   document.body.appendChild(darkLayer);

   modalWin.style.display = 'block';

   darkLayer.onclick = function () { 
      darkLayer.parentNode.removeChild(darkLayer); 
      modalWin.style.display = 'none'; 
      return false;
    };

   cancel.onclick = function () {  
      darkLayer.parentNode.removeChild(darkLayer); 
      modalWin.style.display = 'none';
      document.querySelector(".popup-form__input").value = "";
  		document.querySelector(".popup-form__text").value = "";
  		return false;
    };
};

// Creating task

save.addEventListener("click", function() {
  let li = document.createElement("li");
  let container = document.querySelector(".todo__items");
  let title = document.querySelector(".popup-form__input");
  let priority = document.querySelector(".popup-form__select");
  let desc = document.querySelector(".popup-form__text");
  let task = document.createElement('li');
  title = title.value;
  desc = desc.value;
  priority = priority.options[priority.selectedIndex].text;

  if (title != "") {
  		task.innerHTML = '<h2 class="todo__item_header">' + title + '</h2>' + '<p class="todo__item_desc">' + desc + '</p>' + '<div class="todo__item_bottom"><div class="todo__item_priority">' + priority + '</div>' + '<select class="todo__item_select" onclick="validation();showModalWinEdit()"><option value="..." selected hidden>...</option><option value="done">done</option><option value="edit">edit</option><option value="delete">delete</option></select></div></li>';
  		task.className = "todo__item";
  		container.appendChild(task);
  		task.className = "todo__item";
	   darkLayer.parentNode.removeChild(darkLayer); 
	   modalWin.style.display = 'none';
	   document.querySelector(".popup-form__input").value = "";
  		document.querySelector(".popup-form__text").value = "";
  		allTasks = document.querySelectorAll(".todo__item");
  		editValue = document.querySelectorAll(".todo__item_select");

  } else {
  		alert("Please, type the title");
  }
});

//Done task

function validation() {
	let statusSelects = document.querySelectorAll(".todo__item_select");
	
	for (let i = statusSelects.length - 1; i >= 0; i--) {
		let status = statusSelects[i].options[statusSelects[i].selectedIndex].text;
		let parent = statusSelects[i].parentNode.parentNode;
		if (status == "done") {
			parent.classList.add('done');
		}
	};
	for (let i = statusSelects.length - 1; i >= 0; i--) {
		let status = statusSelects[i].options[statusSelects[i].selectedIndex].text;
		let parent = statusSelects[i].parentNode.parentNode;
		if (status == "delete") {
			parent.parentNode.removeChild(parent);
		}
	}
};

//Delete task

function taskDelete() {
	let statusSelects = document.querySelectorAll(".todo__item_select");
	
	for (let i = statusSelects.length - 1; i >= 0; i--) {
		let status = statusSelects[i].options[statusSelects[i].selectedIndex].text;
		let parent = statusSelects[i].parentNode.parentNode;
		if (status == "delete") {
			parent.classList.add('hide');
		} else {
			parent.classList.remove('hide');
		}
	}
}

//Search

document.querySelector("#elastic").oninput = function(){
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll(".elastic li h2");
	if (val != '') {
		elasticItems.forEach(function(elem){
			if (elem.innerText.search(val) == -1) {
				elem.parentNode.classList.add("hide");
			} else {
				elem.parentNode.classList.remove('hide');
			}
		});
	} else {
		elasticItems.forEach(function(elem){
			elem.parentNode.classList.remove('hide');
		});
	}
}

// Filtration

document.querySelector("#statusfilter").onclick = function(){
	let statusVal = this.value;
	let statusItems = document.querySelectorAll(".todo__item");
	if (statusVal == 'open') {
		statusItems.forEach(function(elem){
			if (elem.classList.contains("done")) {
				elem.classList.add("hide-status");
			} else {
				elem.classList.remove('hide-status');
			}
		});
	} else if (statusVal == 'done'){
		statusItems.forEach(function(elem){
			if (elem.classList.contains("done")) {
				elem.classList.remove('hide-status');
			} else {
				elem.classList.add("hide-status");
			}
		});
	} else {
		statusItems.forEach(function(elem){
			elem.classList.remove('hide-status');
		});
	}
}

document.querySelector("#priorityFilter").onclick = function(){
	let priorityVal = this.value;
	let priorityItems = document.querySelectorAll(".todo__item");
	if (priorityVal == 'high') {
		let priorityValInner = document.querySelectorAll(".todo__item_priority");
		priorityValInner.forEach(function(elem) {
			let priorityValInnerHtml = elem.innerHTML;
			if (priorityValInnerHtml != "High") {
				elem.parentNode.parentNode.classList.add("hide");
			} else {
				elem.parentNode.parentNode.classList.remove('hide');
			}
	});

	} else if (priorityVal == 'normal'){
		let priorityValInner = document.querySelectorAll(".todo__item_priority");
		priorityValInner.forEach(function(elem) {
			let priorityValInnerHtml = elem.innerHTML;
			if (priorityValInnerHtml != "Normal") {
				elem.parentNode.parentNode.classList.add("hide");
			} else {
				elem.parentNode.parentNode.classList.remove('hide');
			}
		});
	} else if (priorityVal == 'low'){
		let priorityValInner = document.querySelectorAll(".todo__item_priority");
		priorityValInner.forEach(function(elem) {
			let priorityValInnerHtml = elem.innerHTML;
			if (priorityValInnerHtml != "Low") {
				elem.parentNode.parentNode.classList.add("hide");
			} else {
				elem.parentNode.parentNode.classList.remove('hide');
			}
		});
	} else if (priorityVal == 'all'){
		let priorityValInner = document.querySelectorAll(".todo__item_priority");
		priorityValInner.forEach(function(elem) {
			let priorityValInnerHtml = elem.innerHTML;
			elem.parentNode.parentNode.classList.remove("hide");
		});
	}

};

// Editing popup 



// allTasks.forEach(function(element){
// 	element.lastChild.previousElementSibling.lastElementChild.addEventListener("click", function() {
// 	editValue.forEach(function(elem){
// 		if (elem.value == 'edit') {
// 			darkLayer.id = 'shadow';
// 			document.body.appendChild(darkLayer);
// 		   modalWinEdit.style.display = 'block';
// 		   elem.value = "...";
// 		   saveEdit.addEventListener("click", function() {
// 		     let editTask = elem.parentNode.parentNode;
// 		     let editTitle = document.querySelector("#popupWinEdit .popup-form__input");
// 			  let editPriority = document.querySelector("#popupWinEdit .popup-form__select");
// 			  let editDesc = document.querySelector("#popupWinEdit .popup-form__text");

// 			  editTitle = editTitle.value;
// 			  editDesc = editDesc.value;
// 			  editPriority = editPriority.options[editPriority.selectedIndex].text;

// 			  if (editTitle != "") {
// 			  		editTask.innerHTML = '<h2 class="todo__item_header">' + editTitle + '</h2>' + '<p class="todo__item_desc">' + editDesc + '</p>' + '<div class="todo__item_bottom"><div class="todo__item_priority">' + editPriority + '</div>' + '<select class="todo__item_select" onclick="validation();"><option value="" disabled selected hidden>...</option><option value="done">done</option><option value="edit">edit</option><option value="delete">delete</option></select></div></li>';
// 				   darkLayer.parentNode.removeChild(darkLayer); 
// 				   modalWinEdit.style.display = 'none';
// 				   document.querySelector("#popupWinEdit .popup-form__input").value = "";
// 			  		document.querySelector("#popupWinEdit .popup-form__text").value = "";
// 			  		allTasks = document.querySelectorAll(".todo__item");
//   					editValue = document.querySelectorAll(".todo__item_select");
// 			  		console.log(elem)
// 			  } else {
// 			  		alert("Please, type the title");
// 			  }
// 			});
// 		 } 
// 		 darkLayer.onclick = function () { 
// 		      darkLayer.parentNode.removeChild(darkLayer); 
// 		      modalWinEdit.style.display = 'none'; 
// 		      return false;
// 		    };

// 		   cancelEdit.onclick = function () {  
// 		      darkLayer.parentNode.removeChild(darkLayer); 
// 		      modalWinEdit.style.display = 'none';
// 		  		return false;
// 		    };
// 	});
// 	});
// });


function showModalWinEdit() {
	let editValue = document.querySelectorAll(".todo__item_select");


	editValue.forEach(function(elem){
		if (elem.value == 'edit') {
			darkLayer.id = 'shadow';
			document.body.appendChild(darkLayer);
		   modalWinEdit.style.display = 'block';
		   elem.value = "...";
		   saveEdit.addEventListener("click", function() {
		     let editTask = elem.parentNode.parentNode;
		     let editTitle = document.querySelector("#popupWinEdit .popup-form__input");
			  let editPriority = document.querySelector("#popupWinEdit .popup-form__select");
			  let editDesc = document.querySelector("#popupWinEdit .popup-form__text");

			  editTitle = editTitle.value;
			  editDesc = editDesc.value;
			  editPriority = editPriority.options[editPriority.selectedIndex].text;

			  if (editTitle != "") {
			  		editTask.innerHTML = '<h2 class="todo__item_header">' + editTitle + '</h2>' + '<p class="todo__item_desc">' + editDesc + '</p>' + '<div class="todo__item_bottom"><div class="todo__item_priority">' + editPriority + '</div>' + '<select class="todo__item_select" onclick="validation();showModalWinEdit()"><option value="" disabled selected hidden>...</option><option value="done">done</option><option value="edit">edit</option><option value="delete">delete</option></select></div></li>';
				   darkLayer.parentNode.removeChild(darkLayer); 
				   modalWinEdit.style.display = 'none';
				   document.querySelector("#popupWinEdit .popup-form__input").value = "";
			  		document.querySelector("#popupWinEdit .popup-form__text").value = "";
			  } else {
			  		alert("Please, type the title");
			  }
			});
		 } 
		 darkLayer.onclick = function () { 
		      darkLayer.parentNode.removeChild(darkLayer); 
		      modalWinEdit.style.display = 'none'; 
		      return false;
		    };

		   cancelEdit.onclick = function () {  
		      darkLayer.parentNode.removeChild(darkLayer); 
		      modalWinEdit.style.display = 'none';
		  		return false;
		    };
	});
};