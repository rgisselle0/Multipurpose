window.addEventListener("load",initialize);
window.addEventListener("load",AddListener);

function initialize()
{
	document.getElementById("divLives").style.display = "none";
	
	document.getElementById("divStatement1").style.display = "none";
	document.getElementById("btnNext1").style.display = "none";
	
	document.getElementById("divStatement2").style.display = "none";
	document.getElementById("btnNext2").style.display = "none";
	
	document.getElementById("divStatement3").style.display = "none";
	document.getElementById("btnNext3").style.display = "none";
	
	document.getElementById("divStatement4").style.display = "none";
	document.getElementById("btnNext4").style.display = "none";
	
	document.getElementById("divStatement5").style.display = "none";
	document.getElementById("btnNext5").style.display = "none";
	
	document.getElementById("divStatement6").style.display = "none";
	document.getElementById("btnNext6").style.display = "none";
	
	document.getElementById("divStatement7").style.display = "none";
	document.getElementById("btnNext7").style.display = "none";
	
	document.getElementById("divStatement8").style.display = "none";
	document.getElementById("btnNext8").style.display = "none";
	
	document.getElementById("divStatement9").style.display = "none";
	document.getElementById("btnNext9").style.display = "none";
	
	document.getElementById("divLoser").style.display = "none";
	document.getElementById("divWinner").style.display = "none";
	
	document.getElementById("Img1").style.display = "none";
	document.getElementById("Img2").style.display = "none";
	document.getElementById("Img3").style.display = "none";
	document.getElementById("Img4").style.display = "none";
	document.getElementById("Img5").style.display = "none";
	document.getElementById("Img6").style.display = "none";
	document.getElementById("Img7").style.display = "none";
	document.getElementById("Img8").style.display = "none";
	document.getElementById("Img9").style.display = "none";
	
}

