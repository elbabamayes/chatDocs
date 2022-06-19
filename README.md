# chatDocs
Final work 
Gebruikerdocumentatie: 
Hieronder vind je het stappenproces van de applicatie, bij vragen kan je me gerust bereiken op het emailadres : mayes.el.baba@student.ehb.be
Als je de applicatie start kan je de onboarding pagina zien, waar je nuttige informatie over de applicatie kan vinden. Hierna kan je kiezen om je in te loggen als patiënt of doctor.
Indien he kiest om je in te loggen als patient, moet je eerst een account aan maken aan de hand van register pagina, je kan jou gegevens invullen en bevestige om een account te maken. Hiervoor zou je gebruik maken van je eigen naam, emailadress, wachtwoord en GSM nummer . 
Nadat je een account hebt aangemaakt kan je aan de slag gaan met de applicatie en inloggen, via je email en wachtwoord. 
Je kan terechtkomen op de homepagina, hierin kan je 2 keuzes maken: een consultatie met doctor aanvragen of je documenten zien. Nu ben je nieuwe klant dus je hebt geen documenten. Dus we gaan een consultatie aanvragen.
Dit gebeurt door op Start knop te klikken, je zal eerst jou live locatie delen. Het zal nodig zijn voor latere stappen. Na het bevestigen van de locatie kan je een Symptomen formulier invullen, zodat de doctor een idee krijgt over jou situatie. Je check van check knop het en dan stuur je het door.
Je zal op de wachtlijst van de doctor staan en zo snel mogelijk een videocall van de doctor ontvangen. Ondertussen zal je een wachtpagina zien met een simpele animatie.
Na de gesprek met de doctor zal je alle nodige documenten vinden zoals: de beschrijving van de consultatie, doctor voorschrift voor school/werk en medicatie.
Je kan jou eigen informatie veranderen aan de hand van profile pagina.
Zo ben je geslaagd om een consultatie vanuit thuis of eender waar je bent en alle nodige hulp ontvangen.
Als je in logt als een doctor zou je eerst een account aanmaken aan de hand van je email en RIZIV nummer, dat is een speciale nummer die elke erkende doctor ontvangt van de overheid.
Nadat je ingelogd bent kan je op de homepagina komen, hier zal je een lijst zien van de wachtende patiënten en kan zicht hebben op hun documentatie.
Indien je op de naam van de patiënt klikt kan je zijn aanvraag accepteren en naar zijn dossier gaan om zijn gegevens te zien en vooral zijn symptomen formulier. Zo kan je ook kiezen om een videocall te starten met de patiënt en beginnen met de consultatie.
Na de consultatie kan de doctor alle nodige documenten maken en delen met de patiënt. Als doctor heb je recht om die documenten te editen, verwijderen en updaten indien nodig is.
Login gegevens om een videoCall uit te voeren: 
User1: 
Email : user1@aa11.aa
Password: user1pass
User 2: 
Email : user2@aa11.aa
Password: user2pass

Zo heb je kennisgemaakt met alle tools en pagina’s van Chat Docs applicatie.
 
Onderhouds documentatie:
Deze documentatie kan gebruikt worden om Chat Docs applicatie te onderhouden.
Chat Docs is een applicatie waar patiënten live consultatie kunnen uitvoeren met een wachtdoctor, die de nodige hulp gaat aanbieden en indien nodig je naar een gespecialiseerde doctor verwijzen.
Login gegevens om een videoCall uit te voeren: 
User1: 
Email : user1@aa11.aa
Password: user1pass
User 2: 
Email : user2@aa11.aa
Password: user2pass

Gebruikte Technologie: 
•	React Native: 
•	Firebase:  versie 14.9.1
•	Node.js: 16.15.1
•	React native voximplant: 1.32.1
•	React native firebase authentication: 14.9.1
•	React native geolocation service : 5.3.0-beta.4
•	React native permissions: 3.3.1

Getting started: 
Om dit project locaal op een Andriod emulator te gebruiken, volg de onderstaande stappen: 
•	Maak een lokale folder aan waar je de volgende github repo in intialiseert:
https://github.com/elbabamayes/chatDocs.git

•	Instaleer je eigen android emulator in Andoid studio
•	Hierna installeer al de nodige packages door ‘npm install’ te typen in de terminal.
•	Nu ga je de applicatie op de emutator builden binnen Android studio 
•	Nu kan je starten met het gebruik van de applicatie, type ‘ npx react-native run-android ’ in de terminal 
•	De scherm van android emulator zal openen en je kan de applicatie gebruiken.
•	Om live locatie te bevestigen, hiervoor moet je toestemming geven aan de app om je locatie te nemen. Dit gebeurt via een react native permission.
•	Om de stappen plan te volgen voor het maken van eigen videocall volg de video’s en documentatie in de bijlage

Links video’s en documentatie
Android emulator setup
Setting up the development environment. (z.d.). React Native. Geraadpleegd op 15 mei 2022, van https://reactnative.dev/docs/environment-setup

VideoCall:

Voximplant. (z.d.-a). Intelligent Cloud Communications: APIs|SDKs, Contact Center, IVR, NLP. Geraadpleegd op 25 mei 2022, van https://voximplant.com/

notJustdev. (2021a, november 6). Let’s build a VIDEO calling app with React Native . YouTube. Geraadpleegd op 25 mei 2022, van https://www.youtube.com/watch?v=rb70_TXRQNE&t=10898s


notJustdev. (2021b, november 13). Let’s build a VIDEO calling app with React Native and Voximplant [P2]. YouTube. Geraadpleegd op 27 mei 2022, van https://www.youtube.com/watch?v=jDTzKrwcDvQ

Locatie permission:
Zoontek, Z. (z.d.). GitHub : An unified permissions API for React Native on iOS and Android. GitHub. Geraadpleegd op 22 mei 2022, van https://github.com/zoontek/react-native-permissions


Auteur: 
Mayes.el.baba@student.ehb.be
 
Testverslag :

El Baba Marwa, 19 jaar
Student Verpleegkunde
Marwa heeft de applicatie getest nadat tijdens de design fase, om te zien als alle Ui en Ux duidelijk is.
Ze wou een account aanmaken en het is gelukt, maar ze wist niet hoelang mag de wachtwoord zijn en hoeveel nummers erin mogen komen. Ik heb haar hierbij gesteund. Hierna heeft ze zich ingelogd en wou een consultatie gesprek starten, alles ging vlot en was duidelijk hoe ze te werk moet gaan.
Marwa vond de kleuren mooi en past bij de zorg, alles was simpel en fijn uitgewerkt. Ze heeft wel paar tips gegeven om de proces eenvoudiger te maken, bv: een wachtpagina tonen zodat de patiënt weet dat zijn aanvraag is ingediend en hij moet nu wachten op de doctor.
Ik heb haar opmerking zeker genomen en een wachtpagina ontwikkelt en een validatie systeem toegevoegd aan de register formulier, om te weten hoelang het wachtwoord moet zijn.


Alsaiqali Samar, 35 jaar 
Moeder van 2 kineren
Samar heeft de applicatie op haar Android gsm getest, ze vond het eenvoudige om te gebruiken. Ze wist welke stappen dat ze moet doen om een consultatie te starten, heeft rechten aan de applicatie gegeven en haar live locatie gedeeld. 
Ze vond het een heel toffe applicatie en hoopt dat het ooit op de markt kan komen, omdat het eenvoudig is en veel tijd voor haar spendeert vooral voor haar als een moeder van 2 kinderen.
