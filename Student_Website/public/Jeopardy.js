window.addEventListener("load", InitControls);
window.addEventListener("load", InitControl);
window.addEventListener("load", addListeners);
window.addEventListener("load", addListener);

function InitControls()
{
	document.getElementById("divJeopardy").style.display = "none";
	document.getElementById("divTeam1").style.display = "none";
	document.getElementById("divTeam2").style.display = "none";
	document.getElementById("divTeam3").style.display = "none";
	
	document.getElementById("divMath200").style.display = "none";
	document.getElementById("divEng200").style.display = "none";
	document.getElementById("divSci200").style.display = "none";
	document.getElementById("divHistory200").style.display = "none";
	document.getElementById("divOther200").style.display = "none";
	
	document.getElementById("divMath400").style.display = "none";
	document.getElementById("divEng400").style.display = "none";
	document.getElementById("divSci400").style.display = "none";
	document.getElementById("divHistory400").style.display = "none";
	document.getElementById("divOther400").style.display = "none";
	
	document.getElementById("divMath600").style.display = "none";
	document.getElementById("divEng600").style.display = "none";
	document.getElementById("divSci600").style.display = "none";
	document.getElementById("divHistory600").style.display = "none";
	document.getElementById("divOther600").style.display = "none";
	
	document.getElementById("divMath800").style.display = "none";
	document.getElementById("divEng800").style.display = "none";
	document.getElementById("divSci800").style.display = "none";
	document.getElementById("divHistory800").style.display = "none";
	document.getElementById("divOther800").style.display = "none";
	
	document.getElementById("divMath1000").style.display = "none";
	document.getElementById("divEng1000").style.display = "none";
	document.getElementById("divSci1000").style.display = "none";
	document.getElementById("divHistory1000").style.display = "none";
	document.getElementById("divOther1000").style.display = "none";
	
}
function InitControl()
{
	document.getElementById("btnMath200").disabled = false;
	document.getElementById("btnEng200").disabled = false;
	document.getElementById("btnSci200").disabled = false;
	document.getElementById("btnHistory200").disabled = false;
	document.getElementById("btnOther200").disabled = false;
	
	document.getElementById("btnMath400").disabled = false;
	document.getElementById("btnEng400").disabled = false;
	document.getElementById("btnSci400").disabled = false;
	document.getElementById("btnHistory400").disabled = false;
	document.getElementById("btnOther400").disabled = false;
	
	document.getElementById("btnMath600").disabled = false;
	document.getElementById("btnEng600").disabled = false;
	document.getElementById("btnSci600").disabled = false;
	document.getElementById("btnHistory600").disabled = false;
	document.getElementById("btnOther600").disabled = false;
	
	document.getElementById("btnMath800").disabled = false;
	document.getElementById("btnEng800").disabled = false;
	document.getElementById("btnSci800").disabled = false;
	document.getElementById("btnHistory800").disabled = false;
	document.getElementById("btnOther800").disabled = false;
	
	document.getElementById("btnMath1000").disabled = false;
	document.getElementById("btnEng1000").disabled = false;
	document.getElementById("btnSci1000").disabled = false;
	document.getElementById("btnHistory1000").disabled = false;
	document.getElementById("btnOther1000").disabled = false;

}