function AddListener()
{
	document.getElementById("btnStart").addEventListener("click", Question1);
	
	document.getElementById("btnSub1").addEventListener("click", CheckQuestion1);
	document.getElementById("btnNext1").addEventListener("click", Question2);
	
	document.getElementById("btnSub2").addEventListener("click", CheckQuestion2);
	document.getElementById("btnNext2").addEventListener("click", Question3);
	
	document.getElementById("btnSub3").addEventListener("click", CheckQuestion3);
	document.getElementById("btnNext3").addEventListener("click", Question4);
	
	document.getElementById("btnSub4").addEventListener("click", CheckQuestion4);
	document.getElementById("btnNext4").addEventListener("click", Question5);
	
	document.getElementById("btnSub5").addEventListener("click", CheckQuestion5);
	document.getElementById("btnNext5").addEventListener("click", Question6);
	
	document.getElementById("btnSub6").addEventListener("click", CheckQuestion6);
	document.getElementById("btnNext6").addEventListener("click", Question7);
	
	document.getElementById("btnSub7").addEventListener("click", CheckQuestion7);
	document.getElementById("btnNext7").addEventListener("click", Question8);
	
	document.getElementById("btnSub8").addEventListener("click", CheckQuestion8);
	document.getElementById("btnNext8").addEventListener("click", Question9);
	
	document.getElementById("btnSub9").addEventListener("click", CheckQuestion9);
	document.getElementById("btnNext9").addEventListener("click", Winner);
	
	document.getElementById("btnStartOver").addEventListener("click", Reset);
	document.getElementById("btnPlayAgain").addEventListener("click", Reset);
}
var Lives = 3;
function Question1()
{
	document.getElementById("divMain").style.display = "none";
	document.getElementById("divStatement1").style.display = "block";
	document.getElementById("divLives").style.display = "block";
	
	document.getElementById("Life1").style.display = "block";
	document.getElementById("Life2").style.display = "block";
	document.getElementById("Life3").style.display = "block";
}
function CheckQuestion1()
{
	var Q1input;
	Q1input = document.getElementById("input1").value;
	if (Q1input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q1input == "Temperance") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub1").disabled = true;
    	document.getElementById("input1").disabled = true;
    	document.getElementById("btnNext1").style.display = "block";
    	document.getElementById("Img1").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question2()
{
	document.getElementById("divStatement1").style.display = "none";
	document.getElementById("btnNext1").style.display = "none";
	document.getElementById("divStatement2").style.display = "block";
}
function CheckQuestion2()
{
	var Q2input;
	Q2input = document.getElementById("input2").value;
	if (Q2input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q2input == "Women's Christian Temperance") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub2").disabled = true;
    	document.getElementById("input2").disabled = true;
    	document.getElementById("btnNext2").style.display = "block";
    	document.getElementById("Img2").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question3()
{
	document.getElementById("divStatement2").style.display = "none";
	document.getElementById("btnNext2").style.display = "none";
	document.getElementById("divStatement3").style.display = "block";
}
function CheckQuestion3()
{
	var Q3input;
	Q3input = document.getElementById("input3").value;
	if (Q3input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q3input == "Panic of 1837") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub3").disabled = true;
    	document.getElementById("input3").disabled = true;
    	document.getElementById("btnNext3").style.display = "block";
    	document.getElementById("Img3").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question4()
{
	document.getElementById("divStatement3").style.display = "none";
	document.getElementById("btnNext3").style.display = "none";
	document.getElementById("divStatement4").style.display = "block";
}
function CheckQuestion4()
{
	var Q4input;
	Q4input = document.getElementById("input4").value;
	if (Q4input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q4input == "Frederick Douglass") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub4").disabled = true;
    	document.getElementById("input4").disabled = true;
    	document.getElementById("btnNext4").style.display = "block";
    	document.getElementById("Img4").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question5()
{
	document.getElementById("divStatement4").style.display = "none";
	document.getElementById("btnNext4").style.display = "none";
	document.getElementById("divStatement5").style.display = "block";
}
function CheckQuestion5()
{
	var Q5input;
	Q5input = document.getElementById("input5").value;
	if (Q5input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q5input == "Manifest Destiny") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub5").disabled = true;
    	document.getElementById("input5").disabled = true;
    	document.getElementById("btnNext5").style.display = "block";
    	document.getElementById("Img5").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question6()
{
	document.getElementById("divStatement5").style.display = "none";
	document.getElementById("btnNext5").style.display = "none";
	document.getElementById("divStatement6").style.display = "block";
}
function CheckQuestion6()
{
	var Q6input;
	Q6input = document.getElementById("input6").value;
	if (Q6input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q6input == "Wilmot Proviso") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub6").disabled = true;
    	document.getElementById("input6").disabled = true;
    	document.getElementById("btnNext6").style.display = "block";
    	document.getElementById("Img6").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question7()
{
	document.getElementById("divStatement6").style.display = "none";
	document.getElementById("btnNext6").style.display = "none";
	document.getElementById("divStatement7").style.display = "block";
}
function CheckQuestion7()
{
	var Q7input;
	Q7input = document.getElementById("input7").value;
	if (Q7input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q7input == "Free Soil") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub7").disabled = true;
    	document.getElementById("input7").disabled = true;
    	document.getElementById("btnNext7").style.display = "block";
    	document.getElementById("Img7").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question8()
{
	document.getElementById("divStatement7").style.display = "none";
	document.getElementById("btnNext7").style.display = "none";
	document.getElementById("divStatement8").style.display = "block";
}
function CheckQuestion8()
{
	var Q8input;
	Q8input = document.getElementById("input8").value;
	if (Q8input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q8input == "Popular Sovereignty") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub8").disabled = true;
    	document.getElementById("input8").disabled = true;
    	document.getElementById("btnNext8").style.display = "block";
    	document.getElementById("Img8").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Question9()
{
	document.getElementById("divStatement8").style.display = "none";
	document.getElementById("btnNext8").style.display = "none";
	document.getElementById("divStatement9").style.display = "block";
}
function CheckQuestion9()
{
	var Q9input;
	Q9input = document.getElementById("input9").value;
	if (Q9input == "")
	{
		alert("Enter a valid answer!!");
	}
	else if (Q9input == "Kansas-Nebraska Act") 
	{
    	alert("Correct!!");
    	document.getElementById("btnSub9").disabled = true;
    	document.getElementById("input9").disabled = true;
    	document.getElementById("btnNext9").style.display = "block";
    	document.getElementById("Img9").style.display = "block";
	} 
	else 
	{
		alert("Wrong. You lose a life!");
    	Lives -= 1;
    	switch (Lives)
    	{
			case 2:
				document.getElementById("Life3").style.display = "none";
				break;
			case 1:
				document.getElementById("Life2").style.display = "none";
				break;
			case 0:
				document.getElementById("Life1").style.display = "none";
    			alert("You lost!!");
    			Loser();
    			break;
    		default:
				alert("Error")
				break;
		}
	}
}
function Loser()
{
	document.getElementById("divLoser").style.display = "block";
	document.getElementById("divLives").style.display = "none";
	
	document.getElementById("divStatement1").style.display = "none";
	document.getElementById("btnNext1").style.display = "none";
	
	document.getElementById("divStatement2").style.display = "none";
	document.getElementById("btnNext2").style.display = "none";
	
	document.getElementById("divStatement3").style.display = "none";
	document.getElementById("btnNext3").style.display = "none";
	
	document.getElementById("divStatement4").style.display = "none";
	document.getElementById("btnNext4").style.display = "none";
	
	document.getElementById("divStatement5").style.display = "none";
	document.getElementById("btnNext5").style.display = "none";
	
	document.getElementById("divStatement6").style.display = "none";
	document.getElementById("btnNext6").style.display = "none";
	
	document.getElementById("divStatement7").style.display = "none";
	document.getElementById("btnNext7").style.display = "none";
	
	document.getElementById("divStatement8").style.display = "none";
	document.getElementById("btnNext8").style.display = "none";
	
	document.getElementById("divStatement9").style.display = "none";
	document.getElementById("btnNext9").style.display = "none";
	
	document.getElementById("divImg").style.display = "none";
}
function Winner()
{
	document.getElementById("divStatement9").style.display = "none";
	document.getElementById("btnNext9").style.display = "none";
	document.getElementById("divWinner").style.display = "block";
}
function Reset()
{
	document.getElementById("divMain").style.display = "block";
	Lives = 3;
	document.getElementById("btnSub1").disabled = false;
    document.getElementById("input1").disabled = false;
    document.getElementById("btnSub2").disabled = false;
    document.getElementById("input2").disabled = false;
    document.getElementById("btnSub3").disabled = false;
    document.getElementById("input3").disabled = false;
    document.getElementById("btnSub4").disabled = false;
    document.getElementById("input4").disabled = false;
    document.getElementById("btnSub5").disabled = false;
    document.getElementById("input5").disabled = false;
    document.getElementById("btnSub6").disabled = false;
    document.getElementById("input6").disabled = false;
    document.getElementById("btnSub7").disabled = false;
    document.getElementById("input7").disabled = false;
    document.getElementById("btnSub8").disabled = false;
    document.getElementById("input8").disabled = false;
    document.getElementById("btnSub9").disabled = false;
    document.getElementById("input9").disabled = false;
    
	document.getElementById("input1").value = "";
	document.getElementById("input2").value = "";
	document.getElementById("input3").value = "";
	document.getElementById("input4").value = "";
	document.getElementById("input5").value = "";
	document.getElementById("input6").value = "";
	document.getElementById("input7").value = "";
	document.getElementById("input8").value = "";
	document.getElementById("input9").value = "";
	initialize();
}