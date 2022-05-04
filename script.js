var ids = "256 127 74 299 2769 318 32 130 570 148 311 2740 247 475 139 404 2764 272 2755 2757 497 2777 286 2799 410 194 252 317 2738 162 354 493 2758 391 2762 319 36 68 17 280 2472 424 359 4 571 2749 2753 295 2748 281 39 149 213 133 450 219 377 520 210 2750 362 119 300 225 265 163 241 341 375 101 2772 279 378 2794 2766 351 2752 112 413 99 76 82 2760 2781 151 61 243 245 312 59 327 157 21 2785 230 2770 54 9 2741 13 2761 254 118 329 518 382 237 2796 276 248 111 12 120 331 212 121 406 65 2803 425 128 33 94 360 187 2771 159 2751 46 494 93 22 177 221 385 70 384 2751 116 2737 222 2788 517 155 255 240 62 72 183 367 2733 2745 28 156 203 2756 322 357 52 195 2773 491 105 150 2765 60 2804 268 173 330 147 232 216 182 253 197 303 67 135 257 78 356 371 165 324 79 152 146 117 373 2743 287 2776 27 321 174 89 416 7 64 58 16 2739 451 353 2742 390 1 80 51 2806 2791 168 519 2747 338 141 380 2807 2473 160 164 23 6 274 234 8 180 208 350 92 113 75 184 236 339 115 387 251 96 320 432 307 2790 86 122 2802 2801 2797 45 2778 454 218 301 479 24 495 2471 496 298 260 332 258 2798 383 108 376 226 402 233 337 10 293 202 328 138 196 204 18 84 266 2767 246 2805 25 403 2746 169 142 81 333 20 2808 3 264 55 405 136 207 49 231 41 2768 179 267 217 488 172 2800 486 2775 401 44 336 2786 198 15 569 242 126 2759 2744 123 239 56 206 211 363 352 386 2735 361 270 38 110 144 42 355 37 224 2754 40 469 490 124 294 48 166 143 346 489 215 399 186 2783 2736 193 131 153 2793 368 374 282 106 223 458 2795 2789 137 284 102 14 2784 273 2734 109 342 2774 90 73 191 277 140 98 205 2779 498 2782 181 2763 349 227 409 323 412 114 481 35 189 167 200 2787 2809 2792 259 388 315 269 2780".split(" ");
var names = [   "Alaa Abdelnaby",   "Mark Alarie",   "Doug Albright",   "Bucky Allen",   "J. Clyde Allen",   "Phil Allen",   "Grayson Allen",   "Tommy Amaker",   "Todd Anderson",   "Bill Armour",   "Tate Armstrong",   "Christian Ast",   "Doug Ausbon",   "William Avery",   "Marvin Bagley III",   "Bill Bailey",   "Joey Baker",   "George Balitsaris",   "Paolo Banchero",   "Gene Banks",   "Tony Barone",   "RJ Barrett",   "Larry Bateman",   "Shane Battier",   "Jay Beal",   "Curtis Beall",   "Joey Beard",   "Bruce Bell",   "Joe Belmont",   "Bob Bender",   "Brennan Besser",   "Jay Bilas",   "Kevin Billerman",   "Don Blackman",   "Kenny Blakeney",   "Jaylen Blakes",   "Gene Bledsoe",   "Eric Boateng",   "Marques Bolden",   "Carlos Boozer",   "Stanley Borden",   "Andy Borman",   "Jim Bowman",   "Rod Boyce",   "Jack Boyd",   "Jamal Boykin",   "Jaemyn Brakefield",   "Elton Brand",   "Robert Brickey",   "Kenney Brown",   "Ray Brown",   "Stan Brunson",   "Jay Bryan",   "Ed Bryson",   "Clay Buckley",   "Jay Buckley",   "Mike Buckmire",   "Andre Buckner",   "Tony Buhowsky",   "Edgar Burch",   "Jeff Burdette",   "Chris Burgess",   "George Burgin",   "Ron Burt",   "Justin Caldbeck",   "Ryan Caldbeck",   "Ray Campbell",   "John Cantwell",   "Jeff Capel",   "Vernon Carey Jr.",   "Judge Carr",   "Chris Carrawell",   "Wendell Carter, Jr.",   "Gordon Carver",   "Don Cashman",   "Mark Causey",   "Warren Chapman",   "Mike Chappell",   "Buck Cheek",   "Terry Chili",   "Neil Chinault",   "Matt Christensen",   "C.B. Claiborne",   "Marty Clark",   "Hayes Clement",   "Henry Coleman III",   "Ben Collins",   "Chris Collins",   "Tom Connelly",   "Bob Cook",   "Joe Cook",   "Quinn Cook",   "Jim Corrigan",   "Tom Cowdrick",   "Ray Cox",   "Fred Cox",   "Benner Crigler",   "Mark Crow",   "Dick Crowder",   "Pat Curry",   "Seth Curry",   "Olek Czyz",   "Rudy D'Emilio",   "Patrick Davidson",   "Jordan Davidson",   "Brian Davis",   "Johnny Dawkins",   "Andre Dawkins",   "Jeff Dawson",   "Javin DeLaurier",   "Dick DeVenzio",   "Marv Decker",   "Kes Deimling",   "Luol Deng",   "Kenny Dennard",   "Randy Denton",   "Sean Dockery",   "Marty Doherty",   "Taymon Domzalski",   "Pat Doughty",   "Bill Downing",   "Charles Driesell",   "Lou Dubois",   "Bob Duff",   "Chris Duhon",   "Mike Dunleavy",   "Trevon Duval",   "Zeno Edwards",   "Tom Emma",   "John Engberg",   "Chip Engelland",   "Brad Evans",   "Daniel Ewing",   "Don Farinella",   "Denny Ferguson",   "Danny Ferry",   "Burton Fitts",   "Bob Fleischer",   "Bill Fleming",   "Bill Flentye",   "Richard Ford",   "Paul Fox",   "Ned Franke",   "John Frye",   "Bob Gantt",   "Michael Gbinije",   "Tom Gebbie",   "Richard Gilbert",   "Harry Giles",   "Carl Glasow",   "Mike Gminski",   "George Godfrey",   "Scott Goetsch",   "Dave Golden",   "Jordan Goldwire",   "Rick Gomez",   "Dick Gordon",   "Irving Gray",   "Steve Gray",   "A.J. Griffin",   "Dick Groat",   "Josh Hairston",   "Cameron Hall",   "Roger Hamilton",   "Rob Hardy",   "Harry Harner",   "John Harrell",   "Bobby Joe Harris",   "Buzzy Harrison",   "Frank Harscher",   "Howard Hartley",   "Jay Heaps",   "John Heath",   "David Henderson",   "Phil Henderson",   "Gerald Henderson",   "Ron Herbster",   "Art Heyman",   "Harold Hibbitts",   "Grant Hill",   "Thomas Hill",   "Lang Hobgood",   "Willie Hodge",   "Chuck Holley",   "Wright Hollingsworth",   "Rodney Hood",   "Nick Horvath",   "Spencer Hubbard",   "Tommy Hughes",   "Bobby Hurley",   "Howard Hurt",   "Matthew Hurt",   "Henry Hyde",   "Brandon Ingram",   "Kyrie Irving",   "Bill Jackman",   "Doug Jackson",   "Frank Jackson",   "Nate James",   "Bernie Janicki",   "Amile Jefferson",   "Chase Jeter",   "Theo John",   "Dick Johnson",   "Patrick Johnson",   "C.B. Johnson",   "Steve Johnson",   "Jalen Johnson",   "Dahntay Jones",   "Matt Jones",   "Tyus Jones",   "Tre Jones",   "Bates Jones",   "Marty Joyce",   "Jack Kalbfus",   "Fred Kast",   "Rick Katherman",   "Trevor Keels",   "Ryan Kelly",   "Sean Kelly",   "Luke Kennard",   "Joe Kennedy",   "Billy King",   "Taylor King",   "Doug Kistler",   "Brent Kitching",   "Tim Kolodziej",   "Greg Koubek",   "Pete Kramer",   "Ray Kuhlmeier",   "Red Kulpan",   "Rudy Lacy",   "Christian Laettner",   "Bob Lakata",   "Herky Lamley",   "Antonio Lang",   "Trajan Langdon",   "Bob Lapp",   "Sidney Larkin",   "Dick Latimer",   "Mike Lewis",   "Jim Liccardo",   "Fred Lind",   "Larry Linney",   "Steve Litz",   "Garland Loftis",   "Reggie Love",   "Hal Lynch",   "Corey Maggette",   "Rick Mainwaring",   "Ted Mann",   "Jack Marin",   "Bill Martin",   "Ronnie Mayer",   "Elliott McBride",   "Bill McCaffrey",   "Bill McCahan",   "David McClure",   "Stuart McKaig",   "Roshown McLeod",   "Doug McNeely",   "Josh McRoberts",   "Dan Meagher",   "Andy Means",   "Erik Meek",   "Gary Melchionni",   "Lee Melchionni",   "Robert Metzler",   "Buzz Mewhort",   "Bill Mock",   "Tony Moore",   "Wendell Moore Jr.",   "Junior Morgan",   "Merrill Morgan",   "Johnny Morris",   "Harold Morrison",   "George Moses",   "Kelly Mote",   "Bob Moyer",   "Jack Mullen",   "Jeff Mullins",   "Alex Murphy",   "Terry Murray",   "DeMarcus Nelson",   "Martin Nessley",   "Jim Newcome",   "Greg Newton",   "Geoff Northrop",   "Tom Novick",   "Dave O'Connell",   "Alex O'Connell",   "Richie O'Connor",   "Sean Obi",   "Semi Ojeleye",   "Jahlil Okafor",   "Joe Pagliuca",   "Nick Pagliuca",   "Crawford Palmer",   "Jabari Parker",   "Cherokee Parks",   "Bill Parsons",   "Greg Paulus",   "Ross Perkins",   "Tommy Peters",   "Casey Peters",   "Miles Plumlee",   "Mason Plumlee",   "Marshall Plumlee",   "Martynas Pocius",   "Walt Poplin",   "John Posen",   "Glenn Price",   "Ricky Price",   "Shavlik Randolph",   "Chris Redding",   "Cam Reddish",   "J.J. Redick",   "Bob Riedy",   "Bill Riegel",   "Ron Righter",   "Austin Rivers",   "Jeremy Roach",   "Jerry Robertson",   "Justin Robinson",   "Dick Rosenthal",   "Sammy Rothbaum",   "Casey Sanders",   "Carl Sapp",   "Larry Saunders",   "Michael Savarino",   "Dave Scarborough",   "Jon Scheyer",   "Fred Schmidt",   "Paul Schmidt",   "John Seward",   "Fred Shabel",   "Alan Shaw",   "J.D. Simpson",   "Kyle Singler",   "Todd Singleton",   "Wes Skibstead",   "Glen Smiley",   "John Smith",   "Nolan Smith",   "Quin Snyder",   "Jim Spanarkel",   "Raymond Spuhler",   "Cassius Stanley",   "D.J. Steward",   "Kevin Strickland",   "Jim Suddath",   "Bill Suk",   "Rasheed Sulaimon",   "Rasheed Suliamon",   "Nick Sutton",   "Andre Sweet",   "Patrick Tape",   "Jayson Tatum",   "Vince Taylor",   "Tim Teer",   "Lance Thomas",   "Michael Thompson",   "Tyler Thornton",   "Derryck Thornton",   "Hack Tison",   "Mike Tissaw",   "Don Tobin",   "Griffin Tormey",   "Gary Trent, Jr.",   "Jordan Tucker",   "Hal Turner",   "Kenny Turner",   "Bill Ulrich",   "Steve Vacendak",   "Cy Valasek",   "Steve Vandenberg",   "Bob Verga",   "Bob Vernon",   "Antonio Vrankovic",   "Carmen Wallace",   "Tom Wallingford",   "Dick Warren",   "Bill Watson",   "Bob Wayand",   "Ron Wendelin",   "Greg Wendt",   "Robby West",   "Jack White",   "Gordon Whitted",   "Allen Williams",   "Jason Williams",   "Shelden Williams",   "Weldon Williams",   "Elloit Williams",   "Mark Williams",   "Scott Williamson",   "Zion Williamson",   "Justise Winslow",   "Steve Wojciechowski",   "Keenan Worthington",   "Bill Wright",   "Stu Yarbrough",   "Scotty York",   "Corren Youmans",   "Kenny Young",   "Carroll Youngkin",   "Todd Zafirovski",   "Bill Zimmer",   "Brian Zoubek" ];
var h = new XMLHttpRequest();
var plyrs;
window.onload = function() {
	h.open("GET","https://cors-everywhere.herokuapp.com/http://dukehana.lsiconsulting.com:8000/duke_mbb_stats_data/duke_stats_data/roster_latest_season.xsodata/roster_latest_season?$format=json&$orderby=last");
	h.responseType = 'json';
	h.send();
}
function byebye() {
  document.getElementById("pop").style.display = "none";
}

h.onload = function() {
	plyrs = h.response.d.results.filter(e => e.pos && e.weight > 0);
	player = plyrs.filter(e => e.playerid == ids[dayNum])[0];
	autocomplete(document.getElementById("guess"), names);
}
let numGuess = 0;
let emoji = "";
day = new Date();
dayNum = getNumberOfDays("5/4/2022",day.toLocaleDateString());
//player = plyrs.filter(e => e.playerid == ids[dayNum])[0];

function guessPlay() {
	numGuess++;
	if (document.getElementById("guess").value ==  player.name) {
		correct();
	} else {
		pGuess = plyrs.filter(e => e.name == document.getElementById("guess").value)[0];
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
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
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