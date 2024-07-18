window.addEventListener("load", InitControls);
window.addEventListener("load", addListeners);
window.addEventListener("load", CalListenr);

function InitControls()
{
	document.getElementById("btnsub1").style.display = "none";
	document.getElementById("btnNext1").style.display = "none";
	
	document.getElementById("Hidebtn").style.display = "none";
	document.getElementById("divCalculator").style.display = "none";
	
	document.getElementById("divAlg2").style.display = "none";
	document.getElementById("btnsub2").style.display = "none";
	document.getElementById("btnNext2").style.display = "none";
	
	document.getElementById("divAlg3").style.display = "none";
	document.getElementById("btnsub3").style.display = "none";
	document.getElementById("btnNext3").style.display = "none";
	
	document.getElementById("divAlg4").style.display = "none";
	document.getElementById("btnsub4").style.display = "none";
	document.getElementById("btnNext4").style.display = "none";	
	
	document.getElementById("divAlg5").style.display = "none";
	document.getElementById("btnsub5").style.display = "none";
	document.getElementById("btnNext5").style.display = "none";
	
	document.getElementById("divAlg6").style.display = "none";
	document.getElementById("btnsub6").style.display = "none";
	document.getElementById("btnNext6").style.display = "none";

	document.getElementById("divAlg7").style.display = "none";
	document.getElementById("btnsub7").style.display = "none";
	document.getElementById("btnNext7").style.display = "none";

	document.getElementById("divAlg8").style.display = "none";
	document.getElementById("btnsub8").style.display = "none";
	document.getElementById("btnNext8").style.display = "none";
	
	document.getElementById("divAlg9").style.display = "none";
	document.getElementById("btnNext9").style.display = "none";
	
	document.getElementById("divAlg10").style.display = "none";
	document.getElementById("btnNext10").style.display = "none";
	document.getElementById("divAlgRev").style.display = "none";

}
function addListeners() 
{
	document.getElementById("oneAbtn").addEventListener("click", CheckOneA);
	document.getElementById("oneBbtn").addEventListener("click", CheckOneB);
	document.getElementById("oneCbtn").addEventListener("click", CheckOneC);
	document.getElementById("oneDbtn").addEventListener("click", CheckOneD);
	document.getElementById("btnsub1").addEventListener("click", CheckQ1);
	document.getElementById("btnNext1").addEventListener("click", Question2);
	
	document.getElementById("twoAbtn").addEventListener("click", CheckTwoA);
	document.getElementById("twoBbtn").addEventListener("click", CheckTwoB);
	document.getElementById("twoCbtn").addEventListener("click", CheckTwoC);
	document.getElementById("twoDbtn").addEventListener("click", CheckTwoD);
	document.getElementById("btnsub2").addEventListener("click", CheckQ2);
	document.getElementById("btnNext2").addEventListener("click", Question3);
	
	document.getElementById("threeAbtn").addEventListener("click", CheckThreeA);
	document.getElementById("threeBbtn").addEventListener("click", CheckThreeB);
	document.getElementById("threeCbtn").addEventListener("click", CheckThreeC);
	document.getElementById("threeDbtn").addEventListener("click", CheckThreeD);
	document.getElementById("btnsub3").addEventListener("click", CheckQ3);
	document.getElementById("btnNext3").addEventListener("click", Question4);
	
	document.getElementById("fourAbtn").addEventListener("click", CheckFourA);
	document.getElementById("fourBbtn").addEventListener("click", CheckFourB);
	document.getElementById("fourCbtn").addEventListener("click", CheckFourC);
	document.getElementById("fourDbtn").addEventListener("click", CheckFourD);
	document.getElementById("btnsub4").addEventListener("click", CheckQ4);
	document.getElementById("btnNext4").addEventListener("click", Question5);
	
	document.getElementById("fiveAbtn").addEventListener("click", CheckFiveA);
	document.getElementById("fiveBbtn").addEventListener("click", CheckFiveB);
	document.getElementById("fiveCbtn").addEventListener("click", CheckFiveC);
	document.getElementById("fiveDbtn").addEventListener("click", CheckFiveD);
	document.getElementById("btnsub5").addEventListener("click", CheckQ5);
	document.getElementById("btnNext5").addEventListener("click", Question6);
	
	document.getElementById("sixAbtn").addEventListener("click", CheckSixA);
	document.getElementById("sixBbtn").addEventListener("click", CheckSixB);
	document.getElementById("sixCbtn").addEventListener("click", CheckSixC);
	document.getElementById("sixDbtn").addEventListener("click", CheckSixD);
	document.getElementById("btnsub6").addEventListener("click", CheckQ6);
	document.getElementById("btnNext6").addEventListener("click", Question7);
	
	document.getElementById("sevenAbtn").addEventListener("click", CheckSevenA);
	document.getElementById("sevenBbtn").addEventListener("click", CheckSevenB);
	document.getElementById("sevenCbtn").addEventListener("click", CheckSevenC);
	document.getElementById("sevenDbtn").addEventListener("click", CheckSevenD);
	document.getElementById("btnsub7").addEventListener("click", CheckQ7);
	document.getElementById("btnNext7").addEventListener("click", Question8);
	
	document.getElementById("eightAbtn").addEventListener("click", CheckEightA);
	document.getElementById("eightBbtn").addEventListener("click", CheckEightB);
	document.getElementById("eightCbtn").addEventListener("click", CheckEightC);
	document.getElementById("eightDbtn").addEventListener("click", CheckEightD);
	document.getElementById("btnsub8").addEventListener("click", CheckQ8);
	document.getElementById("btnNext8").addEventListener("click", Question9);
	
	document.getElementById("btnsub9").addEventListener("click", CheckQuestion9);
	document.getElementById("btnNext9").addEventListener("click", Question10);
	
	document.getElementById("btnsub10").addEventListener("click", CheckQuestion10);
	document.getElementById("btnNext10").addEventListener("click", Review);
	
	document.getElementById("btnTryAgain").addEventListener("click", TryAgain);
}
function CalListenr ()
{
	document.getElementById("Showbtn").addEventListener("click", ShowCal);
	document.getElementById("Hidebtn").addEventListener("click", HideCal);
	
	document.getElementById("btnseven").addEventListener("click", seven);
	document.getElementById("btneight").addEventListener("click", eight);
	document.getElementById("btnnine").addEventListener("click", nine);
	document.getElementById("btnfour").addEventListener("click", four);
	document.getElementById("btnfive").addEventListener("click", five);
	document.getElementById("btnsix").addEventListener("click", six);
	document.getElementById("btnone").addEventListener("click", one);
	document.getElementById("btntwo").addEventListener("click", two);
	document.getElementById("btnthree").addEventListener("click", three);
	document.getElementById("btnzero").addEventListener("click", zero);
	document.getElementById("btnadd").addEventListener("click", addnum);
	document.getElementById("btnmulti").addEventListener("click", multiply);
	document.getElementById("btndivide").addEventListener("click", divide);
	document.getElementById("btnsub").addEventListener("click", sub);
	document.getElementById("btndecimal").addEventListener("click", decimal);
	document.getElementById("btnnegtive").addEventListener("click", negtive);
	document.getElementById("btnclear").addEventListener("click", clear);
	document.getElementById("btnequal").addEventListener("click", equal);
}
function ShowCal()
{
	document.getElementById("Showbtn").style.display = "none";
	document.getElementById("divCalculator").style.display = "block";
	document.getElementById("Hidebtn").style.display = "block";
}
function HideCal()
{
	document.getElementById("Hidebtn").style.display = "none";
	document.getElementById("divCalculator").style.display = "none";
	document.getElementById("Showbtn").style.display = "block";
}
Q1 = "";
Q2 = "";
Q3 = "";
Q4 = "";
Q5 = "";
Q6 = "";
Q7 = "";
Q8 = "";
Q9 = "";
Q10 = "";
function CheckOneA()
{
	Q1 = "Wrong"
	document.getElementById("btnsub1").style.display = "block";
}
function CheckOneB()
{
	Q1 = "Wrong"
	document.getElementById("btnsub1").style.display = "block";
}
function CheckOneC()
{
	Q1 = "Wrong"
	document.getElementById("btnsub1").style.display = "block";
}
function CheckOneD()
{
	Q1 = "Correct"
	document.getElementById("btnsub1").style.display = "block";
}
function CheckQ1()
{
	switch (Q1)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("oneAbtn").disabled = true;
	document.getElementById("oneBbtn").disabled = true;
	document.getElementById("oneCbtn").disabled = true;
	document.getElementById("oneDbtn").disabled = true;
	document.getElementById("btnsub1").disabled = true;
	document.getElementById("btnNext1").style.display = "block";
}