function addListeners() 
{
	document.getElementById("btnSub").addEventListener("click", HowTeams);
	
	document.getElementById("btnMath200").addEventListener("click", ShowMath200);
	document.getElementById("btnEng200").addEventListener("click", ShowEng200);
	document.getElementById("btnSci200").addEventListener("click", ShowSci200);
	document.getElementById("btnHistory200").addEventListener("click", ShowHistory200);
	document.getElementById("btnOther200").addEventListener("click", ShowOther200);
	
	document.getElementById("btnMath400").addEventListener("click", ShowMath400);
	document.getElementById("btnEng400").addEventListener("click", ShowEng400);
	document.getElementById("btnSci400").addEventListener("click", ShowSci400);
	document.getElementById("btnHistory400").addEventListener("click", ShowHistory400);
	document.getElementById("btnOther400").addEventListener("click", ShowOther400);
	
	document.getElementById("btnMath600").addEventListener("click", ShowMath600);
	document.getElementById("btnEng600").addEventListener("click", ShowEng600);
	document.getElementById("btnSci600").addEventListener("click", ShowSci600);
	document.getElementById("btnHistory600").addEventListener("click", ShowHistory600);
	document.getElementById("btnOther600").addEventListener("click", ShowOther600);
	
	document.getElementById("btnMath800").addEventListener("click", ShowMath800);
	document.getElementById("btnEng800").addEventListener("click", ShowEng800);
	document.getElementById("btnSci800").addEventListener("click", ShowSci800);
	document.getElementById("btnHistory800").addEventListener("click", ShowHistory800);
	document.getElementById("btnOther800").addEventListener("click", ShowOther800);
	
	document.getElementById("btnMath1000").addEventListener("click", ShowMath1000);
	document.getElementById("btnEng1000").addEventListener("click", ShowEng1000);
	document.getElementById("btnSci1000").addEventListener("click", ShowSci1000);
	document.getElementById("btnHistory1000").addEventListener("click", ShowHistory1000);
	document.getElementById("btnOther1000").addEventListener("click", ShowOther1000);
	
	document.getElementById("btnAdd1").addEventListener("click", Team1Add);
	document.getElementById("btnSubtract1").addEventListener("click", Team1Sub);
	document.getElementById("btnAdd2").addEventListener("click", Team2Add);
	document.getElementById("btnSubtract2").addEventListener("click", Team2Sub);
	document.getElementById("btnAdd3").addEventListener("click", Team3Add);
	document.getElementById("btnSubtract3").addEventListener("click", Team3Sub);

}
function addListener()
{
	document.getElementById("BtnMath200RA").addEventListener("click", ShowMath200Answer);
	document.getElementById("BtnEng200RA").addEventListener("click", ShowEng200Answer);
	document.getElementById("BtnSci200RA").addEventListener("click", ShowSci200Answer);
	document.getElementById("BtnHistory200RA").addEventListener("click", ShowHistory200Answer);
	document.getElementById("BtnOther200RA").addEventListener("click", ShowOther200Answer);
	
	document.getElementById("BtnMath400RA").addEventListener("click", ShowMath400Answer);
	document.getElementById("BtnEng400RA").addEventListener("click", ShowEng400Answer);
	document.getElementById("BtnSci400RA").addEventListener("click", ShowSci400Answer);
	document.getElementById("BtnHistory400RA").addEventListener("click", ShowHistory400Answer);
	document.getElementById("BtnOther400RA").addEventListener("click", ShowOther400Answer);
	
	document.getElementById("BtnMath600RA").addEventListener("click", ShowMath600Answer);
	document.getElementById("BtnEng600RA").addEventListener("click", ShowEng600Answer);
	document.getElementById("BtnSci600RA").addEventListener("click", ShowSci600Answer);
	document.getElementById("BtnHistory600RA").addEventListener("click", ShowHistory600Answer);
	document.getElementById("BtnOther600RA").addEventListener("click", ShowOther600Answer);
	
	document.getElementById("BtnMath800RA").addEventListener("click", ShowMath800Answer);
	document.getElementById("BtnEng800RA").addEventListener("click", ShowEng800Answer);
	document.getElementById("BtnSci800RA").addEventListener("click", ShowSci800Answer);
	document.getElementById("BtnHistory800RA").addEventListener("click", ShowHistory800Answer);
	document.getElementById("BtnOther800RA").addEventListener("click", ShowOther800Answer);
	
	document.getElementById("BtnMath1000RA").addEventListener("click", ShowMath1000Answer);
	document.getElementById("BtnEng1000RA").addEventListener("click", ShowEng1000Answer);
	document.getElementById("BtnSci1000RA").addEventListener("click", ShowSci1000Answer);
	document.getElementById("BtnHistory1000RA").addEventListener("click", ShowHistory1000Answer);
	document.getElementById("BtnOther1000RA").addEventListener("click", ShowOther1000Answer);
	
	document.getElementById("btnHide1").addEventListener("click", HideStatment1);
	document.getElementById("btnHide2").addEventListener("click", HideStatment2);
	document.getElementById("btnHide3").addEventListener("click", HideStatment3);
	document.getElementById("btnHide4").addEventListener("click", HideStatment4);
	document.getElementById("btnHide5").addEventListener("click", HideStatment5);
	document.getElementById("btnHide6").addEventListener("click", HideStatment6);
	document.getElementById("btnHide7").addEventListener("click", HideStatment7);	
	document.getElementById("btnHide8").addEventListener("click", HideStatment8);
	document.getElementById("btnHide9").addEventListener("click", HideStatment9);
	document.getElementById("btnHide10").addEventListener("click", HideStatment10);
	document.getElementById("btnHide11").addEventListener("click", HideStatment11);
	document.getElementById("btnHide12").addEventListener("click", HideStatment12);
	document.getElementById("btnHide13").addEventListener("click", HideStatment13);
	document.getElementById("btnHide14").addEventListener("click", HideStatment14);
	document.getElementById("btnHide15").addEventListener("click", HideStatment15);
	document.getElementById("btnHide16").addEventListener("click", HideStatment16);
	document.getElementById("btnHide17").addEventListener("click", HideStatment17);
	document.getElementById("btnHide18").addEventListener("click", HideStatment18);
	document.getElementById("btnHide19").addEventListener("click", HideStatment19);
	document.getElementById("btnHide20").addEventListener("click", HideStatment20);
	document.getElementById("btnHide21").addEventListener("click", HideStatment21);
	document.getElementById("btnHide22").addEventListener("click", HideStatment22);
	document.getElementById("btnHide23").addEventListener("click", HideStatment23);
	document.getElementById("btnHide24").addEventListener("click", HideStatment24);
	document.getElementById("btnHide25").addEventListener("click", HideStatment25);
	
}
var Points1,Points2,Points3;
Points1 = 0
Points2 = 0
Points3 = 0
function Team1Add()
{
	Points1 += 100;
	document.getElementById("lblPoints1").innerHTML = Points1;
}
function Team2Add()
{
	Points2 += 100;
	document.getElementById("lblPoints2").innerHTML = Points2;
}
function Team3Add()
{
	Points3 += 100;
	document.getElementById("lblPoints3").innerHTML = Points3;
}
function Team1Sub()
{
	Points1 -= 100;
	document.getElementById("lblPoints1").innerHTML = Points1;
}
function Team2Sub()
{
	Points2 -= 100;
	document.getElementById("lblPoints2").innerHTML = Points2;
}
function Team3Sub()
{
	Points3 -= 100;
	document.getElementById("lblPoints3").innerHTML = Points3;
}
function HowTeams()
{
	var team = document.getElementById("cmbTeams").value 
	switch (team)
	{
		case "No":
			document.getElementById("divJeopardy").style.display = "block";
			document.getElementById("main").style.display = "none";
			break;
		case "Two":
			document.getElementById("divTeam1").style.display = "block";
			document.getElementById("divTeam2").style.display = "block";
			document.getElementById("divJeopardy").style.display = "block";
			document.getElementById("main").style.display = "none";
			break;
		case "Three":
			document.getElementById("divTeam1").style.display = "block";
			document.getElementById("divTeam2").style.display = "block";
			document.getElementById("divTeam3").style.display = "block";
			document.getElementById("divJeopardy").style.display = "block";
			document.getElementById("main").style.display = "none";
			break;
		default:
			alert("Error");
			break;
	}
}
function ShowMath200()
{
	document.getElementById("divJeopardy").style.display = "none";
	document.getElementById("divMath200").style.display = "block";
	document.getElementById("lblMath200Answer").style.display = "none";
	document.getElementById("btnHide1").style.display = "none";
}
function ShowMath200Answer()
{
	document.getElementById("lblMath200Answer").style.display = "block";
	document.getElementById("btnHide1").style.display = "block";
}
function HideStatment1()
{
	document.getElementById("divJeopardy").style.display = "block";
	document.getElementById("divMath200").style.display = "none";
	document.getElementById("lblMath200Answer").style.display = "none";
	document.getElementById("btnHide1").style.display = "none";
	document.getElementById("btnMath200").disabled = true;
}


