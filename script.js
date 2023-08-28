var ids = "2736 237 89 481 401 2753 496 46 236 37 2776 404 2756 165 112 2757 2801 324 9 2808 425 191 115 18 248 148 346 321 2807 569 101 2760 486 177 259 2781 35 2759 141 494 299 2780 2797 273 2773 385 204 255 410 251 2813 301 454 79 360 109 2740 383 469 367 65 2821 81 2802 284 217 479 187 61 247 240 8 498 126 183 121 2815 231 377 40 2789 362 268 277 157 475 221 333 2775 432 376 45 159 2764 2765 282 491 2774 198 490 59 2779 331 152 78 194 196 357 402 2800 86 222 2766 416 2794 4 130 225 363 23 458 408 378 120 99 342 2758 2770 371 138 2747 373 519 233 164 2755 2791 182 94 2805 329 2810 227 2820 2737 73 2790 307 75 317 62 375 258 1 517 2761 356 102 168 82 239 2767 403 213 405 219 144 207 270 2472 242 391 495 488 424 80 2746 2745 33 163 202 93 2772 2769 16 123 25 2741 390 2783 12 2824 90 137 51 311 44 20 349 320 2768 380 243 451 246 113 298 2752 106 2784 110 189 257 146 56 22 2777 2751 172 571 166 147 386 354 72 173 74 2809 55 58 274 48 2804 300 2771 256 124 293 368 400 295 260 232 2750 2754 118 2748 32 348 2795 149 322 60 281 21 265 17 2787 193 341 49 13 230 2819 2744 412 2734 39 330 337 382 276 2743 267 119 127 332 294 450 155 174 374 64 200 151 28 254 234 2806 315 279 76 323 2778 336 156 117 150 210 327 224 10 409 497 253 339 139 122 388 169 2739 384 84 245 212 387 52 2785 252 6 286 359 180 143 2762 2799 2811 211 92 136 2788 7 199 399 2733 272 2823 54 142 2796 2816 570 2471 2817 353 226 67 70 520 312 361 2749 2792 2782 241 108 2822 128 351 34 41 206 203 162 287 3 2473 406 2738 96 208 24 350 184 2818 111 160 493 489 197 133 413 2793 27 2742 167 2763 264 116 98 186 179 36 355 14 2798 2803 518 319 2814 215 338 223 131 15 42 269 114 2735 218 216 195 153 140 181 352 266 68 2825 38 2812 318 303 105 135 328 205 2786 280".split(" ");
var names = [   "Jim Bowman",   "Lou Dubois",   "Bill Flentye",   "John Heath",   "Lang Hobgood",   "Bill Parsons",   "Ray Brown",   "Tom Connelly",   "Tom Cowdrick",   "Chuck Holley",   "Bill Mock",   "Bob Moyer",   "Glenn Price",   "Cy Valasek",   "J. Clyde Allen",   "Bill McCahan",   "Raymond Spuhler",   "Bill Bailey",   "George Balitsaris",   "Curtis Beall",   "Gene Bledsoe",   "Pat Curry",   "Bob Gantt",   "Richard Gilbert",   "Harry Harner",   "Howard Hartley",   "Wright Hollingsworth",   "Henry Hyde",   "Sidney Larkin",   "Robert Metzler",   "Kelly Mote",   "Kenny Turner",   "Bill Wright",   "Gordon Carver",   "Bob Lapp",   "Doug Ausbon",   "Irving Gray",   "Garland Loftis",   "Sammy Rothbaum",   "John Seward",   "Walt Poplin",   "Bill Armour",   "Ray Campbell",   "Ben Collins",   "Benner Crigler",   "Bob Duff",   "Don Farinella",   "George Godfrey",   "Dick Gordon",   "Harold Hibbitts",   "Hal Lynch",   "Carl Sapp",   "Tom Wallingford",   "Buck Cheek",   "Tommy Hughes",   "Bill Martin",   "Dave Scarborough",   "Wes Skibstead",   "Corren Youmans",   "Rod Boyce",   "Bill Downing",   "John Engberg",   "Red Kulpan",   "Scotty York",   "Dick Crowder",   "Kes Deimling",   "Bill Fleming",   "Carl Glasow",   "Dick Groat",   "Dick Johnson",   "Dick Latimer",   "Tommy Peters",   "Bill Riegel",   "Rudy D'Emilio",   "Marv Decker",   "Charles Driesell",   "Bernie Janicki",   "Rudy Lacy",   "Fred Shabel",   "Tom Blackburn",   "Marty Doherty",   "Herky Lamley",   "Jim Rogers",   "Bob Thuemmel",   "Don Tobin",   "Hal Turner",   "Joe Belmont",   "Tony Buhowsky",   "Don Cashman",   "Jack Kalbfus",   "Ronnie Mayer",   "Junior Morgan",   "Ed Bryson",   "Joe Marcovecchio",   "Dick Rosenthal",   "Bucky Allen",   "Hayes Clement",   "Bobby Joe Harris",   "Bob Lakata",   "Jim Newcome",   "Paul Schmidt",   "Bob Vernon",   "Jack Boyd",   "Marty Joyce",   "Johnny Morris",   "Jerry Robertson",   "Bill Watson",   "Bob Wayand",   "Larry Bateman",   "C.B. Johnson",   "Doug Albright",   "Jay Beal",   "John Cantwell",   "John Frye",   "Howard Hurt",   "Doug Kistler",   "Merrill Morgan",   "Carroll Youngkin",   "Tom Gebbie",   "Roger Hamilton",   "Fred Kast",   "Buzz Mewhort",   "Jack Mullen",   "Fred Cox",   "Art Heyman",   "Bob Jamieson",   "Fred Schmidt",   "Bill Ulrich",   "Scott Williamson",   "Jay Buckley",   "Ray Cox",   "Buzzy Harrison",   "Frank Harscher",   "Ted Mann",   "Jeff Mullins",   "Terry Murray",   "Denny Ferguson",   "Burton Fitts",   "Ron Herbster",   "Brent Kitching",   "Elliott McBride",   "Hack Tison",   "Phil Allen",   "Jack Marin",   "Steve Vacendak",   "Dick Warren",   "Bill Zimmer",   "Jim Liccardo",   "Stuart McKaig",   "Bob Riedy",   "Bob Verga",   "Tony Barone",   "Joe Kennedy",   "Tim Kolodziej",   "Mike Lewis",   "Ron Wendelin",   "Warren Chapman",   "C.B. Claiborne",   "Dave Golden",   "Fred Lind",   "Steve Vandenberg",   "Don Blackman",   "Doug Jackson",   "Ray Kuhlmeier",   "John Posen",   "Glen Smiley",   "Tim Teer",   "Judge Carr",   "Jeff Dawson",   "Randy Denton",   "Dick DeVenzio",   "Brad Evans",   "Rick Katherman",   "Steve Litz",   "Larry Saunders",   "Pat Doughty",   "Zeno Edwards",   "Richie O'Connor",   "Ron Righter",   "Robby West",   "Stu Yarbrough",   "Gary Melchionni",   "Alan Shaw",   "Edgar Burch",   "Jeff Burdette",   "Neil Chinault",   "Bob Cook",   "Chris Redding",   "Kevin Billerman",   "Bob Fleischer",   "Pete Kramer",   "Bill Suk",   "Terry Chili",   "Paul Fox",   "Rick Gomez",   "Willie Hodge",   "George Moses",   "Dave O'Connell",   "Kenny Young",   "Tate Armstrong",   "Mark Crow",   "Cameron Hall",   "Rick Mainwaring",   "Geoff Northrop",   "Bruce Bell",   "Scott Goetsch",   "Steve Gray",   "Rob Hardy",   "John Harrell",   "Harold Morrison",   "Jim Spanarkel",   "Bob Bender",   "Jim Corrigan",   "Mike Gminski",   "Gene Banks",   "Kenny Dennard",   "Larry Linney",   "Jim Suddath",   "Ned Franke",   "Vince Taylor",   "Gordon Whitted",   "Allen Williams",   "Tom Emma",   "Chip Engelland",   "Bill Jackman",   "Mike Tissaw",   "Greg Wendt",   "Richard Ford",   "Doug McNeely",   "Todd Anderson",   "Jay Bryan",   "Dan Meagher",   "Mark Alarie",   "Jay Bilas",   "Johnny Dawkins",   "David Henderson",   "Weldon Williams",   "Tommy Amaker",   "Martin Nessley",   "Billy King",   "Kevin Strickland",   "George Burgin",   "Danny Ferry",   "John Smith",   "Quin Snyder",   "Alaa Abdelnaby",   "Robert Brickey",   "Joe Cook",   "Phil Henderson",   "Clay Buckley",   "Greg Koubek",   "Bill McCaffrey",   "Crawford Palmer",   "Christian Ast",   "Ron Burt",   "Brian Davis",   "Christian Laettner",   "Kenney Brown",   "Thomas Hill",   "Bobby Hurley",   "Marty Clark",   "Grant Hill",   "Antonio Lang",   "Joey Beard",   "Kenny Blakeney",   "Erik Meek",   "Cherokee Parks",   "Stan Brunson",   "Chris Collins",   "Tony Moore",   "Jeff Capel",   "Greg Newton",   "Carmen Wallace",   "Mike Chappell",   "Roshown McLeod",   "Ricky Price",   "Todd Singleton",   "Steve Wojciechowski",   "William Avery",   "Elton Brand",   "Chris Burgess",   "Justin Caldbeck",   "Taymon Domzalski",   "Jay Heaps",   "Trajan Langdon",   "Corey Maggette",   "Chris Carrawell",   "Shane Battier",   "Ryan Caldbeck",   "Nate James",   "J.D. Simpson",   "Andre Sweet",   "Carlos Boozer",   "Mark Causey",   "Matt Christensen",   "Mike Dunleavy",   "Jason Williams",   "Andre Buckner",   "Dahntay Jones",   "Casey Sanders",   "Andy Borman",   "Luol Deng",   "Chris Duhon",   "Nick Horvath",   "Andy Means",   "Michael Thompson",   "Daniel Ewing",   "Reggie Love",   "Tom Novick",   "Shavlik Randolph",   "Eric Boateng",   "Patrick Davidson",   "Sean Dockery",   "Patrick Johnson",   "Lee Melchionni",   "Ross Perkins",   "JJ Redick",   "Shelden Williams",   "Jamal Boykin",   "Josh McRoberts",   "Joe Pagliuca",   "Nick Sutton",   "Griffin Tormey",   "Taylor King",   "DeMarcus Nelson",   "Gerald Henderson",   "Dave McClure",   "Greg Paulus",   "Martynas Pocius",   "Elloit Williams",   "Olek Czyz",   "Jordan Davidson",   "Steve Johnson",   "Jon Scheyer",   "Lance Thomas",   "Brian Zoubek",   "Kyrie Irving",   "Casey Peters",   "Kyle Singler",   "Nolan Smith",   "Michael Gbinije",   "Miles Plumlee",   "Austin Rivers",   "Seth Curry",   "Ryan Kelly",   "Alex Murphy",   "Mason Plumlee",   "Andre Dawkins",   "Josh Hairston",   "Rodney Hood",   "Jabari Parker",   "Tyler Thornton",   "Todd Zafirovski",   "Quinn Cook",   "Tyus Jones",   "Sean Kelly",   "Semi Ojeleye",   "Jahlil Okafor",   "Rasheed Sulaimon",   "Justise Winslow",   "Brandon Ingram",   "Marshall Plumlee",   "Derryck Thornton",   "Harry Giles",   "Frank Jackson",   "Amile Jefferson",   "Chase Jeter",   "Matt Jones",   "Luke Kennard",   "Sean Obi",   "Nick Pagliuca",   "Jayson Tatum",   "Grayson Allen",   "Marvin Bagley III",   "Brennan Besser",   "Marques Bolden",   "Mike Buckmire",   "Wendell Carter Jr.",   "Javin DeLaurier",   "Trevon Duval",   "Jordan Goldwire",   "Alex O'Connell",   "Justin Robinson",   "Gary Trent Jr.",   "Jordan Tucker",   "Antonio Vrankovic",   "Jack White",   "RJ Barrett",   "Cam Reddish",   "Zion Williamson",   "Tre Jones",   "Vernon Carey Jr.",   "Cassius Stanley",   "Matthew Hurt",   "Jaemyn Brakefield",   "Henry Coleman III",   "Jalen Johnson",   "DJ Steward",   "Patrick Tape",   "Joey Baker",   "Wendell Moore Jr.",   "Michael Savarino",   "Keenan Worthington",   "Mark Williams",   "Paolo Banchero",   "A.J. Griffin",   "Theo John",   "Bates Jones",   "Trevor Keels",   "Jeremy Roach",   "Jaylen Blakes",   "Stanley Borden",   "Spencer Hubbard",   "Kale Catchings",   "Kyle Filipowski",   "Jacob Grandison",   "Max Johns",   "Dereck Lively II",   "Mark Mitchell",   "Tyrese Proctor",   "Christian Reeves",   "Jaden Schutt",   "Dariq Whitehead",   "Ryan Young",   "Neal Begovich",   "Caleb Foster",   "Jared McCain",   "TJ Power",   "Sean Stewart" ];
var h = new XMLHttpRequest();
var plyrs;
var plyrMap = new Map();
var exp;
var guessList = [];
window.onload = function() {
	h.open("GET","./db.json");
	h.responseType = 'json';
	h.send();
	// h.onload();
}
function byebye() {
  document.getElementById("res").style.opacity = 0.0;
  document.getElementById("pop").style.opacity = 0.0;
  setTimeout(() => {
	  document.getElementById("pop").style.display = "none";
  },500);
}

