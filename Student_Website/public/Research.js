window.addEventListener("load", Initialize);
window.addEventListener("load", AddListener);

function Initialize()
{
	document.getElementById("divEducation").style.display = "none";
	document.getElementById("divHealthcare").style.display = "none";
	document.getElementById("divInformationTechnology").style.display = "none";
	document.getElementById("divArchitecture").style.display = "none";
	document.getElementById("divFinance").style.display = "none";
	document.getElementById("divHospitality").style.display = "none";
	document.getElementById("divLawEnforcement").style.display = "none";
	document.getElementById("divCommunications").style.display = "none";
	document.getElementById("divMarketing").style.display = "none";
	document.getElementById("divBusiness").style.display = "none";
}

function AddListener()
{
	document.getElementById("btnSearch").addEventListener("click",Search)
}

function Search()
{
	var SearchResult; 
	SearchResult = document.getElementById("CmbCareers").value 
	switch(SearchResult)
	{
		case "Education":
			document.getElementById("divEducation").style.display = "block";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "Healthcare":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "block";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "InformationTechnology":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "block";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "Architecture":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "block";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "Finance":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "block";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "Hospitality":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "block";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "LawEnforcement":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "block";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "Communications":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "block";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "Marketing":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "block";
			document.getElementById("divBusiness").style.display = "none";
			break;
		case "Business":
			document.getElementById("divEducation").style.display = "none";
			document.getElementById("divHealthcare").style.display = "none";
			document.getElementById("divInformationTechnology").style.display = "none";
			document.getElementById("divArchitecture").style.display = "none";
			document.getElementById("divFinance").style.display = "none";
			document.getElementById("divHospitality").style.display = "none";
			document.getElementById("divLawEnforcement").style.display = "none";
			document.getElementById("divCommunications").style.display = "none";
			document.getElementById("divMarketing").style.display = "none";
			document.getElementById("divBusiness").style.display = "block";
			break;
		default:
			alert("No search result found")
			break;
	}
}