function ShowEng200()
{
	document.getElementById("divJeopardy").style.display = "none";
	document.getElementById("divEng200").style.display = "block";
	document.getElementById("lblEng200Answer").style.display = "none";
	document.getElementById("btnHide2").style.display = "none";
}
function ShowEng200Answer()
{
	document.getElementById("lblEng200Answer").style.display = "block";
	document.getElementById("btnHide2").style.display = "block";
}
function HideStatment2()
{
	document.getElementById("divJeopardy").style.display = "block";
	document.getElementById("divEng200").style.display = "none";
	document.getElementById("lblEng200Answer").style.display = "none";
	document.getElementById("btnHide2").style.display = "none";
	document.getElementById("btnEng200").disabled = true;
}
function ShowSci200() 
{
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divSci200").style.display = "block";
    document.getElementById("lblSci200Answer").style.display = "none";
    document.getElementById("btnHide3").style.display = "none";
}

function ShowSci200Answer() 
{
    document.getElementById("lblSci200Answer").style.display = "block";
    document.getElementById("btnHide3").style.display = "block";
}

function HideStatment3() 
{
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divSci200").style.display = "none";
    document.getElementById("lblSci200Answer").style.display = "none";
    document.getElementById("btnHide3").style.display = "none";
    document.getElementById("btnSci200").disabled = true;
}

