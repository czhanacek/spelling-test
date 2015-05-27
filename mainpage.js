

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
// test
function doHandoff(testID) {
    var item = "";
    var wordList = "";
    switch(testID) {
        case 1:
            	item = JSON.stringify(oA1);
	case 2:
		item = JSON.stringify(oA2);
	case 3:
		item = JSON.stringify(oA3);
	case 4:
		item = JSON.stringify(oB1);
	case 5:
		item = JSON.stringify(oB2);
	case 6:
		item = JSON.stringify(oB3);

	case 7:
		item = JSON.stringify(twoC1);
	case 8:
		item = JSON.stringify(twoC2);
	case 9:
		item = JSON.stringify(twoC3);
	case 10:
		item = JSON.stringify(twoD1);
	case 11:
		item = JSON.stringify(twoD2);
	case 12:
		item = JSON.stringify(twoD3);

	case 13:
		item = JSON.stringify(thrE1);
	case 14:
		item = JSON.stringify(thrE2);
	case 15:
		item = JSON.stringify(thrE3);
	case 16:
		item = JSON.stringify(thrF1);
	case 17:
		item = JSON.stringify(thrF2);
	case 18:
		item = JSON.stringify(thrF3);

	case 19:
		item = JSON.stringify(forG1);
	case 20:
		item = JSON.stringify(forG2);
	case 21:
		item = JSON.stringify(forG3);
	case 22:
		item = JSON.stringify(forH1);
	case 23:
		item = JSON.stringify(forH2);
	case 24:
		item = JSON.stringify(forH3);

	case 25:
		item = JSON.stringify(fivI1);
	case 26:
		item = JSON.stringify(fivI2);
	case 27:
		item = JSON.stringify(fivI3);
	case 28:
		item = JSON.stringify(fivJ1);
	case 29:
		item = JSON.stringify(fivJ2);
	case 30:
		item = JSON.stringify(fivJ3);

	case 31:
		item = JSON.stringify(sixK1);
	case 32:
		item = JSON.stringify(sixK2);
	case 33:
		item = JSON.stringify(sixK3);
	case 34:
		item = JSON.stringify(sixL1);
	case 35:
		item = JSON.stringify(sixL2);
	case 36:
		item = JSON.stringify(sixL3);

	case 37:
		item = JSON.stringify(sevM1);
	case 38:
		item = JSON.stringify(sevM2);
	case 39:
		item = JSON.stringify(sevM3);
	case 40:
		item = JSON.stringify(sevN1);
	case 41:
		item = JSON.stringify(sevN2);
	case 42:
		item = JSON.stringify(sevN3);

	case 43:
		item = JSON.stringify(eiO1);
	case 44:
		item = JSON.stringify(eiO2);
	case 45:
		item = JSON.stringify(eiO3);
	case 46:
		item = JSON.stringify(eiP1);
	case 47:
		item = JSON.stringify(eiP2);
	case 48:
		item = JSON.stringify(eiP3);
	
	case 49:
		item = JSON.stringify(niQ1);
	case 50:
		item = JSON.stringify(niQ2);
	case 51:
		item = JSON.stringify(niQ3);
	case 52:
		item = JSON.stringify(niR1);
	case 53:
		item = JSON.stringify(niR2);
	case 54:
		item = JSON.stringify(niR3);

	case 54:
		item = JSON.stringify(teS1);
	case 55:
		item = JSON.stringify(teS2);
	case 56:
		item = JSON.stringify(teS3);
	case 57:
		item = JSON.stringify(teT1);
	case 58:
		item = JSON.stringify(teT2);
	case 59:
		item = JSON.stringify(teT3);

	case 60:
		item = JSON.stringify(elU1);
	case 61:
		item = JSON.stringify(elU2);
	case 62:
		item = JSON.stringify(elU3);
	case 63:
		item = JSON.stringify(elV1);
	case 64:
		item = JSON.stringify(elV2);
	case 65:
		item = JSON.stringify(elV3);

	case 66:
		item = JSON.stringify(tweW1);
	case 67:
		item = JSON.stringify(tweW2);
	case 68:
		item = JSON.stringify(tweW3);
	case 69:
		item = JSON.stringify(tweX1);
	case 70:
		item = JSON.stringify(tweX2);
	case 71:
		item = JSON.stringify(tweX3);	


	case 71:
		item = JSON.stringify(thteY1);	
	case 72:
		item = JSON.stringify(thteY2);	
	case 73:
		item = JSON.stringify(thteY3);	
	case 74:
		item = JSON.stringify(thteZ1);	
	case 75:
		item = JSON.stringify(thteZ2);	
	case 76:
		item = JSON.stringify(thteZ3);	

         
            
    }
    localStorage.setItem("wordList", item);
    window.location.href = "testPage.html";
}
var oA1 = ["the", "of", "and", "a","to"];
var oA2 = ["in", "is", "you","that","is"];
var oA3 = ["he", "for", "was","on","are"];
var oB1 = ["as", "with", "his","they","at"];
var oB2 = ["be", "this", "from", "I", "have"];
var oB3 = ["or", "by", "one","had","not"];

