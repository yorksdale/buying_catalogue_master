//Please enter your personal details page ---------------------------------------------------------------------------------
//JQuery ------------------------------------------------------------------------------------------------------------------

//waits for the page to load
$(window).load(function() {
  $("#submitResearchPref").click(setResearchPref);
  $("#submitPlanningPref").click(setPlanningPref);
  $("#submitPlanningPref").click(confirm);
  $("#submitPref").click(confirmAll);
});

//JS ----------------------------------------------

//Sets research opt in preferences to session
function setResearchPref() {
  var researchPref = $('input[name="research-checkbox"]:checked').val();

  if (researchPref == 'research-opted-out') {
    sessionStorage.researchPref = "false";
  } else {
    sessionStorage.researchPref = "true";
  }

};

//sets planning opt in preferences to session
function setPlanningPref() {
  var planningPref = $('input[name="planning-checkbox"]:checked').val();

  if (planningPref == 'planning-opted-out') {
    sessionStorage.planningPref = "false";
  } else {
    sessionStorage.planningPref = "true";
  }
};

//takes user to correct page based on the settings they have set
function confirm() {
  var researchPref = sessionStorage.researchPref;
  var planningPref = sessionStorage.planningPref;

  if (researchPref == "true" && planningPref == "true") {
    window.location.href = 'confirm_in_in.html';
  } else if (researchPref == "true" && planningPref == "false") {
    window.location.href = 'confirm_in_out.html';
  } else if (researchPref == "false" && planningPref == "true") {
    window.location.href = 'confirm_out_in.html';
  } else {
    window.location.href = 'confirm_out_out.html';
  }
};

function confirmAll() {
  setResearchPref();
  setPlanningPref();
  confirm();
}