function ShowHistory200() 
{
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divHistory200").style.display = "block";
    document.getElementById("lblHistory200Answer").style.display = "none";
    document.getElementById("btnHide4").style.display = "none";
}

function ShowHistory200Answer() 
{
    document.getElementById("lblHistory200Answer").style.display = "block";
    document.getElementById("btnHide4").style.display = "block";
}

function HideStatment4() 
{
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divHistory200").style.display = "none";
    document.getElementById("lblHistory200Answer").style.display = "none";
    document.getElementById("btnHide4").style.display = "none";
    document.getElementById("btnHistory200").disabled = true;
}

function ShowOther200() 
{
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divOther200").style.display = "block";
    document.getElementById("lblOther200Answer").style.display = "none";
    document.getElementById("btnHide5").style.display = "none";
}

function ShowOther200Answer() 
{
    document.getElementById("lblOther200Answer").style.display = "block";
    document.getElementById("btnHide5").style.display = "block";
}

function HideStatment5() 
{
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divOther200").style.display = "none";
    document.getElementById("lblOther200Answer").style.display = "none";
    document.getElementById("btnHide5").style.display = "none";
    document.getElementById("btnOther200").disabled = true;
}
function ShowMath400() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divMath400").style.display = "block";
    document.getElementById("lblMath400Answer").style.display = "none";
    document.getElementById("btnHide6").style.display = "none";
}

function ShowMath400Answer() {
    document.getElementById("lblMath400Answer").style.display = "block";
    document.getElementById("btnHide6").style.display = "block";
}

function HideStatment6() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divMath400").style.display = "none";
    document.getElementById("lblMath400Answer").style.display = "none";
    document.getElementById("btnHide6").style.display = "none";
    document.getElementById("btnMath400").disabled = true;
}
// Eng400
function ShowEng400() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divEng400").style.display = "block";
    document.getElementById("lblEng400Answer").style.display = "none";
    document.getElementById("btnHide7").style.display = "none";
}

function ShowEng400Answer() {
    document.getElementById("lblEng400Answer").style.display = "block";
    document.getElementById("btnHide7").style.display = "block";
}

function HideStatment7() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divEng400").style.display = "none";
    document.getElementById("lblEng400Answer").style.display = "none";
    document.getElementById("btnHide7").style.display = "none";
    document.getElementById("btnEng400").disabled = true;
}

// Sci400
function ShowSci400() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divSci400").style.display = "block";
    document.getElementById("lblSci400Answer").style.display = "none";
    document.getElementById("btnHide8").style.display = "none";
}

function ShowSci400Answer() {
    document.getElementById("lblSci400Answer").style.display = "block";
    document.getElementById("btnHide8").style.display = "block";
}

function HideStatment8() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divSci400").style.display = "none";
    document.getElementById("lblSci400Answer").style.display = "none";
    document.getElementById("btnHide8").style.display = "none";
    document.getElementById("btnSci400").disabled = true;
}

// History400
function ShowHistory400() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divHistory400").style.display = "block";
    document.getElementById("lblHistory400Answer").style.display = "none";
    document.getElementById("btnHide9").style.display = "none";
}

function ShowHistory400Answer() {
    document.getElementById("lblHistory400Answer").style.display = "block";
    document.getElementById("btnHide9").style.display = "block";
}

function HideStatment9() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divHistory400").style.display = "none";
    document.getElementById("lblHistory400Answer").style.display = "none";
    document.getElementById("btnHide9").style.display = "none";
    document.getElementById("btnHistory400").disabled = true;
}

// Other400
function ShowOther400() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divOther400").style.display = "block";
    document.getElementById("lblOther400Answer").style.display = "none";
    document.getElementById("btnHide10").style.display = "none";
}

function ShowOther400Answer() {
    document.getElementById("lblOther400Answer").style.display = "block";
    document.getElementById("btnHide10").style.display = "block";
}

function HideStatment10() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divOther400").style.display = "none";
    document.getElementById("lblOther400Answer").style.display = "none";
    document.getElementById("btnHide10").style.display = "none";
    document.getElementById("btnOther400").disabled = true;
}