function Question2 ()
{
	document.getElementById("divAlg1").style.display = "none";
	document.getElementById("btnsub1").style.display = "none";
	document.getElementById("btnNext1").style.display = "none";
	document.getElementById("divAlg2").style.display = "block";
	
}
function CheckTwoA()
{
	Q2 = "Correct"
	document.getElementById("btnsub2").style.display = "block";
}
function CheckTwoB()
{
	Q2 = "Wrong"
	document.getElementById("btnsub2").style.display = "block";
}
function CheckTwoC()
{
	Q2 = "Wrong"
	document.getElementById("btnsub2").style.display = "block";
}
function CheckTwoD()
{
	Q2 = "Wrong"
	document.getElementById("btnsub2").style.display = "block";
}
function CheckQ2()
{
	switch (Q2)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("twoAbtn").disabled = true;
	document.getElementById("twoBbtn").disabled = true;
	document.getElementById("twoCbtn").disabled = true;
	document.getElementById("twoDbtn").disabled = true;
	document.getElementById("btnsub2").disabled = true;
	document.getElementById("btnNext2").style.display = "block";
}

function Question3()
{
	document.getElementById("divAlg2").style.display = "none";
	document.getElementById("btnsub2").style.display = "none";
	document.getElementById("btnNext2").style.display = "none";
	document.getElementById("divAlg3").style.display = "block";
	 
}
function CheckThreeA()
{
	Q3 = "Correct"
	document.getElementById("btnsub3").style.display = "block";
}
function CheckThreeB()
{
	Q3 = "Wrong"
	document.getElementById("btnsub3").style.display = "block";
}
function CheckThreeC()
{
	Q3 = "Wrong"
	document.getElementById("btnsub3").style.display = "block";
}
function CheckThreeD()
{
	Q3 = "Wrong"
	document.getElementById("btnsub3").style.display = "block";
}
function CheckQ3()
{
	switch (Q3)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("threeAbtn").disabled = true;
	document.getElementById("threeBbtn").disabled = true;
	document.getElementById("threeCbtn").disabled = true;
	document.getElementById("threeDbtn").disabled = true;
	document.getElementById("btnsub3").disabled = true;
	document.getElementById("btnNext3").style.display = "block";
}

