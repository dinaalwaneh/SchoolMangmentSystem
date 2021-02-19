
var students = [];
var row=1;
var count=0;


document.getElementById('submit').addEventListener('click', () => {
	let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	

	if(valid(nameInputEl.value, idInputEl.value, gdpaInputEl.value)==0){
		inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
	}
		

	// insert student

	if(valid(nameInputEl.value, idInputEl.value, gdpaInputEl.value)==1){
		insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

		// Show success message
		showMessage('success');
		

	}
 
});

// check for the value of each element :
function inputValidation(name, id, gdpa) {
	
	
	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}


}


function valid(name, id, gdpa){

	if(name == '' || id == '' || gdpa == '')
		return 0;
	
     else
	   return 1;

}

//Add Student :
function insertStudent(name, id, gdpa) {

	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};

	students.push(student);
	console.log('students array: ',students);
    console.log(students.length);
}

function showMessage(event) {

	if (event == 'success') {
		alert('Studnet added!');
	} else {
		alert('Faild to add student');
	}

}

//Show :
function show(){
    
var display = document.getElementById("display");
var showtitle = document.getElementById("title2");

display.classList.remove("disnone");
showtitle.classList.remove("disnone");


for(var i=students.length-1;i>=0;i=i-1)
{
    var r=1;
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);

    cell1.innerHTML=students[i].name;
    cell2.innerHTML=students[i].id;
    cell3.innerHTML=students[i].gdpa;
    r=r+1;
}

}


//display update form :
function removeclass1(){

	var form=document.getElementById('UpdatForm');
 	var element = document.getElementById("iml");

	form.classList.remove("disnone");
	element.classList.remove("disnone");

}


//Update Student information :
function update()
{

	let id = document.getElementById('updateid');
	let newname= document.getElementById('newname');
	let newgpa = document.getElementById('newgdpa');
	var flag=0;

	for(var i=0;i<students.length;i=i+1)
	{
		if(id.value==students[i].id){
		 
			students[i].name=newname.value;
			students[i].gdpa=newgpa.value;
			flag=1;
			
			console.log(students);
			alert("Updat has done sucssfuly :)")
		}
		
	}

    if (flag==0){
        alert("id Dose not founded : ");
    }
    
}


//display delete form :
function removeclass2(){

	var form=document.getElementById('deleteStudent');
    var element = document.getElementById("imll");

	form.classList.remove("disnone");
	element.classList.remove("disnone");

}

// remove object
function deleteStudent(){

	let nameInputEl = document.getElementById('deleteS');
	var flag=0;

	for(var i=0;i<students.length;i=i+1)
	{
		if(nameInputEl.value==students[i].id){
		 
		var removeIndex = students.map(function(item) { return item.id; }).indexOf(nameInputEl.value);


		students.splice(removeIndex, 1);
            alert("Delete has done sucssfuly :)")
            flag=1;
		}
		
	}

    if (flag==0){
        alert("id Dose not founded : ");
    }

}




//delete all of row's from the table to see the result :
function  deleteRow(){
        
    if(students.length>=1){
        for(var i=0 ;i<students.length+1;i++){
            document.getElementById("display").deleteRow(1);
        }
    }

}