// Math600
function ShowMath600() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divMath600").style.display = "block";
    document.getElementById("lblMath600Answer").style.display = "none";
    document.getElementById("btnHide11").style.display = "none";
}

function ShowMath600Answer() {
    document.getElementById("lblMath600Answer").style.display = "block";
    document.getElementById("btnHide11").style.display = "block";
}

function HideStatment11() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divMath600").style.display = "none";
    document.getElementById("lblMath600Answer").style.display = "none";
    document.getElementById("btnHide11").style.display = "none";
    document.getElementById("btnMath600").disabled = true;
}

// Eng600
function ShowEng600() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divEng600").style.display = "block";
    document.getElementById("lblEng600Answer").style.display = "none";
    document.getElementById("btnHide12").style.display = "none";
}

function ShowEng600Answer() {
    document.getElementById("lblEng600Answer").style.display = "block";
    document.getElementById("btnHide12").style.display = "block";
}

function HideStatment12() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divEng600").style.display = "none";
    document.getElementById("lblEng600Answer").style.display = "none";
    document.getElementById("btnHide12").style.display = "none";
    document.getElementById("btnEng600").disabled = true;
}

// Sci600
function ShowSci600() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divSci600").style.display = "block";
    document.getElementById("lblSci600Answer").style.display = "none";
    document.getElementById("btnHide13").style.display = "none";
}

function ShowSci600Answer() {
    document.getElementById("lblSci600Answer").style.display = "block";
    document.getElementById("btnHide13").style.display = "block";
}

function HideStatment13() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divSci600").style.display = "none";
    document.getElementById("lblSci600Answer").style.display = "none";
    document.getElementById("btnHide13").style.display = "none";
    document.getElementById("btnSci600").disabled = true;
}

// History600
function ShowHistory600() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divHistory600").style.display = "block";
    document.getElementById("lblHistory600Answer").style.display = "none";
    document.getElementById("btnHide14").style.display = "none";
}

function ShowHistory600Answer() {
    document.getElementById("lblHistory600Answer").style.display = "block";
    document.getElementById("btnHide14").style.display = "block";
}

function HideStatment14() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divHistory600").style.display = "none";
    document.getElementById("lblHistory600Answer").style.display = "none";
    document.getElementById("btnHide14").style.display = "none";
    document.getElementById("btnHistory600").disabled = true;
}

// Other600
function ShowOther600() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divOther600").style.display = "block";
    document.getElementById("lblOther600Answer").style.display = "none";
    document.getElementById("btnHide15").style.display = "none";
}

function ShowOther600Answer() {
    document.getElementById("lblOther600Answer").style.display = "block";
    document.getElementById("btnHide15").style.display = "block";
}

function HideStatment15() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divOther600").style.display = "none";
    document.getElementById("lblOther600Answer").style.display = "none";
    document.getElementById("btnHide15").style.display = "none";
    document.getElementById("btnOther600").disabled = true;
}
// Math800
function ShowMath800() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divMath800").style.display = "block";
    document.getElementById("lblMath800Answer").style.display = "none";
    document.getElementById("btnHide16").style.display = "none";
}

function ShowMath800Answer() {
    document.getElementById("lblMath800Answer").style.display = "block";
    document.getElementById("btnHide16").style.display = "block";
}

function HideStatment16() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divMath800").style.display = "none";
    document.getElementById("lblMath800Answer").style.display = "none";
    document.getElementById("btnHide16").style.display = "none";
    document.getElementById("btnMath800").disabled = true;
}

// Eng800
function ShowEng800() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divEng800").style.display = "block";
    document.getElementById("lblEng800Answer").style.display = "none";
    document.getElementById("btnHide17").style.display = "none";
}

function ShowEng800Answer() {
    document.getElementById("lblEng800Answer").style.display = "block";
    document.getElementById("btnHide17").style.display = "block";
}

function HideStatment17() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divEng800").style.display = "none";
    document.getElementById("lblEng800Answer").style.display = "none";
    document.getElementById("btnHide17").style.display = "none";
    document.getElementById("btnEng800").disabled = true;
}

// Sci800
function ShowSci800() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divSci800").style.display = "block";
    document.getElementById("lblSci800Answer").style.display = "none";
    document.getElementById("btnHide18").style.display = "none";
}

function ShowSci800Answer() {
    document.getElementById("lblSci800Answer").style.display = "block";
    document.getElementById("btnHide18").style.display = "block";
}

function HideStatment18() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divSci800").style.display = "none";
    document.getElementById("lblSci800Answer").style.display = "none";
    document.getElementById("btnHide18").style.display = "none";
    document.getElementById("btnSci800").disabled = true;
}

