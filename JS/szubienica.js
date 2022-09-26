var baza = [
    "Bez pracy nie ma kołaczy",
    "Ania ma kota",
    "Kot ma anie",
    "Zimne piwo Apsolutnie najlepsze",
    "My lubimy palić",
    "Gin na wodę",
    "Wilczy kieł",
    "Xardas nie lubi pyrokara",
    "Górnicza dolina",
    "Wszechświat cieszy",
    "Wiwacik",
    "Lata Tadek po orbicie",
    "No to enter",
    "To w eter",
    "Zjednoczone Stany Ameryki",
    "Droga mleczna",
    "Hasło",
    "when johnny comes marching home",
    "Aby do wiosny",
    "albo wóz albo przewóz",
    "apetyt rośnie w miarę jedzenia",
    "baba z wozu koniom lżej",
    "biednemu zawsze wiatr w oczy",
    "broda mędrcem nie czyni",
    "cel uświęca środki",
    "ciekawość to pierwszy stopień do piekła",
    "co dwie głowy to nie jedna",
    "co kraj to obyczaj",
    "gdzie kucharek sześć tam nie ma co jeść",
    "jadłby kot ryby ale nie chce ogona moczyć",
    "Mądry Polak po errorze",
    "Nie wszystko dioda co się świeci",
    "komu w drogę temu czas"
]




var haslo = "Bez pracy nie ma kołaczy";
var liczbaLiter=0;
var haslo2 ="";

var dlugosc = haslo.length;

var punkty=0;
var punktyStare=0;

var litery = new Array(35);

var ok = new Audio("Pliki/Dzwieki/Ok.wav");
var bad = new Audio("Pliki/Dzwieki/Bad.wav");

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function Los()
{
    haslo=baza[Math.floor(Math.random()*baza.length)];
    baza.pop(haslo);
}

function wypisz()
{
    for(i=0; i<haslo.length; i++)
    {
        if(haslo.charAt(i)==" ")
        {
            haslo2 +=' ';
        }
        else
        {
            haslo2 +="-";
            liczbaLiter++;
        }
        
    }
    document.getElementById("plansza").innerHTML = haslo2;
}
var numerzdj=0;
var czyGram=true;
function odkryj(znak)
{
    if(numerzdj<6 && liczbaLiter>0)
        {
    czyZnalezione=false;
    for(i=0; i<haslo.length; i++)
    {
        if(haslo.charAt(i).toLocaleLowerCase()==znak.toLocaleLowerCase())
        {
            
            haslo2=haslo2.ZmienZnak(i,znak);
            czyZnalezione=true;
            liczbaLiter--;
            punkty++;
        }
    }
    if(czyZnalezione)
    {
        ok.play();
        document.getElementById(znak).style.background="#008800";
        document.getElementById("plansza").innerHTML = haslo2;
        if(numerzdj==5 && liczbaLiter<=0)
        {
            alert("O włos!");
            document.getElementById("szubienica").innerHTML ='<img id="szubienica" src="Pliki/Obrazki/Moment.jpg" style="height: 100px;">';
        }
        
    }
    else
    {
        bad.play()
        numerzdj++;
        document.getElementById(znak).style.background="#930000";
        document.getElementById("szubienica").innerHTML ='<img id="szubienica" src="Pliki/Obrazki/s'+numerzdj+'.jpg" style="height: 100px;">';
        
        }
    }
    if(numerzdj>5)
        {
            alert("Nie wyszlo niestety, poprawna odpowiedź to: "+haslo)
        }
    document.getElementById("Poziom").innerText=punkty;
    document.getElementById(znak).onclick="";
}

window.onload = start;

function start()
{
    document.getElementById("szubienica").innerHTML ='<img id="szubienica" src="Pliki/Obrazki/s1.jpg" style="height: 100px;">';
    document.getElementById("Poziom").innerText=punkty;
    for(i=0; i<35; i++)
    {
        if((i+1)%7==0)
        {
            document.getElementById("alfabet").innerHTML+='<div class="litera" id="'+litery[i]+'" onclick="odkryj(\''+litery[i]+'\')" style="clear:both;" >'+litery[i]+'</div>';
        }
        else
        {
            document.getElementById("alfabet").innerHTML+='<div class="litera" id="'+litery[i]+'" onclick="odkryj(\''+litery[i]+'\')" >'+litery[i]+'</div>';
        }
    }
    Los();
    wypisz();
}

String.prototype.ZmienZnak = function(pozycja, znak)//dokładanie metody do stringu
{
    if(pozycja>this.length-1)return this.toString();
    else return this.substring(0,pozycja)+znak+this.substring(pozycja+1);
}

function Restart()
{
    if(liczbaLiter<=0)
    {
        punktyStare=punkty;
        Restart2();
    }
    else
    {
        punkty=punktyStare;
        document.getElementById("Poziom").innerText=punkty;
        Restart2();
    }
}

function Restart2()
{
    document.getElementById("szubienica").innerHTML ='<img id="szubienica" src="Pliki/Obrazki/s1.jpg" style="height: 100px;">';
    numerzdj=0;
    liczbaLiter=0;
    haslo2="";
    haslo="";
    document.getElementById("alfabet").innerHTML="";
    Los();
    start();
}