h.onload = function() {
	//plyrs = h.response.d.results.filter(e => e.pos && e.weight > 0);
	plyrs = h.response.filter(e => e.pos && e.wt > 0);
	player = plyrs.filter(e => e.playerid == ids[dayNum - 420])[0];
	autocomplete(document.getElementById("guess"), names);
	plyrs.forEach(e => plyrMap.set(e.name,e));
	day.setDate(day.getDate() + 1);
	day.setHours(0);
	day.setMinutes(0);
	day.setSeconds(0);
	day.setMilliseconds(0);
	exp = day.toUTCString();
	if (document.cookie.length > 0) {
		c = document.cookie.split(";")[0].substring(2).split(",");
		for (var i = 0; i < c.length; i++) {
			guessPlay(c[i]);
		}
	}
}
let numGuess = 0;
let emoji = "";
day = new Date();
dayNum = getNumberOfDays("5/4/2022",day.toLocaleDateString());
//player = plyrs.filter(e => e.playerid == ids[dayNum])[0];

function guessPlay(name) {
	// document.getElementById("guess").value = document.getElementById("guess").value.replaceAll(",","'");
	name = name.replaceAll(",","'");
	numGuess++;
	if (/*document.getElementById("guess").value.replaceAll(",","'")*/name ==  player.name) {
		correct();
	} else {
		pGuess = plyrMap.get(name/*document.getElementById("guess").value*/); //plyrs.filter(e => e.name == document.getElementById("guess").value)[0];
		incorrect(pGuess);
		if (numGuess == 8) {
			finalRes(false);
		}
	}
	document.getElementById("guess").value = "";
	guessList.push(name);
	document.cookie = "z="+guessList+";expires="+exp;
}