// History800
function ShowHistory800() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divHistory800").style.display = "block";
    document.getElementById("lblHistory800Answer").style.display = "none";
    document.getElementById("btnHide19").style.display = "none";
}

function ShowHistory800Answer() {
    document.getElementById("lblHistory800Answer").style.display = "block";
    document.getElementById("btnHide19").style.display = "block";
}

function HideStatment19() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divHistory800").style.display = "none";
    document.getElementById("lblHistory800Answer").style.display = "none";
    document.getElementById("btnHide19").style.display = "none";
    document.getElementById("btnHistory800").disabled = true;
}

// Other800
function ShowOther800() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divOther800").style.display = "block";
    document.getElementById("lblOther800Answer").style.display = "none";
    document.getElementById("btnHide20").style.display = "none";
}

function ShowOther800Answer() {
    document.getElementById("lblOther800Answer").style.display = "block";
    document.getElementById("btnHide20").style.display = "block";
}

function HideStatment20() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divOther800").style.display = "none";
    document.getElementById("lblOther800Answer").style.display = "none";
    document.getElementById("btnHide20").style.display = "none";
    document.getElementById("btnOther800").disabled = true;
}
// Math1000
function ShowMath1000() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divMath1000").style.display = "block";
    document.getElementById("lblMath1000Answer").style.display = "none";
    document.getElementById("btnHide21").style.display = "none";
}

function ShowMath1000Answer() {
    document.getElementById("lblMath1000Answer").style.display = "block";
    document.getElementById("btnHide21").style.display = "block";
}

function HideStatment21() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divMath1000").style.display = "none";
    document.getElementById("lblMath1000Answer").style.display = "none";
    document.getElementById("btnHide21").style.display = "none";
    document.getElementById("btnMath1000").disabled = true;
}

// Eng1000
function ShowEng1000() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divEng1000").style.display = "block";
    document.getElementById("lblEng1000Answer").style.display = "none";
    document.getElementById("btnHide22").style.display = "none";
}

function ShowEng1000Answer() {
    document.getElementById("lblEng1000Answer").style.display = "block";
    document.getElementById("btnHide22").style.display = "block";
}

function HideStatment22() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divEng1000").style.display = "none";
    document.getElementById("lblEng1000Answer").style.display = "none";
    document.getElementById("btnHide22").style.display = "none";
    document.getElementById("btnEng1000").disabled = true;
}

// Sci1000
function ShowSci1000() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divSci1000").style.display = "block";
    document.getElementById("lblSci1000Answer").style.display = "none";
    document.getElementById("btnHide23").style.display = "none";
}

function ShowSci1000Answer() {
    document.getElementById("lblSci1000Answer").style.display = "block";
    document.getElementById("btnHide23").style.display = "block";
}

function HideStatment23() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divSci1000").style.display = "none";
    document.getElementById("lblSci1000Answer").style.display = "none";
    document.getElementById("btnHide23").style.display = "none";
    document.getElementById("btnSci1000").disabled = true;
}

// History1000
function ShowHistory1000() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divHistory1000").style.display = "block";
    document.getElementById("lblHistory1000Answer").style.display = "none";
    document.getElementById("btnHide24").style.display = "none";
}

function ShowHistory1000Answer() {
    document.getElementById("lblHistory1000Answer").style.display = "block";
    document.getElementById("btnHide24").style.display = "block";
}

function HideStatment24() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divHistory1000").style.display = "none";
    document.getElementById("lblHistory1000Answer").style.display = "none";
    document.getElementById("btnHide24").style.display = "none";
    document.getElementById("btnHistory1000").disabled = true;
}

// Other1000
function ShowOther1000() {
    document.getElementById("divJeopardy").style.display = "none";
    document.getElementById("divOther1000").style.display = "block";
    document.getElementById("lblOther1000Answer").style.display = "none";
    document.getElementById("btnHide25").style.display = "none";
}

function ShowOther1000Answer() {
    document.getElementById("lblOther1000Answer").style.display = "block";
    document.getElementById("btnHide25").style.display = "block";
}

function HideStatment25() {
    document.getElementById("divJeopardy").style.display = "block";
    document.getElementById("divOther1000").style.display = "none";
    document.getElementById("lblOther1000Answer").style.display = "none";
    document.getElementById("btnHide25").style.display = "none";
    document.getElementById("btnOther1000").disabled = true;
}