function Question4()
{
	document.getElementById("divAlg3").style.display = "none";
	document.getElementById("btnsub3").style.display = "none";
	document.getElementById("btnNext3").style.display = "none";
	document.getElementById("divAlg4").style.display = "block";
	
}
function CheckFourA()
{
	Q4 = "Wrong"
	document.getElementById("btnsub4").style.display = "block";
}
function CheckFourB()
{
	Q4 = "Wrong"
	document.getElementById("btnsub4").style.display = "block";
}
function CheckFourC()
{
	Q4 = "Correct"
	document.getElementById("btnsub4").style.display = "block";
}
function CheckFourD()
{
	Q4 = "Wrong"
	document.getElementById("btnsub4").style.display = "block";
}
function CheckQ4()
{
	switch (Q4)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("fourAbtn").disabled = true;
	document.getElementById("fourBbtn").disabled = true;
	document.getElementById("fourCbtn").disabled = true;
	document.getElementById("fourDbtn").disabled = true;
	document.getElementById("btnsub4").disabled = true;
	document.getElementById("btnNext4").style.display = "block";
}

function Question5()
{
	document.getElementById("divAlg4").style.display = "none";
	document.getElementById("btnsub4").style.display = "none";
	document.getElementById("btnNext4").style.display = "none";
	document.getElementById("divAlg5").style.display = "block";
	
}
function CheckFiveA()
{
	Q5 = "Wrong"
	document.getElementById("btnsub5").style.display = "block";
}
function CheckFiveB()
{
	Q5 = "Correct"
	document.getElementById("btnsub5").style.display = "block";
}
function CheckFiveC()
{
	Q5 = "Wrong"
	document.getElementById("btnsub5").style.display = "block";
}
function CheckFiveD()
{
	Q5 = "Wrong"
	document.getElementById("btnsub5").style.display = "block";
}
function CheckQ5()
{
	switch (Q5)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("fiveAbtn").disabled = true;
	document.getElementById("fiveBbtn").disabled = true;
	document.getElementById("fiveCbtn").disabled = true;
	document.getElementById("fiveDbtn").disabled = true;
	document.getElementById("btnsub5").disabled = true;
	document.getElementById("btnNext5").style.display = "block";
}

