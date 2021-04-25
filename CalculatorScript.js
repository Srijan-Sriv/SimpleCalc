/* I realise there are terribly too many repitions of the document function and I should have made a function but I was too
deep into it and couldnt be bothered specially being so close to the deadline. I will try to fix this (or any other problem
pointed out) once I commit to this repo. */
var present = false;
var outputPresent = false;
if(document.getElementById("current").innerText=="")
{
    present = true;
}

function getNum(num0)
{
    if(outputPresent==true)
    {
        document.getElementById("current").innerText = "";
        document.getElementById("current").innerText += num0;
        present = false;
        outputPresent = false;
    }
    else
    {
        document.getElementById("current").innerText += num0;
        present = false;
    }
}

var operator = document.getElementsByClassName("operator");
function getOperator(op0)
{
    if(present==false&&document.getElementById("current").innerText != "")
    {
        if(operator[op0].innerText=='=')
        {
            if(document.getElementById("current").innerText=="")
            {
                ;
            }
            else
            {
                document.getElementById("equation").innerText += document.getElementById("current").innerText;
                var output = eval(document.getElementById("equation").innerText);
                document.getElementById("current").innerText = output;
                outputPresent = true;
                document.getElementById("equation").innerText = "";
            }
        }
        else
        {
            document.getElementById("current").innerText += operator[op0].innerText;
            present = true;
            outputPresent = false;
            document.getElementById("equation").innerText += document.getElementById("current").innerText;
            document.getElementById("current").innerText = "";
        }
    }
    else
    {
        ;
    }
}

function decimal(deci0)
{
    if(present==true)
    {
        ;
    }
    else
    {
        if(deci0=='0')
        {
            document.getElementById("current").innerText += ".";
            present = true;
        }
    }
}

function clearBoth(clr0)
{
    if(clr0=='0')
    {
        document.getElementById("equation").innerText = "";
        document.getElementById("current").innerText = "";
        present = false;
        outputPresent = false;
    }
    else if(clr0=='1')
    {
        if(document.getElementById("current").innerText == "")
        {
            if(document.getElementById("equation").innerText != "")
            {
                var value = document.getElementById("equation").innerText;
                document.getElementById("equation").innerText = value.substr(0, value.length - 1);
                present = false;
                outputPresent = false;
            }
        }
        else
        {
            var value = document.getElementById("current").innerText;
            document.getElementById("current").innerText = value.substr(0, value.length - 1);
            present = false;
            outputPresent = false;
        }
    }
}
