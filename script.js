var ids = "256 127 74 299 2769 318 32 130 570 148 311 2740 247 475 139 404 2764 272 2755 2757 497 2777 286 2799 410 194 252 317 2738 162 354 493 2758 391 2762 319 36 68 17 280 2472 424 359 4 571 2749 2753 295 2748 281 39 149 213 133 450 219 377 520 210 2750 362 119 300 225 265 163 241 341 375 101 2772 279 378 2794 2766 351 2752 112 413 99 76 82 2760 2781 151 61 243 245 312 59 327 157 21 2785 230 2770 54 9 2741 13 2761 254 118 329 518 382 320 23 2795 2791 328 167 2751 144 180 2776 2807 454 2809 315 116 165 385 109 169 384 494 222 266 92 255 246 2779 150 2782 52 236 2796 363 105 55 200 58 356 2815 321 142 2743 2786 113 137 197 337 108 333 2742 293 2765 242 136 294 373 269 519 168 181 233 2803 270 2733 486 2473 260 412 196 65 216 2804 98 155 2737 182 336 496 298 217 307 273 303 40 469 78 357 51 234 2793 479 2789 403 12 147 425 2797 173 204 276 352 368 2745 172 2784 387 73 401 208 2744 2471 159 380 331 2756 251 27 2751 2771 2763 141 212 49 75 253 2788 402 432 376 517 237 202 110 18 70 495 2813 45 330 218 2820 2739 282 2816 367 16 64 2767 37 81 114 67 184 140 25 360 274 2735 46 177 211 60 117 232 284 79 205 405 206 2800 2746 2814 183 120 491 2778 2805 490 191 350 221 123 38 102 3 267 189 2811 195 33 2801 193 388 121 498 28 111 2808 207 409 2810 264 8 349 48 323 179 128 2790 215 96 2798 374 386 226 22 481 2792 451 106 160 383 124 240 231 126 2768 2818 259 332 138 153 2802 338 187 2783 152 227 488 2734 186 1 174 89 86 2775 2759 56 94 41 135 2817 322 458 2774 569 342 80 277 371 166 6 2736 416 2787 72 2812 2806 2819 406 198 489 353 93 248 10 146 62 156 20 14 287 324 301 2754 122 84 164 42 35 143 15 115 239 44 2780 223 2773 361 203 268 24 399 390 257 258 2747 346 90 131 355 7 224 339".split(" ");
var names = [   "Alaa Abdelnaby",   "Mark Alarie",   "Doug Albright",   "Bucky Allen",   "J. Clyde Allen",   "Phil Allen",   "Grayson Allen",   "Tommy Amaker",   "Todd Anderson",   "Bill Armour",   "Tate Armstrong",   "Christian Ast",   "Doug Ausbon",   "William Avery",   "Marvin Bagley III",   "Bill Bailey",   "Joey Baker",   "George Balitsaris",   "Paolo Banchero",   "Gene Banks",   "Tony Barone",   "RJ Barrett",   "Larry Bateman",   "Shane Battier",   "Jay Beal",   "Curtis Beall",   "Joey Beard",   "Bruce Bell",   "Joe Belmont",   "Bob Bender",   "Brennan Besser",   "Jay Bilas",   "Kevin Billerman",   "Don Blackman",   "Kenny Blakeney",   "Jaylen Blakes",   "Gene Bledsoe",   "Eric Boateng",   "Marques Bolden",   "Carlos Boozer",   "Stanley Borden",   "Andy Borman",   "Jim Bowman",   "Rod Boyce",   "Jack Boyd",   "Jamal Boykin",   "Jaemyn Brakefield",   "Elton Brand",   "Robert Brickey",   "Kenney Brown",   "Ray Brown",   "Stan Brunson",   "Jay Bryan",   "Ed Bryson",   "Clay Buckley",   "Jay Buckley",   "Mike Buckmire",   "Andre Buckner",   "Tony Buhowsky",   "Edgar Burch",   "Jeff Burdette",   "Chris Burgess",   "George Burgin",   "Ron Burt",   "Justin Caldbeck",   "Ryan Caldbeck",   "Ray Campbell",   "John Cantwell",   "Jeff Capel",   "Vernon Carey Jr.",   "Judge Carr",   "Chris Carrawell",   "Wendell Carter, Jr.",   "Gordon Carver",   "Don Cashman",   "Mark Causey",   "Warren Chapman",   "Mike Chappell",   "Buck Cheek",   "Terry Chili",   "Neil Chinault",   "Matt Christensen",   "C.B. Claiborne",   "Marty Clark",   "Hayes Clement",   "Henry Coleman III",   "Ben Collins",   "Chris Collins",   "Tom Connelly",   "Bob Cook",   "Joe Cook",   "Quinn Cook",   "Jim Corrigan",   "Tom Cowdrick",   "Ray Cox",   "Fred Cox",   "Benner Crigler",   "Mark Crow",   "Dick Crowder",   "Pat Curry",   "Seth Curry",   "Olek Czyz",   "Rudy D'Emilio",   "Patrick Davidson",   "Jordan Davidson",   "Brian Davis",   "Johnny Dawkins",   "Andre Dawkins",   "Jeff Dawson",   "Javin DeLaurier",   "Dick DeVenzio",   "Marv Decker",   "Kes Deimling",   "Luol Deng",   "Kenny Dennard",   "Randy Denton",   "Sean Dockery",   "Marty Doherty",   "Taymon Domzalski",   "Pat Doughty",   "Bill Downing",   "Charles Driesell",   "Lou Dubois",   "Bob Duff",   "Chris Duhon",   "Mike Dunleavy",   "Trevon Duval",   "Zeno Edwards",   "Tom Emma",   "John Engberg",   "Chip Engelland",   "Brad Evans",   "Daniel Ewing",   "Don Farinella",   "Denny Ferguson",   "Danny Ferry",   "Burton Fitts",   "Bob Fleischer",   "Bill Fleming",   "Bill Flentye",   "Richard Ford",   "Paul Fox",   "Ned Franke",   "John Frye",   "Bob Gantt",   "Michael Gbinije",   "Tom Gebbie",   "Richard Gilbert",   "Harry Giles",   "Carl Glasow",   "Mike Gminski",   "George Godfrey",   "Scott Goetsch",   "Dave Golden",   "Jordan Goldwire",   "Rick Gomez",   "Dick Gordon",   "Irving Gray",   "Steve Gray",   "A.J. Griffin",   "Dick Groat",   "Josh Hairston",   "Cameron Hall",   "Roger Hamilton",   "Rob Hardy",   "Harry Harner",   "John Harrell",   "Bobby Joe Harris",   "Buzzy Harrison",   "Frank Harscher",   "Howard Hartley",   "Jay Heaps",   "John Heath",   "David Henderson",   "Phil Henderson",   "Gerald Henderson",   "Ron Herbster",   "Art Heyman",   "Harold Hibbitts",   "Grant Hill",   "Thomas Hill",   "Lang Hobgood",   "Willie Hodge",   "Chuck Holley",   "Wright Hollingsworth",   "Rodney Hood",   "Nick Horvath",   "Spencer Hubbard",   "Tommy Hughes",   "Bobby Hurley",   "Howard Hurt",   "Matthew Hurt",   "Henry Hyde",   "Brandon Ingram",   "Kyrie Irving",   "Bill Jackman",   "Doug Jackson",   "Frank Jackson",   "Nate James",   "Bernie Janicki",   "Amile Jefferson",   "Chase Jeter",   "Theo John",   "Dick Johnson",   "Patrick Johnson",   "C.B. Johnson",   "Steve Johnson",   "Jalen Johnson",   "Dahntay Jones",   "Matt Jones",   "Tyus Jones",   "Tre Jones",   "Bates Jones",   "Marty Joyce",   "Jack Kalbfus",   "Fred Kast",   "Rick Katherman",   "Trevor Keels",   "Ryan Kelly",   "Sean Kelly",   "Luke Kennard",   "Joe Kennedy",   "Billy King",   "Taylor King",   "Doug Kistler",   "Brent Kitching",   "Tim Kolodziej",   "Greg Koubek",   "Pete Kramer",   "Ray Kuhlmeier",   "Red Kulpan",   "Rudy Lacy",   "Christian Laettner",   "Bob Lakata",   "Herky Lamley",   "Antonio Lang",   "Trajan Langdon",   "Bob Lapp",   "Sidney Larkin",   "Dick Latimer",   "Mike Lewis",   "Jim Liccardo",   "Fred Lind",   "Larry Linney",   "Steve Litz",   "Garland Loftis",   "Reggie Love",   "Hal Lynch",   "Corey Maggette",   "Rick Mainwaring",   "Ted Mann",   "Jack Marin",   "Bill Martin",   "Ronnie Mayer",   "Elliott McBride",   "Bill McCaffrey",   "Bill McCahan",   "David McClure",   "Stuart McKaig",   "Roshown McLeod",   "Doug McNeely",   "Josh McRoberts",   "Dan Meagher",   "Andy Means",   "Erik Meek",   "Gary Melchionni",   "Lee Melchionni",   "Robert Metzler",   "Buzz Mewhort",   "Bill Mock",   "Tony Moore",   "Wendell Moore Jr.",   "Junior Morgan",   "Merrill Morgan",   "Johnny Morris",   "Harold Morrison",   "George Moses",   "Kelly Mote",   "Bob Moyer",   "Jack Mullen",   "Jeff Mullins",   "Alex Murphy",   "Terry Murray",   "DeMarcus Nelson",   "Martin Nessley",   "Jim Newcome",   "Greg Newton",   "Geoff Northrop",   "Tom Novick",   "Dave O'Connell",   "Alex O'Connell",   "Richie O'Connor",   "Sean Obi",   "Semi Ojeleye",   "Jahlil Okafor",   "Joe Pagliuca",   "Nick Pagliuca",   "Crawford Palmer",   "Jabari Parker",   "Cherokee Parks",   "Bill Parsons",   "Greg Paulus",   "Ross Perkins",   "Tommy Peters",   "Casey Peters",   "Miles Plumlee",   "Mason Plumlee",   "Marshall Plumlee",   "Martynas Pocius",   "Walt Poplin",   "John Posen",   "Glenn Price",   "Ricky Price",   "Shavlik Randolph",   "Chris Redding",   "Cam Reddish",   "J.J. Redick",   "Bob Riedy",   "Bill Riegel",   "Ron Righter",   "Austin Rivers",   "Jeremy Roach",   "Jerry Robertson",   "Justin Robinson",   "Dick Rosenthal",   "Sammy Rothbaum",   "Casey Sanders",   "Carl Sapp",   "Larry Saunders",   "Michael Savarino",   "Dave Scarborough",   "Jon Scheyer",   "Fred Schmidt",   "Paul Schmidt",   "John Seward",   "Fred Shabel",   "Alan Shaw",   "J.D. Simpson",   "Kyle Singler",   "Todd Singleton",   "Wes Skibstead",   "Glen Smiley",   "John Smith",   "Nolan Smith",   "Quin Snyder",   "Jim Spanarkel",   "Raymond Spuhler",   "Cassius Stanley",   "D.J. Steward",   "Kevin Strickland",   "Jim Suddath",   "Bill Suk",   "Rasheed Sulaimon",   "Rasheed Suliamon",   "Nick Sutton",   "Andre Sweet",   "Patrick Tape",   "Jayson Tatum",   "Vince Taylor",   "Tim Teer",   "Lance Thomas",   "Michael Thompson",   "Tyler Thornton",   "Derryck Thornton",   "Hack Tison",   "Mike Tissaw",   "Don Tobin",   "Griffin Tormey",   "Gary Trent, Jr.",   "Jordan Tucker",   "Hal Turner",   "Kenny Turner",   "Bill Ulrich",   "Steve Vacendak",   "Cy Valasek",   "Steve Vandenberg",   "Bob Verga",   "Bob Vernon",   "Antonio Vrankovic",   "Carmen Wallace",   "Tom Wallingford",   "Dick Warren",   "Bill Watson",   "Bob Wayand",   "Ron Wendelin",   "Greg Wendt",   "Robby West",   "Jack White",   "Gordon Whitted",   "Allen Williams",   "Jason Williams",   "Shelden Williams",   "Weldon Williams",   "Elloit Williams",   "Mark Williams",   "Scott Williamson",   "Zion Williamson",   "Justise Winslow",   "Steve Wojciechowski",   "Keenan Worthington",   "Bill Wright",   "Stu Yarbrough",   "Scotty York",   "Corren Youmans",   "Kenny Young",   "Carroll Youngkin",   "Todd Zafirovski",   "Bill Zimmer",   "Brian Zoubek", "Kale Catchings", "Kyle Filipowski", "Jacob Grandison", "Max Johns", "Dereck Lively II", "Mark Mitchell", "Tyrese Proctor", "Christian Reeves", "Jaden Schutt", "Dariq Whitehead", "Ryan Young" ];
var h = new XMLHttpRequest();
var plyrs;
var plyrMap = new Map();
window.onload = function() {
	h.open("GET","./db.json");
	h.responseType = 'json';
	h.send();
	// h.onload();
}
function byebye() {
  document.getElementById("pop").style.display = "none";
}

