
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