var twoC1 = ["but", "all", "when","can","your","what","were","we","there","an"];
var twoC2 = ["which", "said", "do","each","how","their","if","will","about","up"];
var twoC3 = ["out", "then", "many","so","would","them","she","some","these","other"];
var twoD1 = ["into", "more", "two","him","time","has","her","like","see","could"];
var twoD2 = ["no", "than", "been","who","made","make","first","it's","now","my"];
var twoD3 = ["over", "down", "only","may","water","did","people","way","use","find"];

var thrE1 = ["little", "after", "long","know","where","called","words","very","through","just"];
var thrE2 = ["most", "back", "go","new","our","get","much","good","write","me"];
var thrE3 = ["man", "any", "same","think","around","too","day","look","also","right"];
var thrF1 = ["another", "work", "must","does","place","came","three","because","part","well"];
var thrF2 = ["such", "take", "help","diffrent","again","here","why","put","away","off"];
var thrF3 = ["went", "number", "tell","say","every","old","great","men","small","found"];

var forG1 = ["still", "name", "home","give","line","between","should","big","air","set"];
var forG2 = ["own", "last", "us","end","while","read","never","left","along","might"];
var forG3 = ["next", "even", "thought","something","below","sound","under","both","saw","few"];
var forH1 = ["those", "show","often","asked","don't","always","large","together","house","world"];
var forH2 = ["going", "school","until","food","children","want","important","form","keep","feet"];
var forH3 = ["land", "without", "once","life","took","side","boy","animal","enough","head"];

var fivI1 = ["above", "began", "live","got","need","kind","almost","page","earth","far"];
var fivI2 = ["hand", "year", "four","country","let","high","mother","light","father","night"];
var fivI3 = ["picture", "study", "soon","since","ever","begin","second","story","white","paper"];
var fivJ1 = ["hard","sentence","best","during","however","near","better","across","today","sure"];
var fivJ2 = ["know", "try", "young","thing","hear","its","told","sun","whole","example"];
var fivJ3 = ["heard","change", "room","againist","turned","several","answer","sea","top","learn"];

var sixK1 = ["point", "play","fire","usually","seen","city","towards","himself","money","didn't"];
var sixK2 = ["car", "i'm", "upon","later","move","morning","body","family","turn","face"];
var sixK3 = ["door", "done", "true","red","plant","cut","group","half","fish","living"];
var sixL1 = ["eat", "united states","book","order","ground","short","run","gave","open","become"];
var sixL2 = ["cold","table","tree","front","space","really","remeber","course","american","inside"];
var sixL3 = ["ago", "early", "learned","close","though","sad","i'll","brought","nothing","idea"];

var sevM1 = ["before", "became","grow","yet","wind","lived","add","draw","less","behind"];
var sevM2 = ["cannot", "among", "dog","mean","rest","letter","able","shown","english","perhaps"];
var sevM3 = ["certain", "feel", "ready","yes","special","six","fire","green","built","ran"];
var sevN1 = ["full", "complete","person","anything","state","town","oh","not","hold","list"];
var sevN2 = ["hundred","fast","kept","black","strong","ten","felt","notice","can't","voice"];
var sevN3 = ["probably", "horse", "stand","start","class","area","matter","box","that's","piece"];