h.onload = function() {
	//plyrs = h.response.d.results.filter(e => e.pos && e.weight > 0);
	plyrs = h.response.filter(e => e.pos && e.wt > 0);
	player = plyrs.filter(e => e.playerid == ids[dayNum])[0];
	autocomplete(document.getElementById("guess"), names);
	plyrs.forEach(e => plyrMap.set(e.name,e));
}
let numGuess = 0;
let emoji = "";
day = new Date();
dayNum = getNumberOfDays("5/4/2022",day.toLocaleDateString());
//player = plyrs.filter(e => e.playerid == ids[dayNum])[0];

function guessPlay() {
	document.getElementById("guess").value = document.getElementById("guess").value.replaceAll(",","'");
	numGuess++;
	if (document.getElementById("guess").value.replaceAll(",","'") ==  player.name) {
		correct();
	} else {
		pGuess = plyrMap.get(document.getElementById("guess").value); //plyrs.filter(e => e.name == document.getElementById("guess").value)[0];
		incorrect(pGuess);
		if (numGuess == 8) {
			finalRes(false);
		}
	}
	document.getElementById("guess").value = "";
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
	toDoc+= "<tr class='grn'><td>"+player.name+"</td><td>"+player.pos+"</td><td>"+player.season4+"</td><td>"+player.class+"</td><td>"+player.htft+"'"+player.htin+"</td><td>"+player.num+"</td></tr>";
	document.getElementById("guesses").innerHTML+=toDoc;
	emoji+= "🟩🟩🟩🟩🟩🟩";
	finalRes(true);
}

function finalRes(gotIt) {
	document.getElementById("guess").setAttribute("disabled",true);
	document.getElementById("res").removeAttribute("hidden");
	document.getElementById("pop").style.display = "block";
	if (gotIt) {
		document.getElementById("res").innerHTML += "<h2>"+player.name+"</h2><br/><h1>YOU GOT IT!</h1><br/><button onclick='share()'>Copy results</button>";
	} else {
				document.getElementById("res").innerHTML += "<h2>"+player.name+"</h2><br/><h1>Better luck tomorrow!</h1><br/><button onclick='share()'>Copy results</button>";
	}
}

function share() {
	var txt = "Devil " + dayNum + ": " + numGuess + "/8\n\n" + emoji;
	// txt.select();
	// txt.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(txt);
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
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].replaceAll("'",",") + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
			  guessPlay();
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