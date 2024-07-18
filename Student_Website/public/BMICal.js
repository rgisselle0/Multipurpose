window.addEventListener("load", Intialize);
window.addEventListener("load", AddListener);

function Intialize()
{
	document.getElementById("divAmerican").style.display = "none";
	document.getElementById("divMetric").style.display = "none";
	document.getElementById("lblBMI").innerText = "";
}
function AddListener()
{
	document.getElementById("btnAmerican").addEventListener("click", ShowAmerican);
	document.getElementById("btnMetric").addEventListener("click", ShowMetric);
	document.getElementById("btnMain1").addEventListener("click",ShowMain);
	document.getElementById("btnMain2").addEventListener("click",ShowMain);
	document.getElementById("btnAmericanSub").addEventListener("click",AmericanCal);
	document.getElementById("btnMetricSub").addEventListener("click",MetricCal);

}
function ShowAmerican()
{
	document.getElementById("divMain").style.display = "none";
	document.getElementById("divAmerican").style.display = "block";
	document.getElementById("divMetric").style.display = "none";
	document.getElementById("lblBMI").innerText = "";
}
function ShowMetric()
{
	document.getElementById("divMain").style.display = "none";
	document.getElementById("divMetric").style.display = "block";
	document.getElementById("divAmerican").style.display = "none";
	document.getElementById("lblBMI").innerText = "";
}
function ShowMain()
{
	document.getElementById("divMain").style.display = "block";
	document.getElementById("divAmerican").style.display = "none";
	document.getElementById("divMetric").style.display = "none";
	document.getElementById("intPounds").value = "";
	document.getElementById("intInches").value = "";
	document.getElementById("intKilo").value = "";
	document.getElementById("intMeters").value = "";
	document.getElementById("lblBMI").innerText = "";
}
function AmericanCal()
{
	var PoundsInput, InchesInput, Errormsg;
	PoundsInput = document.getElementById("intPounds").value;
	InchesInput = document.getElementById("intInches").value;
	Errormsg = "Enter valid value";
	if (PoundsInput == "")
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	if (InchesInput == "")
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	if ((InchesInput == "") && (PoundsInput == ""))
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	if (isNaN(PoundsInput) == true)
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	if (isNaN(InchesInput) == true)
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	else
	{
		var Weight,SqHeight,BMIResult;
		Weight = PoundsInput;
		SqHeight = InchesInput * InchesInput;
		BMIResult = Weight / SqHeight;
		BMIResult = BMIResult * 703
		BMIResult = BMIResult.toFixed(1)
		document.getElementById("lblBMI").innerText = "BMI = " + BMIResult;

	}
	document.getElementById("intPounds").value = "";
	document.getElementById("intInches").value = "";
}
function MetricCal()
{
	var KiloInput, MetersInput, Errormsg;
	KiloInput = document.getElementById("intKilo").value;
	MetersInput = document.getElementById("intMeters").value;
	Errormsg = "Enter valid value";
	if (KiloInput == "")
	{
		document.getElementById("intKilo").innerText = Errormsg;
	}
	if (MetersInput == "")
	{
		document.getElementById("intMeters").innerText = Errormsg;
	}
	if ((KiloInput == "") && (MetersInput == ""))
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	if (isNaN(KiloInput) == true)
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	if (isNaN(MetersInput) == true)
	{
		document.getElementById("lblBMI").innerText = Errormsg;
	}
	else
	{
		var Weight,SqHeight,BMIResult;
		Weight = KiloInput;
		SqHeight = MetersInput * MetersInput;
		BMIResult = Weight / SqHeight;
		BMIResult = BMIResult.toFixed(3)
		document.getElementById("lblBMI").innerText = "BMI = " + BMIResult;

	}
	document.getElementById("intKilo").value = "";
	document.getElementById("intMeters").value = "";
}