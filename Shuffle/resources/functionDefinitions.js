var currentWord="";
var currentArray=[];
var scrambleWord = "";
var scrambleArray=[];
words.history = ArrayAdv(words.history,",");
words.tf2 = ArrayAdv(words.tf2,",");
words.puzzle = ArrayAdv(words.puzzle,",");
if(activate)
{
	words.custom1 = ArrayAdv(words.custom1,",");
	words.custom2 = ArrayAdv(words.custom2,",");
	words.custom3 = ArrayAdv(words.custom3,",");
}

var rNumber = function(min,max)
{
	var r = Math.floor(Math.random()*(max-min)+min);
	return r
}
var arrayRandom = function(array)
{
	var r = window.rNumber(0,array.length);
	return array[r]
};
var arrayRandomAlt = function(array)
{
	var r = window.rNumber(1,array.length);
	return array[r]
};
var scramble = function()
{
	do
	{
		while(window.currentArray.length>0)
		{
			window.scrambleArray.push((window.currentArray.splice(window.rNumber(0,window.currentArray.length),1)).join(""));
		}
		window.scrambleWord = window.scrambleArray.join("");
	}
	while (window.currentWord == window.scrambleWord);				
	generation.innerHTML = scrambleWord;
};
var stringSplit = function(string)
{
	var array = [string];
	var arrayString = array.join("");
	var subsetString = "";
	for(i=0;i<arrayString.length;i++)
	{
		subsetString = arrayString.substring(i,i+1);array = array.concat([subsetString]);
	};
	return array
};
var genWord = function()
{
	guess.value="";
	if(theme.value=="history")
	{
		currentWord=arrayRandom([].concat(words.history));
		currentArray=stringSplit(currentWord);
		currentArray.shift();
		scrambleArray=[];
		notification.innerHTML="";
	}
	else if(theme.value=="tf2")
	{
		currentWord=arrayRandom([].concat(words.tf2));
		currentArray=stringSplit(currentWord);
		currentArray.shift();
		scrambleArray=[];
		notification.innerHTML="";
	}
	else if(theme.value=="puzzle")
	{
		currentWord=arrayRandom([].concat(words.puzzle));
		currentArray=stringSplit(currentWord);
		currentArray.shift();
		scrambleArray=[];
		notification.innerHTML="";
	}
	else if(theme.value="fruit")
	{
		currentWord=arrayRandom([].concat(words.fruit));
		currentArray=stringSplit(currentWord);
		currentArray.shift();
		scrambleArray=[];
		notification.innerHTML="";
	}
	else if(theme.value=="custom1")
	{
		currentWord=arrayRandom([].concat(words.custom1));
		currentArray=stringSplit(currentWord);
		currentArray.shift();
		scrambleArray=[];
		notification.innerHTML="";
	}
	else if(theme.value=="custom2")
	{
		currentWord=arrayRandom([].concat(words.custom2));
		currentArray=stringSplit(currentWord);
		currentArray.shift();
		scrambleArray=[];
		notification.innerHTML="";
	}
	else if(theme.value=="custom3")
	{
		currentWord=arrayRandom([].concat(words.custom3));
		currentArray=stringSplit(currentWord);
		currentArray.shift();
		scrambleArray=[];
		notification.innerHTML="";
	}
	scramble();
};
var rShift = function(array)
{
	var a = array;
	var b = a.shift();
	a.push(b);
	return a
};
generate.addEventListener("click",genWord);
var check = function()
{
	if((guess.value).toLowerCase()==currentWord)
	{
		notification.setAttribute("class","center large green");
		notification.innerHTML="Correct!";
	}
	else
	{
		notification.setAttribute("class","center large red");
		notification.innerHTML="Incorrect!";
	}
};
var enterCheck = function(e)
{
	if(e.keyCode==13)
	{
		check();
	}
}
var giveUp = function()
{
	guess.value = currentWord;
}
var focus = function()
{
	guess.select();
}
guessB.addEventListener("click",check);
giveUpB.addEventListener("click",giveUp);
guess.addEventListener("keydown",enterCheck);
generate.addEventListener("click",focus);