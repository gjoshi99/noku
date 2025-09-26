const {jsPDF} = window.jspdf;
const doc = new jsPDF({
 orientation: 'p',
 unit: 'mm',
 format: 'a4',
 putOnlyUsedFonts:true
});

const Regnummer = document.querySelector('.registreringsnummer')


let rightsite = 190;
let middle = 90;
let leftsite = 10;

// text markers
const textInputone = document.querySelector('.textInputone');
const textInputtwo = document.querySelector('.textInputtwo');
const textInputthre = document.querySelector('.textInputthre');
const textInputfour = document.querySelector('.textInputfour');
const textInputfive = document.querySelector('.textInputfive');
const textInputsix = document.querySelector('.textInputsix');
const textInputseven = document.querySelector('.textInputseven');
const textInputeight = document.querySelector('.textInputeight');
const textInputnine = document.querySelector('.textInputnine');
const textInputten = document.querySelector('.textInputten');
const textInputeleven = document.querySelector('.textInputeleven');


// middeltextmarkers
const middleone = document.querySelector('.middleone');
const middletwo = document.querySelector('.middletwo');
const middlethre = document.querySelector('.middlethre');
const middlefour = document.querySelector('.middlefour');
const middlefive = document.querySelector('.middlefive');
const middlesix = document.querySelector('.middlesix');
const middleseven = document.querySelector('.middleseven');
const middleeight = document.querySelector('.middleeight');
const middlesnine = document.querySelector('.middlesnine');
const middleten = document.querySelector('.middleten');
const middleeleven = document.querySelector('.middleeleven');



// numbers
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');
const seventh = document.querySelector('.seventh');
const eightth = document.querySelector('.eightth');
const nineth = document.querySelector('.nineth');
const tenth = document.querySelector('.tenth');
const eleventh = document.querySelector('.eleventh');

let total;

