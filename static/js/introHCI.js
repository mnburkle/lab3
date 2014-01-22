'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Yup javascript works");
		$("#testjs").text("Tested!");
		$(".jumbotron p").toggleClass("active");

	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function updateProject(e) {
	console.log('in updated project');
	var projectName = $("#project").val();
	$(projectName).animate( {width: $("#width").val()});

	var description = $("#description").val();
	// makes the description if doesn't exist, toggles
	makeDescription($(projectName),description);
}

function projectClick(e){
	console.log('Entering projectClick');
	e.preventDefault();
	//$(this).css("background-color","#7fff00");
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $('.jumbotron h1');
	jumbotronHeader.text(projectTitle);
	var containingProject = $(this).closest(".project");
	var currentDescription = $(containingProject).find(".project-description");
	if(currentDescription.length != 0)
		makeDescription(containingProject, currentDescription.text());
	else {
		makeDescription(containingProject, "Description of the project");
	}
}

// makes description if doesn't exist, toggles visibility to fade in
// and out with correct text
function makeDescription(containingProject, textToDescribe) {
	var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>" + textToDescribe + "</p></div>"); 
    } else { 
       description.find("p").text(textToDescribe);
       if(description.is(":visible"))
	       description.fadeOut();
	   else {
	   		description.fadeIn();
	   }
    }
}