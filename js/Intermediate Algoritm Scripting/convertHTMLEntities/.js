/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
https://www.w3schools.com/html/html_entities.asp
*/

const dic = new Map([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&apos;"]])

function convertHTML(str) {
  for(let d of dic){
    console.log(d)
    str=str.replace(new RegExp(d[0],"g"),d[1])
  }
  
  return str;
}

console.log(convertHTML("Dolce & Gabbana"))



/*
convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
convertHTML("Schindler's List") should return "Schindler&apos;s List".
convertHTML("<>") should return "&lt;&gt;".
convertHTML("abc") should return "abc".
*/