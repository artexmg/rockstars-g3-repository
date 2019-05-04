// (c) Enroute 2018
//
//     Prepared by AMG
//
let doc = window.document;

console.log(doc);
console.log(doc.all);
console.log(doc.all[0]);
console.log(doc.all[1]);
console.log(doc.all[2]);

console.log(doc.all.length);
console.log(doc.body);
console.log(doc.head);
console.log(doc.body);
console.log(doc.doctype);
console.log("domain=" + doc.domain);
console.log("URK=" + doc.URL);
console.log("style=" + doc.characterSet);
console.log("ContenType=" + doc.contentType);

// FORMS as HTML Collection
console.log(doc.forms);
console.log(doc.forms[1]);

console.log(doc.forms[0].id);
console.log(doc.forms[0].method);

console.log(doc.links);
console.log(doc.links[0]);
console.log(doc.links[0].id);

console.log(doc.links[0].className);
console.log(doc.links[0].classList[0]);

console.log(doc.images);
console.log(doc.scripts);
console.log(doc.scripts[2].getAttribute("custom"));

// CONVERT HTML Collection into ARRAY
let scriptsArr = Array.from(document.scripts);
scriptsArr.forEach(function(script, i) {
  console.log(`Script ${i} property src ="${script.getAttribute("src")}"`);
});