function Question6()
{
	document.getElementById("divAlg5").style.display = "none";
	document.getElementById("btnsub5").style.display = "none";
	document.getElementById("btnNext5").style.display = "none";
	document.getElementById("divAlg6").style.display = "block";
	
}
function CheckSixA()
{
	Q6 = "Correct"
	document.getElementById("btnsub6").style.display = "block";
}
function CheckSixB()
{
	Q6 = "Wrong"
	document.getElementById("btnsub6").style.display = "block";
}
function CheckSixC()
{
	Q6 = "Wrong"
	document.getElementById("btnsub6").style.display = "block";
}
function CheckSixD()
{
	Q6 = "Wrong"
	document.getElementById("btnsub6").style.display = "block";
}
function CheckQ6()
{
	switch (Q6)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("sixAbtn").disabled = true;
	document.getElementById("sixBbtn").disabled = true;
	document.getElementById("sixCbtn").disabled = true;
	document.getElementById("sixDbtn").disabled = true;
	document.getElementById("btnsub6").disabled = true;
	document.getElementById("btnNext6").style.display = "block";
}

function Question7()
{
	document.getElementById("divAlg6").style.display = "none";
	document.getElementById("btnsub6").style.display = "none";
	document.getElementById("btnNext6").style.display = "none";
	document.getElementById("divAlg7").style.display = "block";
	
}
function CheckSevenA()
{
	Q7 = "Wrong"
	document.getElementById("btnsub7").style.display = "block";
}
function CheckSevenB()
{
	Q7 = "Wrong"
	document.getElementById("btnsub7").style.display = "block";
}
function CheckSevenC()
{
	Q7 = "Correct"
	document.getElementById("btnsub7").style.display = "block";
}
function CheckSevenD()
{
	Q7 = "Wrong"
	document.getElementById("btnsub7").style.display = "block";
}
function CheckQ7()
{
	switch (Q7)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("sevenAbtn").disabled = true;
	document.getElementById("sevenBbtn").disabled = true;
	document.getElementById("sevenCbtn").disabled = true;
	document.getElementById("sevenDbtn").disabled = true;
	document.getElementById("btnsub7").disabled = true;
	document.getElementById("btnNext7").style.display = "block";
}

