Kära dagbok

### 6/1 fredag

Joel

- funktionalitet för login/register
- WithHeader
- header komponenten

Viktor
Dear dairy, what a day, let me tell you, it started off great with a team session with my team, #Teamwork #planning #LOL #Yolo

- Routes för componenter
  -styling för Welcome page
  -styling för register

Nina

försökt få in fontawesom som iconer men fattar inte steget med babel set up config.
https://fontawesome.com/v6/docs/web/use-with/react/add-icons
"Add the following to your babel.config.js file:" hittar inte denna filen, måste jag skapa den själv?

- skapat iconer till Listkorten

### 7/1 lördag

Joel

- fipplat med funktionalitet för slide in/out för menyn
- refactor Menu till egen komponent, refactor MenuNavLinks till egen komponent
- lagt till styling och ikoner i menyn
- skapade tom AboutUs komponent och länk+ikon i menyn
- flyttade Provider (redux) till Index.js
- lade till blur effect på hela appen om meny är öppen

Viktor

-styling stort sett klar för register,
-att göra, flytta ut componeterna från register till global, använd dem i login
-imorgon söndag
-styla klart WElcome + login

Nina

- tagit bort Fontawesome npm packages
- fixat svg-filer, kollat så att logo funkar
- lagt in och fixat med iconer .svg
- mapp iconsR de som ska renderas.
- startat på Listview
- added component listcard

### 8/1 Söndag

Nina

- strulat med iconer,
- startat i ListView (ändrat felstavning ListvView)

- Skapat start utifrån om det finns listCards eller inte.
  /home => SelectStart, finns ListCards => ListView om inte StartState (welcome msg)
  funkar inte än, behöver hjälp med state/store

Finns useEffect accessToken både i SelectStart och ListView tror den kan plockas bort i ListView.

- skapat em map med små componenter typ bth eller liknande
- skapat AddBtn som används både i ListView och StartState

Viktor

- flytta ut componeterna från register till global, använd dem i login
- stylat klart WElcome + login

Joel

- BirthdayCreateEdit klar stylingmässigt för mobil, saknas många funktioner fortfarande
- flyttade komponenter till egna mappar

### 9/1 Måndag

update möte fm efter team session och 17.30
mob programming "lägga ut kablar"

Joel

- Refaktorerat BirthdayCreateEdit, ny komponent CreateEditContentWrapper
- styling till kalender
- hämta in data i BirthdayCreateEdit och anpassa för Edit
- POST /birthday fungerar för skapa ny födelsedag
- BirthdayCreateEdit fungerar nu även för edit, och även PATCH /birthday

### 10/1 Tisdag

update möte efter team session
och 19-ish

Nina

- ListView, ListCard
- Tunnare Iconer , färglägga?
- beräknat år, countdown days, och Age.
  https://www.npmjs.com/package/calculate-age
  https://birthday-wisher.netlify.app/?ref=morioh.com&utm_source=morioh.com
- Age.js

Joel

- Styling för DetailView och CreateEditView likadan
- funktionalitet för delete birthday
- flyttat options till en egen funktion i util, refaktorerat alla ställen där fetch används

### 11/1 Onsdag

- bytt favicon.ico till ballongerna
- buggfix register
- refactor util
- delete user (+ ändring i backend)
