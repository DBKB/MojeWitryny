//Klasa obiektu news na strone główną OK
//Obiekt wiadomości ma obrazek, tytuł może krutki opis i OK
//link doprwadzający do rozwinięcia info o wydarzeniu etc.. OK

//Jest to uniwersalny obiekt kafli więc będzie wykorzystany do produktu, dlatego porzebuje jeszcze 1 właściwość
//-wyróżnienie w postaci lekkiego migania gdy nie jest najechany

//Oprucz tego potrzebny jest zewnętrzny kontroler zczytujący obiekty z bazy danych i wyświetlający je na stronie wraz z odpowiednimi stronami(linkami do nich)
//Jeśli jakiś produkt jest niedostępny bądź news jest już stazry niewyświetlać go
//O ile newsy są dodawane ręcznie o tyle produkty muszą być funkcyjnie newsy też mogą być funkcyjnie w takim przypadku jest zasada wszystkie nowe lub jak nie ma nowych to 3 stare
//muszą być conajmniej 3 newsy żeby nie było zbyt pusto

//----RESZTA-----

//należy dodać stronę logowanie, konto, sklep, koszyk i gry(gry to jakie kolwiek gry i widok obiektów 3d)

class Kafla
{
    constructor(nazwa,opis,zdjecie, link)
    {
        this.nazwa=nazwa;
        this.opis=opis;
        this.zdjecie=zdjecie;
        this.link=link;
    }

    wyswietl(katalog)
    {//background-image: url('+this.katalog+this.zdjecie+')
        document.getElementById("content").innerHTML+='<div class="kafelka" title="'+this.nazwa+'"><div class="zdjKafli" style="background-image: url('+katalog+this.zdjecie+');"></div><div class="opisKafli"><a href="'+this.link+'">'+this.opis+'</a></div>';
    }
}//style="background-image: url(/Pliki/Obrazki/cos.jpg);"