function Question8()
{
	document.getElementById("divAlg7").style.display = "none";
	document.getElementById("btnsub7").style.display = "none";
	document.getElementById("btnNext7").style.display = "none";
	document.getElementById("divAlg8").style.display = "block";
	
}
function CheckEightA()
{
	Q8 = "Wrong"
	document.getElementById("btnsub8").style.display = "block";
}
function CheckEightB()
{
	Q8 = "Correct"
	document.getElementById("btnsub8").style.display = "block";
}
function CheckEightC()
{
	Q8 = "Wrong"
	document.getElementById("btnsub8").style.display = "block";
}
function CheckEightD()
{
	Q8 = "Wrong"
	document.getElementById("btnsub8").style.display = "block";
}
function CheckQ8()
{
	switch (Q8)
	{
		case "Wrong":
			alert("Wrong")
			break;
		case "Correct":
			alert("Correct")
			break;
		default:
			alert("Error")
			break;
	}
	document.getElementById("eightAbtn").disabled = true;
	document.getElementById("eightBbtn").disabled = true;
	document.getElementById("eightCbtn").disabled = true;
	document.getElementById("eightDbtn").disabled = true;
	document.getElementById("btnsub8").disabled = true;
	document.getElementById("btnNext8").style.display = "block";
}
function Question9()
{
	document.getElementById("divAlg8").style.display = "none";
	document.getElementById("btnsub8").style.display = "none";
	document.getElementById("btnNext8").style.display = "none";
	document.getElementById("divAlg9").style.display = "block";
}
function CheckQuestion9()
{
	var Q9input;
	Q9input = document.getElementById("NineInput").value
	if (Q9input == "")
	{
		alert("Enter a value");
	}
	else if (Q9input == 4)
	{
		alert("The answer is correct");
		Q9 = "Correct";
	}
	else
	{
		alert("The answer is wrong");
		Q9 = "Wrong";
	}
	document.getElementById("NineInput").disabled = true;
	document.getElementById("btnsub9").disabled = true;
	document.getElementById("btnNext9").style.display = "block";
}
function Question10()
{
	document.getElementById("divAlg9").style.display = "none";
	document.getElementById("btnsub9").style.display = "none";
	document.getElementById("btnNext9").style.display = "none";
	document.getElementById("divAlg10").style.display = "block";
}
function CheckQuestion10()
{	
	var Q10input;
	Q10input = document.getElementById("TenInput").value
	if (Q10input = "")
	{
		alert("Enter a value");
	}
	if (Q10input == "(x+2)(x+3)")
	{
		alert("The answer is correct");
		Q10 = "Correct";
	}
	else
	{
		alert("The answer is wrong");
		Q10 = "Wrong";
	}
	document.getElementById("TenInput").disabled = true;
	document.getElementById("btnsub10").disabled = true;
	document.getElementById("btnNext10").style.display = "block";
}
function Review()
{
	var NumCorrect;
	NumCorrect = 0
	if (Q1 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q2 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q3 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q4 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q5 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q6 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q7 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q8 == "Correct") 
	{
    	NumCorrect += 1;
	}
	if (Q9 == "Correct") 
	{
   		NumCorrect += 1;
	}
	if (Q10 == "Correct") 
	{
    	NumCorrect += 1;
	}
	document.getElementById("lblCorrect").innerText = NumCorrect
	
	document.getElementById("divAlg10").style.display = "none";
	document.getElementById("btnsub10").style.display = "none";
	document.getElementById("btnNext10").style.display = "none";
	document.getElementById("divAlgRev").style.display = "block";
}
function TryAgain()
{
	document.getElementById("oneAbtn").disabled = false;
	document.getElementById("oneBbtn").disabled = false;
	document.getElementById("oneCbtn").disabled = false;
	document.getElementById("oneDbtn").disabled = false;
	document.getElementById("btnsub1").disabled = false;
	
	document.getElementById("twoAbtn").disabled = false;
	document.getElementById("twoBbtn").disabled = false;
	document.getElementById("twoCbtn").disabled = false;
	document.getElementById("twoDbtn").disabled = false;
	document.getElementById("btnsub2").disabled = false;
	
	document.getElementById("threeAbtn").disabled = false;
	document.getElementById("threeBbtn").disabled = false;
	document.getElementById("threeCbtn").disabled = false;
	document.getElementById("threeDbtn").disabled = false;
	document.getElementById("btnsub3").disabled = false;
	
	document.getElementById("fourAbtn").disabled = false;
	document.getElementById("fourBbtn").disabled = false;
	document.getElementById("fourCbtn").disabled = false;
	document.getElementById("fourDbtn").disabled = false;
	document.getElementById("btnsub4").disabled = false;
	
	document.getElementById("fiveAbtn").disabled = false;
	document.getElementById("fiveBbtn").disabled = false;
	document.getElementById("fiveCbtn").disabled = false;
	document.getElementById("fiveDbtn").disabled = false;
	document.getElementById("btnsub5").disabled = false;
	
	document.getElementById("sixAbtn").disabled = false;
	document.getElementById("sixBbtn").disabled = false;
	document.getElementById("sixCbtn").disabled = false;
	document.getElementById("sixDbtn").disabled = false;
	document.getElementById("btnsub6").disabled = false;
	
	document.getElementById("sevenAbtn").disabled = false;
	document.getElementById("sevenBbtn").disabled = false;
	document.getElementById("sevenCbtn").disabled = false;
	document.getElementById("sevenDbtn").disabled = false;
	document.getElementById("btnsub7").disabled = false;
	
	document.getElementById("eightAbtn").disabled = false;
	document.getElementById("eightBbtn").disabled = false;
	document.getElementById("eightCbtn").disabled = false;
	document.getElementById("eightDbtn").disabled = false;
	document.getElementById("btnsub8").disabled = false;
	
	document.getElementById("NineInput").disabled = false;
	document.getElementById("btnsub9").disabled = false;
	
	document.getElementById("TenInput").disabled = false;
	document.getElementById("btnsub10").disabled = false;
	
	document.getElementById("divAlg1").style.display = "block";
	InitControls();
}
function seven() 
{
  var valseven;
  valseven = document.getElementById("btnseven").textContent;
  valseven = parseFloat(valseven);
  number += valseven;
  document.getElementById("lblresult").textContent = number;
}
function eight() 
{
	var valeight;
    valeight = document.getElementById("btneight").textContent;
    valeight = parseFloat(valeight);
    number += valeight;
  	document.getElementById("lblresult").textContent = number;
}
function nine() 
{
	var valnine;
    valnine = document.getElementById("btnnine").textContent;
    valnine = parseFloat(valnine);
    number += valnine;
  	document.getElementById("lblresult").textContent = number;
}
function four() 
{
	var valfour;
    valfour = document.getElementById("btnfour").textContent;
    valfour = parseFloat(valfour);
    number += valfour;
  	document.getElementById("lblresult").textContent = number;
}
function five() 
{
	var valfive;
    valfive = document.getElementById("btnfive").textContent;
    valfive = parseFloat(valfive);
    number += valfive;
  	document.getElementById("lblresult").textContent = number;
}
function six() 
{
	var valsix;
    valsix = document.getElementById("btnsix").textContent;
    valsix = parseFloat(valsix);
    number += valsix;
  	document.getElementById("lblresult").textContent = number;
}
function one() 
{
	var valone;
    valone = document.getElementById("btnone").textContent;
    valone = parseFloat(valone);
    document.getElementById("lblresult").textContent = valone;
    number += valone;
  	document.getElementById("lblresult").textContent = number;
}
function two() 
{
	var valtwo;
    valtwo = document.getElementById("btntwo").textContent;
    valtwo = parseFloat(valtwo);
    number += valtwo;
  	document.getElementById("lblresult").textContent = number;
}
function three() 
{
	var valthree;
    valthree = document.getElementById("btnthree").textContent;
    valthree = parseFloat(valthree);
    number += valthree;
  	document.getElementById("lblresult").textContent = number;
}
function zero() 
{
	var valzero;
    valzero = document.getElementById("btnzero").textContent;
    valzero = parseFloat(valzero);
    number += valzero;
  	document.getElementById("lblresult").textContent = number;
}

