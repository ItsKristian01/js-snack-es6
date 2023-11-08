
### ESERCIZIO: Snacks

---

### **CONSEGNA:**
**Snack 1**
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

**Snack2**
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

**Snack Bonus**
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
es:
const numbersArray = [23, 14, 6, 8, 10];
const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]


----

**Procedimento:**
**Snack 1:**
- Creare un array di oggetti con nome e peso della bicicletta
- Faccio un ciclo for per prendere gli elemnti del array 
- Creo un cicolo if con condizione 
se peso e === a min 
   allora stampo peso
altrimenti stampo messaggio "Non e' la bicicletta con peso minore"


