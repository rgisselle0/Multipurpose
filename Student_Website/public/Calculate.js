window.addEventListener("load", addListeners);

function addListeners() 
{
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