function incorrect(pG) {
	toDoc = "<tr>";
	toDoc+= "<td>" + pG.name + "</td>";
	emoji+= "⬛";
	if (pG.pos == player.pos) {
		toDoc+= "<td class = 'grn'>";
		emoji+= "🟩";
	} else if (yellowPos(pG.pos).includes(player.pos)) {
		toDoc+= "<td class = 'ylw'>";
		emoji+= "🟨";
	} else {
		toDoc+= "<td>";
		emoji+= "⬛";
	}
	toDoc+= pG.pos + "</td>";
	if (pG.season4 == player.season4) {
		toDoc+= "<td class = 'grn'>";
		emoji+= "🟩";
	} else if (Math.abs(pG.season4 - player.season4) <= 2) {
		if (pG.season4 > player.season4) {
			toDoc+= "<td class = 'ylwDwn'>";
		} else {
			toDoc+= "<td class = 'ylwUp'>";
		}
		emoji+= "🟨";
	} else {
		if (pG.season4 > player.season4) {
			toDoc+= "<td class = 'dwn'>";
		} else {
			toDoc+= "<td class = 'up'>";
		}
		emoji+= "⬛";
	}
	toDoc+= "" + pG.season4 + "</td>";
	if (pG.class == player.class) {
		toDoc+= "<td class = 'grn'>";
		emoji+= "🟩";
	} else if (Math.abs(yellowClass(pG.class) - yellowClass(player.class)) == 1) {
		toDoc+= "<td class = 'ylw'>";
		emoji+= "🟨";
	} else {
		toDoc+= "<td>";
		emoji+= "⬛";
	}
	toDoc += pG.class + "</td>";
	if (pG.htft == player.htft && pG.htin == player.htin) {
		toDoc+= "<td class = 'grn'>";
		emoji+= "🟩";
	} else if (Math.abs(((12 * pG.htft) + pG.htin) - ((12 * player.htft) + player.htin)) <= 2) {
		if (((12 * pG.htft) + pG.htin) > ((12 * player.htft) + player.htin)) {
			toDoc+= "<td class='ylwDwn'>";
		} else {
			toDoc+= "<td class='ylwUp'>";
		}
		emoji+= "🟨";
	} else {
		toDoc+="<td>";
		emoji+= "⬛";
	}
	toDoc += "" + pG.htft + "'" + pG.htin + "</td>";
	if (pG.num == player.num) {
		toDoc+= "<td class = 'grn'>";
		emoji+= "🟩";
	} else if (pG.num - player.num >= -2 && pG.num - player.num <= 2) {
		if (pG.num > player.num) {
			toDoc+= "<td class = 'ylwDwn'>";
		} else {
			toDoc+= "<td class = 'ylwUp'>";
		}
		emoji+= "🟨";
	} else {
		if (pG.num > player.num) {
			toDoc+= "<td class = 'dwn'>";
		} else {
			toDoc+= "<td class = 'up'>";
		}
		emoji+= "⬛";
	}
	toDoc+= "" + pG.num + "</td></tr>";
	emoji+="\n";
	document.getElementById("guesses").innerHTML+= toDoc;
}