var number = "";
var result = 0;
var sign = 0;

function addnum() 
{	
	operator = "+";
	if (Number.isInteger(number) === false)
	{
		number = parseFloat(number);	
	}
	if (Number.isInteger(number) === true)
	{
		number = parseInt(number);	
	}
	if (sign === 0) 
	{
		result = number;
		sign = 1;
		number = "";
	}
	if (sign === 1)
	{
		result += number;
		number = "";
	}
}


function multiply()
{	
	operator = "*";
	if (Number.isInteger(number) === false)
	{
		number = parseFloat(number);	
	}
	if (Number.isInteger(number) === true)
	{
		number = parseInt(number);	
	}
	if (sign === 0) 
	{
		result = number;
		sign = 1;
		number = "";
	}
	if (sign === 1)
	{
		result *= number;
		number = "";
	}
}

function sub()
{	
	operator = "-";
	if (Number.isInteger(number) === false)
	{
		number = parseFloat(number);	
	}
	if (Number.isInteger(number) === true)
	{
		number = parseInt(number);	
	}
	if (sign === 0) 
	{
		result = number;
		sign = 1;
		number = "";
	}
	else if (sign === 1)
	{
		result -= number;
		number = "";
	}
}

function divide()
{	
	operator = "/";
	if (Number.isInteger(number) === false)
	{
		number = parseFloat(number);	
	}
	if (Number.isInteger(number) === true)
	{
		number = parseInt(number);	
	}
	if (sign === 0) 
	{
		result = number;
		sign = 1;
		number = "";
	}
	else if (sign === 1)
	{
		result /= number;
		number = "";
	}
}

function decimal()
{
	number += ".";
  	document.getElementById("lblresult").textContent = number;
}

function negtive()
{
	number = (parseFloat(number) * -1).toString();
    document.getElementById("lblresult").textContent = number;
}

function equal()
{
	if (sign === 1 )
	{
		if (operator === "+") 
		{
			addnum();
			} else if (operator === "-") 
			{
				sub();
				} else if (operator === "*") 
				{
					multiply();
					} else if (operator === "/") 
					{
						divide();
					}
	}
	document.getElementById("lblresult").textContent = result;
}

function clear()
{
	number = "";
	sign = 0;
	document.getElementById("lblresult").textContent = number;
}