var eiO1 = ["surface", "common","am","whether","round","river","stop","talk","fine","dark"];
var eiO2 = ["past", "girl", "blue","either","already","ball","road","instead","held","warm"];
var eiO3 = ["gone", "summer", "moon","mind","power","finally","understand","animals","outside","problem"];
var eiP1 = ["longer", "winter","deep","heavy","carefully","follow","beautiful","everyone","leave","everything"];
var eiP2 = ["game","system","bring","watch","shall","dry","within","floor","ice","ship"];
var eiP3 = ["themselves", "begin", "fact","third","quite","carry","distance","although","sat","possible"];

var niQ1 = ["heart", "simple","rain","easy","lay","real","snow","suddenly","leaves","size"];
var niQ2 = ["wild", "miss", "sky","main","center","weather","pattern","walked","someone","foot"];
var niQ3 = ["stay", "boat", "wide","tiny","happen","itself","question","least","hour","foot"];
var niR1 = ["care", "else", "build","rock","alone","low","gold","glass","tall","bottom"];
var niR2 = ["check", "fall","map","language","music","reading","poor","friend","job","buy"]
var niR3 = ["window", "heat", "listen","single","energy","mark","grew","ask","clear","week"];

var teS1 = ["explain", "spring","wrote","circle","correct","lost","travel","farm","whose","free"];
var teS2 = ["fell", "natural", "sky","main","center","weather","pattern","walked","someone","couldn't"];
var teS3 = ["reason", "maybe", "mouth","step","strange","difference","history","middle","child","wish"];
var teT1 = ["soil", "trip", "eye","choose","seven","human","woman","milk","north","famous"];
var teT2 = ["late", "sleep","trouble","beside","modern","pay","iron","store","oil","fun"]
var teT3 = ["catch", "reach", "won't","speak","eight","business","lot","case","shape","edge"];

var elU1 = ["soft", "object","minute","meet","copy","village","age","wall","record","forest"];
var elU2 = ["especially", "he's", "flat","south","skin","necessary","unit","direction","subject","wasn't"];
var elU3 = ["i've", "party", "test","temperature","ahead","yellow","force","bad","pair","wrong"];
var elV1 = ["practice", "tail", "difficult","cover","isn't","sand","wait","general","material","thousand"];
var elV2 = ["sign", "forward","ride","nor","blood","guess","huge","region","period","rich"]
var elV3 = ["team", "cat", "garden","note","race","corner","amount","led","various","bit"];

var tweW1 = ["result", "addition","dead","thin","hit","brother","doesn't","weight","stone","wife"];
var tweW2 = ["island", "opposite", "sense","million","rule","we'll","born","cattle","anyone","science"];
var tweW3 = ["bed", "straight", "caught","wood","color","measure","mountain","hair","bird","war"];
var tweX1 = ["fly", "seem", "teacher","afraid","produce","yourself","moment","happy","women","pull"];
var tweX2 = ["son", "broken","chance","sight","train","meant","interest","thick","pretty","fresh"]
var tweX3 = ["drive", "break", "brought","method","similar","lead","sit","radio","king","return"];

var thteY1 = ["corn", "position","hope","engine","control","decide","bear","song","board","spread"];
var thteY2 = ["evening", "clean", "section","ring","quiet","brown","wouldn't","spent","teeth","ancient"];
var thteY3 = ["stick", "silver", "century","level","death","afternoon","knows","therefore","you'll","hole"];
var thteZ1 = ["coast", "sharp", "capital","deal","beyond","cross","fight","fill","busy","send"];
var thteZ2 = ["love", "cause","meat","west","action","cool","please","lady","glad","pass"]
var thteZ3 = ["type", "gas", "pick","basic","safe","attention","kitchen","scale","happen","grown"];