function correct() {
	toDoc = "";
	toDoc+= "<tr><td class='grn'>"+player.name+"</td><td class='grn'>"+player.pos+"</td><td class='grn'>"+player.season4+"</td><td class='grn'>"+player.class+"</td><td class='grn'>"+player.htft+"'"+player.htin+"</td><td class='grn'>"+player.num+"</td></tr>";
	document.getElementById("guesses").innerHTML+=toDoc;
	emoji+= "🟩🟩🟩🟩🟩🟩";
	finalRes(true);
}

function finalRes(gotIt) {
	document.getElementById("guess").setAttribute("disabled",true);
	document.getElementById("stats").removeAttribute("hidden");
	document.getElementById("res").removeAttribute("hidden");
	document.getElementById("res").className="";
	document.getElementById("pop").style.display = "block";
	if (gotIt) {
		document.getElementById("res").innerHTML += "<h2>"+player.name+"</h2><br/><h1>YOU GOT IT!</h1><br/><button id='shareBtn' onclick='share()'>Share results</button>";
	} else {
				document.getElementById("res").innerHTML += "<h2>"+player.name+"</h2><br/><h1>Better luck tomorrow!</h1><br/><button id='shareBtn' onclick='share()'>Share results</button>";
	}
	setTimeout(() => {document.getElementById("res").style.opacity = 1.0;
	document.getElementById("pop").style.opacity = 1.0;
	},5);
}
function showStats() {
	document.getElementById("pop").style.display = "block";
	setTimeout(() => {document.getElementById("res").style.opacity = 1.0;
	document.getElementById("pop").style.opacity = 1.0;
	},5);
}

