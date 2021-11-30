
// -------------------------------- JavaScript dasar --------------------------------------------
// Untuk menampilkan pesan ke consol
console.log("Hello Dicky")

// Baris kode ini merupakan expression karena interpreter akan membaca kode ini dan menghasilkan nilai 5.
5;

// Baris kode ini juga merupakan expression. Interpreter mengevaluasi kode dan juga akan menghasilkan nilai 5.
2 + 3


// declaration statement

var yourName;

let yourAge;

const numberOfDays; //

// -------------------------------- JavaScript Comment --------------------------------------------
// ini adalah penggunaan (//) comment untuk menutup sebuah code perintah 
    // console.log()

// ini adalah penggunaan comment yang sama dengan (//) tapi adalah awalan dan akhiran menggunakan (/* ...... */)
    /* Ini merupakan komentar dengan lebih dari satu baris
    Teks apapun yang berada disini akan dijadikan komentar.
    Ketika menggunakan ini.
    */

// -------------------------------- JavaScript Variable --------------------------------------------
/* variable javascript ada 3 yaitu let, var, dan const */

//  Contoh penggunaan variable pada javascript dengan menggunakan =
let lastName;
lastName = "Skywalker";

console.log(lastName);

/* output
Skywalker
*/

//  Contoh penggunaan variable pada javascript lansung pada variable
let lastName = "Skywalker";

console.log(lastName);

/* output
Skywalker
*/

// Penggunaan Expression & Statement 
// Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
// let fullName = let lastName; 

// (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = (lastName = "Skywalker"); 

// "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; 

// Sedangkan variable const ialah variable yang isinya tidak bisa dirubah lagi dalamnya, contoh
const z = 100;
console.log(z);
z = 200;
console.log(z)

/* akan menghasilkan TypeError: Assignment to constant variable. */

// -------------------------------- JavaScript Tipe Data --------------------------------------------
// tipe data undefined adalah variable yang tidak memiliki nilai, contoh
let x;
console.log(typeof(x));

/* output: undefined */

// tipe data number adalah tipe data yang nilainya berisi angka, contoh
let x = 10;
console.log(typeof(x))

/* output: number */

let y = 17.25;
console.log(typeof(y))

/* output: number */

// perhitungan aritmatika dengan tipe data number
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/

// operator aritmatika seperti increment(++) dan decodeURIComponent(--), contoh
/* Increment dan Decrement */

let inc = 5;
console.log(inc++);
/* output: 5 */

console.log(inc);
/* output: 6 */

let inc = 5;
console.log(++inc);
/* output: 6 */

// BigInt merupakan tipe data number yang mencakup nilai yang lebih besar

// penggunaan dengan cara menambahkan n di akhir number, seperti
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

// tipe data String merupakan tipe data yang bertipe/nilai huruf 
let greet = "Hello";
console.log(typeof(greet))

/* output: string */

// tipe data boolean merupakan tipe nilai yang berisi 2 yaitu true dan false
let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

/* output: 
boolean
boolean
*/

// tipe data null merupakan tipe data yang memiliki nilai null dan harus diinisiasi terlebih dahulu atau diisi tidak seperti undifined
let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

// tipe data Symbol merupakan tipe baru pada ES6 yang digunakan untuk menunjukan identifier yan unik
const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/

// -------------------------------- JavaScript Operator --------------------------------------------
// merupakan simbol yang memberi tahu untuk melakukan operasi atau interpreter, contoh
x = y // ekpression menginisiasi nilai y ke variable y, sehingga nilai x berisi sama dengan nilai y

let x = 10;
let y = 5

x += y;

console.log(x);

/* output
15
*/

// maksud x += y seperti perumpamaan x + y

// Comparasion operator adalah operator perbandingan 2 nilai
// == membandingkan kedua nilai apakah sama
// != membandingkan kedua nilai apakah tidak sama
// === membandingkan apakah kedua nilai identik
// !=== membandingkan apakah kedua nilai tidak identik
// > membandingkan apakah nilai pertama besar dengan kedua
// >= membandingkan apakah nilai pertama lebih besar dan sama dari kedua
// < membandingkan apakah nilai pertama kecil dari kedua
// <= membandingkan apakah nilai pertama lebih kecil dan sama dari kedau
// contoh
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

// Logika operator merupakan operator untuk menetapkan logika yang lebih kompleks
// && operator yang menghasilkan nilai true apabila kedua pernyataan terpenuhi
// || operator yang menghasilkan nilai true apabila salah satu pernyataan terpenuhi 
// ! Operator untuk membalikkan suatu kondisi.
// contoh
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/

// -------------------------------- JavaScript IF/ELSE Statement --------------------------------------------
// merupakan kata kunci untuk mengecek sebuah kondisi dengan bercabang
// contoh
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

/* output:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
 */

// ternary operator kode perintah if/else dalam 1 baris lurus, seperti
const isMember = false;
const discount = isMember ? 0.1 : 0;
// sebelum tanda (?) merupakan kondisi yang ingin kita evaluasi. kemudia diikuti dengan expression apabila benar dan setelah : merupakan expression apabila salah

// Truthy & falsy merupakan nilai yang apabila nilai ketika dievaluasi akan menghasilkan true disebut truthy dan nilai ketika dievaluasi menghasilkan false disebut falsy


