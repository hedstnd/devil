var ids = "153 2473 2810 204 173 405 356 281 360 284 260 223 2749 301 2796 2776 6 194 518 2793 64 222 2744 416 355 135 150 104 177 2750 488 2822 72 174 156 332 60 497 196 2820 4 16 136 2775 9 112 165 7 2735 2788 359 52 92 2819 224 168 160 2766 333 2771 2763 401 2740 391 2799 496 2737 374 2795 116 218 157 82 2784 189 221 2765 258 2777 2813 569 312 187 362 14 2760 118 120 94 328 219 246 2818 20 89 59 390 2805 351 2755 376 2767 10 2748 148 131 270 191 121 2816 2746 361 98 399 215 363 349 124 2743 32 210 108 486 152 520 2817 2753 231 2738 68 180 353 139 3 341 385 67 352 454 111 2829 2789 322 182 127 2831 117 2778 2827 106 2798 2757 319 403 90 2824 216 73 167 154 2804 233 38 138 22 46 232 143 34 475 76 331 481 31 371 368 128 2783 338 115 130 2786 424 2803 2751 44 327 324 346 321 317 200 2471 300 404 245 163 2802 400 211 2773 2745 247 48 274 2811 387 110 2780 2768 2772 17 179 450 2797 2761 184 2781 282 2472 489 33 2834 2764 37 367 252 242 298 311 280 129 58 164 2774 413 78 212 8 126 81 123 243 2800 354 172 54 329 2821 208 469 495 350 273 217 230 122 253 24 159 234 2835 55 267 2806 2812 18 2754 2758 432 42 402 571 336 74 149 140 406 330 2828 21 206 272 498 239 2787 147 570 36 202 2808 479 105 2752 2790 451 377 93 141 114 213 39 491 380 2794 61 23 2733 15 205 195 62 384 409 240 2759 13 2756 70 207 2734 320 2791 35 2826 388 2814 286 2739 137 2785 318 227 133 102 144 295 386 2769 2741 56 269 255 256 2770 65 40 2762 91 236 86 2747 51 339 197 237 186 198 28 181 348 2832 79 2809 375 113 315 299 294 410 517 2779 251 241 2833 119 293 96 408 27 289 155 266 99 226 519 493 279 2830 101 109 80 225 2782 303 337 25 268 378 2742 75 287 50 162 383 323 382 490 2807 20 203 2815 264 45 265 248 1 84 142 342 2792 357 2825 146 276 169 12 183 425 2823 193 2736 277 41 254 373 49 307 2801 166 494 259 151 257 412 458 199".split(" ");
var names = [   "Jim Bowman",   "Lou Dubois",   "Bill Flentye",   "John Heath",   "Lang Hobgood",   "Bill Parsons",   "Ray Brown",   "Tom Connelly",   "Tom Cowdrick",   "Chuck Holley",   "Bill Mock",   "Bob Moyer",   "Glenn Price",   "Cy Valasek",   "J. Clyde Allen",   "Bill McCahan",   "Raymond Spuhler",   "Bill Bailey",   "George Balitsaris",   "Curtis Beall",   "Gene Bledsoe",   "Pat Curry",   "Bob Gantt",   "Richard Gilbert",   "Harry Harner",   "Howard Hartley",   "Wright Hollingsworth",   "Henry Hyde",   "Sidney Larkin",   "Robert Metzler",   "Kelly Mote",   "Kenny Turner",   "Bill Wright",   "Gordon Carver",   "Bob Lapp",   "Doug Ausbon",   "Irving Gray",   "Garland Loftis",   "Sammy Rothbaum",   "John Seward",   "Walt Poplin",   "Bill Armour",   "Ray Campbell",   "Ben Collins",   "Benner Crigler",   "Bob Duff",   "Don Farinella",   "George Godfrey",   "Dick Gordon",   "Harold Hibbitts",   "Hal Lynch",   "Carl Sapp",   "Tom Wallingford",   "Buck Cheek",   "Tommy Hughes",   "Bill Martin",   "Dave Scarborough",   "Wes Skibstead",   "Corren Youmans",   "Rod Boyce",   "Bill Downing",   "John Engberg",   "Red Kulpan",   "Scotty York",   "Dick Crowder",   "Kes Deimling",   "Bill Fleming",   "Carl Glasow",   "Dick Groat",   "Dick Johnson",   "Dick Latimer",   "Tommy Peters",   "Bill Riegel",   "Rudy D'Emilio",   "Marv Decker",   "Charles Driesell",   "Bernie Janicki",   "Rudy Lacy",   "Fred Shabel",   "Tom Blackburn",   "Marty Doherty",   "Herky Lamley",   "Jim Rogers",   "Bob Thuemmel",   "Don Tobin",   "Hal Turner",   "Joe Belmont",   "Tony Buhowsky",   "Don Cashman",   "Jack Kalbfus",   "Ronnie Mayer",   "Junior Morgan",   "Ed Bryson",   "Joe Marcovecchio",   "Dick Rosenthal",   "Bucky Allen",   "Hayes Clement",   "Bobby Joe Harris",   "Bob Lakata",   "Jim Newcome",   "Paul Schmidt",   "Bob Vernon",   "Jack Boyd",   "Marty Joyce",   "Johnny Morris",   "Jerry Robertson",   "Bill Watson",   "Bob Wayand",   "Larry Bateman",   "C.B. Johnson",   "Doug Albright",   "Jay Beal",   "John Cantwell",   "John Frye",   "Howard Hurt",   "Doug Kistler",   "Merrill Morgan",   "Carroll Youngkin",   "Tom Gebbie",   "Roger Hamilton",   "Fred Kast",   "Buzz Mewhort",   "Jack Mullen",   "Fred Cox",   "Art Heyman",   "Bob Jamieson",   "Fred Schmidt",   "Bill Ulrich",   "Scott Williamson",   "Jay Buckley",   "Ray Cox",   "Buzzy Harrison",   "Frank Harscher",   "Ted Mann",   "Jeff Mullins",   "Terry Murray",   "Denny Ferguson",   "Burton Fitts",   "Ron Herbster",   "Brent Kitching",   "Elliott McBride",   "Hack Tison",   "Phil Allen",   "Jack Marin",   "Steve Vacendak",   "Dick Warren",   "Bill Zimmer",   "Jim Liccardo",   "Stuart McKaig",   "Bob Riedy",   "Bob Verga",   "Tony Barone",   "Joe Kennedy",   "Tim Kolodziej",   "Mike Lewis",   "Ron Wendelin",   "Warren Chapman",   "C.B. Claiborne",   "Dave Golden",   "Fred Lind",   "Steve Vandenberg",   "Don Blackman",   "Doug Jackson",   "Ray Kuhlmeier",   "John Posen",   "Glen Smiley",   "Tim Teer",   "Judge Carr",   "Jeff Dawson",   "Randy Denton",   "Dick DeVenzio",   "Brad Evans",   "Rick Katherman",   "Steve Litz",   "Larry Saunders",   "Pat Doughty",   "Zeno Edwards",   "Richie O'Connor",   "Ron Righter",   "Robby West",   "Stu Yarbrough",   "Gary Melchionni",   "Alan Shaw",   "Edgar Burch",   "Jeff Burdette",   "Neil Chinault",   "Bob Cook",   "Chris Redding",   "Kevin Billerman",   "Bob Fleischer",   "Pete Kramer",   "Bill Suk",   "Terry Chili",   "Paul Fox",   "Rick Gomez",   "Willie Hodge",   "George Moses",   "Dave O'Connell",   "Kenny Young",   "Tate Armstrong",   "Mark Crow",   "Cameron Hall",   "Rick Mainwaring",   "Geoff Northrop",   "Bruce Bell",   "Scott Goetsch",   "Steve Gray",   "Rob Hardy",   "John Harrell",   "Harold Morrison",   "Jim Spanarkel",   "Bob Bender",   "Jim Corrigan",   "Mike Gminski",   "Gene Banks",   "Kenny Dennard",   "Larry Linney",   "Jim Suddath",   "Ned Franke",   "Vince Taylor",   "Gordon Whitted",   "Allen Williams",   "Tom Emma",   "Chip Engelland",   "Bill Jackman",   "Mike Tissaw",   "Greg Wendt",   "Richard Ford",   "Doug McNeely",   "Todd Anderson",   "Jay Bryan",   "Dan Meagher",   "Mark Alarie",   "Jay Bilas",   "Johnny Dawkins",   "David Henderson",   "Weldon Williams",   "Tommy Amaker",   "Martin Nessley",   "Billy King",   "Kevin Strickland",   "George Burgin",   "Danny Ferry",   "John Smith",   "Quin Snyder",   "Alaa Abdelnaby",   "Robert Brickey",   "Joe Cook",   "Phil Henderson",   "Clay Buckley",   "Greg Koubek",   "Bill McCaffrey",   "Crawford Palmer",   "Christian Ast",   "Ron Burt",   "Brian Davis",   "Christian Laettner",   "Kenney Brown",   "Thomas Hill",   "Bobby Hurley",   "Marty Clark",   "Grant Hill",   "Antonio Lang",   "Joey Beard",   "Kenny Blakeney",   "Erik Meek",   "Cherokee Parks",   "Stan Brunson",   "Chris Collins",   "Tony Moore",   "Jeff Capel",   "Greg Newton",   "Carmen Wallace",   "Mike Chappell",   "Roshown McLeod",   "Ricky Price",   "Todd Singleton",   "Steve Wojciechowski",   "William Avery",   "Elton Brand",   "Chris Burgess",   "Justin Caldbeck",   "Taymon Domzalski",   "Jay Heaps",   "Trajan Langdon",   "Corey Maggette",   "Chris Carrawell",   "Shane Battier",   "Ryan Caldbeck",   "Nate James",   "J.D. Simpson",   "Andre Sweet",   "Carlos Boozer",   "Mark Causey",   "Matt Christensen",   "Mike Dunleavy",   "Jason Williams",   "Andre Buckner",   "Dahntay Jones",   "Casey Sanders",   "Andy Borman",   "Luol Deng",   "Chris Duhon",   "Nick Horvath",   "Andy Means",   "Michael Thompson",   "Daniel Ewing",   "Reggie Love",   "Tom Novick",   "Shavlik Randolph",   "Eric Boateng",   "Patrick Davidson",   "Sean Dockery",   "Patrick Johnson",   "Lee Melchionni",   "Ross Perkins",   "JJ Redick",   "Shelden Williams",   "Jamal Boykin",   "Josh McRoberts",   "Joe Pagliuca",   "Nick Sutton",   "Griffin Tormey",   "Taylor King",   "DeMarcus Nelson",   "Gerald Henderson",   "Dave McClure",   "Greg Paulus",   "Martynas Pocius",   "Elloit Williams",   "Olek Czyz",   "Jordan Davidson",   "Steve Johnson",   "Jon Scheyer",   "Lance Thomas",   "Brian Zoubek",   "Kyrie Irving",   "Casey Peters",   "Kyle Singler",   "Nolan Smith",   "Michael Gbinije",   "Miles Plumlee",   "Austin Rivers",   "Seth Curry",   "Ryan Kelly",   "Alex Murphy",   "Mason Plumlee",   "Andre Dawkins",   "Josh Hairston",   "Rodney Hood",   "Jabari Parker",   "Tyler Thornton",   "Todd Zafirovski",   "Quinn Cook",   "Tyus Jones",   "Sean Kelly",   "Semi Ojeleye",   "Jahlil Okafor",   "Rasheed Sulaimon",   "Justise Winslow",   "Brandon Ingram",   "Marshall Plumlee",   "Derryck Thornton",   "Harry Giles",   "Frank Jackson",   "Amile Jefferson",   "Chase Jeter",   "Matt Jones",   "Luke Kennard",   "Sean Obi",   "Nick Pagliuca",   "Jayson Tatum",   "Grayson Allen",   "Marvin Bagley III",   "Brennan Besser",   "Marques Bolden",   "Mike Buckmire",   "Wendell Carter Jr.",   "Javin DeLaurier",   "Trevon Duval",   "Jordan Goldwire",   "Alex O'Connell",   "Justin Robinson",   "Gary Trent Jr.",   "Jordan Tucker",   "Antonio Vrankovic",   "Jack White",   "RJ Barrett",   "Cam Reddish",   "Zion Williamson",   "Tre Jones",   "Vernon Carey Jr.",   "Cassius Stanley",   "Matthew Hurt",   "Jaemyn Brakefield",   "Henry Coleman III",   "Jalen Johnson",   "DJ Steward",   "Patrick Tape",   "Joey Baker",   "Wendell Moore Jr.",   "Michael Savarino",   "Keenan Worthington",   "Mark Williams",   "Paolo Banchero",   "A.J. Griffin",   "Theo John",   "Bates Jones",   "Trevor Keels",   "Jeremy Roach",   "Jaylen Blakes",   "Stanley Borden",   "Spencer Hubbard",   "Kale Catchings",   "Kyle Filipowski",   "Jacob Grandison",   "Max Johns",   "Dereck Lively II",   "Mark Mitchell",   "Tyrese Proctor",   "Christian Reeves",   "Jaden Schutt",   "Dariq Whitehead",   "Ryan Young",   "Neal Begovich",   "Caleb Foster",   "Jared McCain",   "TJ Power",   "Sean Stewart", "Baker Perry", "D. Bryant", "Andy Berndt", "Dave Colonna", "Rey Essex", "Jon Goodman", "Vince Crump", "Maliq Brown", "Isaiah Evans", "Cooper Flagg", "Mason Gillis", "Darren Harris", "Sion James", "Kon Knueppel II", "Khaman Maluach", "Patrick Ngongba II", "Cameron Sheffield" ];
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
	player = plyrs.filter(e => e.playerid == ids[dayNum - 866])[0];
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
		return ["F","C","G/F","F/G","F/C","C/F"];
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