async function share() {
	var txt = "Devil " + dayNum + ": " + numGuess + "/8\n\n" + emoji;
	var toShare = {title: "Devil", text: "Devil " + dayNum + ": " + numGuess + "/8\n\n" + emoji, url: window.location.href,};
	// txt.select();
	// txt.setSelectionRange(0, 99999);
	try {
		await navigator.share(toShare);
	} catch (err) {
		navigator.clipboard.writeText(txt);
		p = document.createElement("p");
		p.innerText = "Results copied to clipboard!";
		document.getElementById("shareBtn").after(p);
	}
}

function yellowClass(cl) {
	if (cl == "Fr.") {
		return 1;
	} else if (cl == "So.") {
		return 2;
	} else if (cl == "Jr.") {
		return 3;
	} else if (cl == "Sr.") {
		return 4;
	} else if (cl == "Gr.") {
		return 5;
	} else {
		return null;
	}
}

function yellowPos(gPos) {
	if (gPos == "G") {
		return ["G/F","F/G"];
	} else if (gPos == "F") {
		return ["G/F","F/G","F/C","C/F"];
	} else if (gPos == "C") {
		return ["F/C","C/F"];
	} else if (gPos == "G/F" || gPos == "F/G") {
		return ["G","F","F/G", "F/C","C/F"];
	} else if (gPos == "F/C" || gPos == "C/F") {
		return ["F","C","G/F","F/G"];
	}
}

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
		arr[i] = arr[i].replaceAll("'","\'");
        //if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
		if (arr[i].toUpperCase().includes(val.toUpperCase())) {
			ind = arr[i].toUpperCase().indexOf(val.toUpperCase());
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
		  b.innerHTML = arr[i].substr(0,ind);
          // b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
		  b.innerHTML += "<strong>" + arr[i].substr(ind, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(ind + val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].replaceAll("'",",") + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
			  // console.log(inp.value);
			  guessPlay(inp.value);
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
} 