document.querySelector('button').addEventListener('click', () => {
        if(first.value === "" || Regnummer.value === "" || textInputone.value === "" || middleone === "" || kortchecked !== true && swishChecked !== true) {
    alert('You have to put in some values or check the payment method');
}else {


let image = new Image();

image.src = "logo.png";

// let Year = new Date().getFullYear();
// let month = new Date().getMonth();
// let day = new Date().
// month = month + 1;
let Datum = moment().format("YYYY-MM-DD");

const chooseDate = document.querySelector('.chooseDate');

setTimeout(() => {

}, 5000);

doc.addImage(image,'png', 50,7, 120,50);
doc.setFontSize(17)
doc.setFont("helvetica","normal");
doc.text("Reg:", 10,70)
if(chooseDate.value.length <= 1){
    console.log("same date has been choosed")
}else{
    Datum = chooseDate.value
}
doc.text(`${Regnummer.value.toUpperCase()}`, 25,70)
doc.text(`Datum: ${Datum}`, 10,80)
doc.rect(5,85, 200,158)
doc.setFontSize(12);

doc.setFont("helvetica","bold");
// first column
doc.text('Material',leftsite,90);
doc.text('Styck/L',middle,90);
doc.text('Pris', rightsite,90)
doc.setFont("helvetica","normal");

// first line
doc.text(`1 ${textInputone.value}`, leftsite,100)
doc.text(`${middleone.value}`, middle,100)
doc.text(`${first.value}`, rightsite,100)

if(textInputtwo.value !== "") {
// secondline
doc.text(`2 ${textInputtwo.value}`, leftsite,110);
doc.text(`${middletwo.value}`, middle,110);
doc.text(`${second.value}`, rightsite,110);

}

if(textInputthre.value !== ""){
// thirdline
doc.text(`3 ${textInputthre.value}`, leftsite,120)
doc.text(`${middlethre.value}`, middle,120)
doc.text(`${third.value}`, rightsite,120)

}

if(textInputfour.value !== "") {
// fourthline
doc.text(`4 ${textInputfour.value}`, leftsite,130)
doc.text(`${middlefour.value}`, middle,130)
doc.text(`${fourth.value}`, rightsite,130)

}


if(textInputfive.value !== ""){
// sixthline
doc.text(`5 ${textInputfive.value}`, leftsite,140)
doc.text(`${middlefive.value}`, middle,140)
doc.text(`${fifth.value}`, rightsite,140)
}

if(textInputsix.value !== "") {
// seventhlin
doc.text(`6 ${textInputsix.value}`, leftsite,150)
doc.text(`${middlesix.value}`, middle,150)
doc.text(`${sixth.value}`, rightsite,150)

}

if(textInputseven.value !== "") {
// eighth line
doc.text(`7 ${textInputseven.value}`, leftsite,160)
doc.text(`${middleseven.value}`, middle,160)
doc.text(`${seventh.value}`, rightsite,160)
}


if(textInputeight.value !== ""){
// ninethline
doc.text(`8 ${textInputeight.value}`, leftsite,170)
doc.text(`${middleeight.value}`, middle,170)
doc.text(`${eightth.value}`, rightsite,170)
}


if(textInputnine.value !== "") {
// tenthline
doc.text(`9 ${textInputnine.value}`, leftsite,180)
doc.text(`${middlesnine.value}`, middle,180)
doc.text(`${nineth.value}`, rightsite,180)

}

if(textInputten.value !== "") {
// eleventhline
doc.text(`10 ${textInputten.value}`, leftsite,190)
doc.text(`${middleten.value}`, middle,190)
doc.text(`${tenth.value}`, rightsite,190)
}

if(textInputeleven.value !== ""){
    // lastone 
    doc.text(`11 ${textInputeleven.value}`, leftsite,200)
    doc.text(`${middleeleven.value}`, middle,200)
    doc.text(`${eleventh.value}`, rightsite,200)
}




// total
let leftDown = 230
doc.setFontSize(10);
doc.setFont("helvetica","bold");
doc.line(128,225, 203,225)
doc.text('ATT BETALA', 160,leftDown)
doc.setFontSize(10);
total = Number(first.value) + Number(second.value) + Number(third.value) + Number(fourth.value) + Number(fifth.value) + Number(sixth.value) + Number(seventh.value) + Number(eightth.value) + Number(tenth.value) + Number(eleventh.value)

let momsResult = (25/100)*total
let totalMedMoms = total+momsResult

doc.text(`${Math.round(totalMedMoms)} kr`, 185,leftDown)



doc.setFont("helvetica", "normal");
// netto
doc.text('Netto', 167,210)
doc.text(`${total}`, 190,210)
// moms beräkningen
doc.line(128,212,203,212)
doc.text('Moms', 191,215)
doc.text(`${momsResult}`, 192,222);

// moms underlag
doc.text('Momsunderlag', 160,215);
doc.text(`${total}.00`,165,222);

// moms %
doc.text('Moms %', 135,215);
doc.text('25%', 138,222)


doc.setFont("helvetica","bold");
         
// payment method
doc.text('kort', 170,239);
doc.rect(179,236, 5,5);
doc.text('Swish', 185,239)
doc.rect(198,236,5,5)
if(kortchecked === true){
    doc.setLineWidth(0.5);
    doc.line(180,238, 181,240)
    doc.line(181,240,183,236)
}
// doc.setLineWidth(0.2);
if(swishChecked === true){
    doc.setLineWidth(0.5);
    doc.line(199,238,200,240);
    doc.line(200,240,202,236)
}



// footer
doc.text('Adress:', 10,260)
doc.text("E-post/webbplats", middle,260)
doc.text("Organisationsnr", 165,260)


let img = new Image()
img.src = "location.jpg"
doc.setFont("helvetica", "normal");
doc.textWithLink('Mätarvägen 12 A', 10,265, {url: "https://www.google.se/maps?hl=sv&gl=se&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x465fa5006505495d:0xb65b57ae3271489a"})
doc.textWithLink('196 37 Kungsängen', 10,270, {url: "https://www.google.se/maps?hl=sv&gl=se&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x465fa5006505495d:0xb65b57ae3271489a"})
doc.addImage(img, 10, 273, 20,20)


doc.textWithLink('info@nacka24bilservice.se', middle, 265, {url:"mailto:info@nacka24bilservice.se" })


doc.setFont("helvetica","bold");
doc.text('Bankgiro', 165,250);
doc.setFont("helvetica", "normal");

doc.text('5980-1555', 185,250)
doc.text('559428-8036', 165,265)




const pdfUrl = doc.output("bloburl");

 window.open(pdfUrl)
 doc.save(`${Regnummer.value.toUpperCase()} service.pdf`)

 window.location.reload()
}
})

const totalHtml = document.querySelector('.total');
setInterval(() => {
    total = Number(first.value) + Number(second.value) + Number(third.value) + Number(fourth.value) + Number(fifth.value) + Number(sixth.value) + Number(seventh.value) + Number(eightth.value) + Number(tenth.value) + Number(eleventh.value);
    let momsResult = (25/100)*total
    let totalMedMoms = total+momsResult
    totalHtml.textContent = `Total: ${Math.round(totalMedMoms)} kr`
}, 9000);




