  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDV8mW8bweN6YOg0OKgRZ9umOVs_UUN-pA",
    authDomain: "primecs-1cbfc.firebaseapp.com",
    projectId: "primecs-1cbfc",
    storageBucket: "primecs-1cbfc.appspot.com",
    messagingSenderId: "33832366036",
    appId: "1:33832366036:web:cc0d5c26b3c1b4690ff041",
    measurementId: "G-ETGHB4KYQF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  let User;

// const timeline = new TimelineMax();
FlipTab(0);
function FlipTab(n){
    var tabs = document.getElementsByClassName('tab');
    for(let tab of tabs){
        console.log(tab);
        tab.style.display = "none";
      
    }
//    if(n ==1){
//         document.getElementById('signin').style.display = "block";
//    }else if(n==2){
//     document.getElementById('ceateacc2').style.display = "block";
//    }else{
//     document.getElementById('ceateacc3').style.display = "block";
//    }

    tabs[n].style.display = "block";
    
}
function i(v){
    return document.getElementById(v).value;
}
function sendApplication(){
 User = {
admitted: false,
applicationLetter: "i('apleterlabel')",
// Architecture : document.getElementById('architechture').checked,
areasExcel1: i('areasExcel1'),
areasExcel2: i('areasExcel2') ,
areasExcel3: i('areasExcel3'),
areasImprove1 :i('areasImprove1'),
areasImprove2:i('areasImprove2'),
areasImprove3: i('areasImprove3'),
avTimeFrom: i('avTimeFrom'),
avTimeTo: i('avTimeTo'),
cell: i('cell'),
citizenship: i('citizenship'),
city: i('city'),
companyName: i('companyName'),
construction: i('construction'),
cv:"someCv",//file
dateOfBirth: i('dateOfBirth'),
emailAddress: i('emailAddress'),
engineering: i('engineering'),
firstName: i('firstName'),
highSchool: i('highSchool'),
highSchoolAddress: i('highSchoolAddress'),
highSchoolDiploma: i('highSchoolDiploma'),
highSchoolFrom: i('highSchoolFrom'),
highSchoolGraduate: i('highSchoolGraduate'),
highSchoolTo: i('highSchoolTo'),
idNumber: i('idNumber'),
other: i('other'),
paymentReceipt: i('paymentReceipt'),//file
phoneNumber: i('phoneNumber'),
province: i('province'),
ref1Company: i('ref1Company'),
ref1Email: i('ref1Email'),
ref1Phone: i('ref1Phone'),
ref1Relationship: i('ref1Relationship'),
ref2Company: i('ref2Company'),
ref2Email: i('ref2Email'),
ref2Phone: i('ref2Phone'),
ref2Relationship: i('ref2Relationship'),
secondName: i('secondName'),
sector: i('sector'),
supervisorAddess: i('supervisorAddess'),
supervisorEmail: i('supervisorEmail'),
university: i('university'),
universityAddress: i('universityAddress'),
universityDiploma: i('universityDiploma'),
universityFrom: i('universityFrom'),
universityGraduate: i('universityGraduate'),
universityTo: i('universityTo'),
};

console.log(User);
displayInfoForChecking(Object.entries(User));

}
function displayInfoForChecking(array){
    document.getElementById('loader').style.display = 'block';
    document.getElementsByClassName('verifyYourInfo')[0].style.display = 'block';
    const checkItems = document.getElementById('checkItems');
    checkItems.innerHTML = ``;
    for(let i = 0 ; i<array.length; i++){
        
        let rowRecord = array[i];
        if(rowRecord[1] !== false){
            checkItems.innerHTML += `
            <div class="itemForVerification">
            <p class="identifier">${rowRecord[0]}</p>
            <p class="value">${rowRecord[1]}</p>
        </div>
            `;
        }
       
    }

}
function allowCheck(){
    document.getElementById('loader').style.display = 'none';
    document.getElementsByClassName('verifyYourInfo')[0].style.display = 'none';
}

function transferApplication(userObject){
    let db = firebase.firestore();
    let documentName = `${userObject.firstName}` + `${userObject.secondName}` + `${String(new Date).replace(' ', '')}`;
    db.collection('users').doc(documentName).set(userObject).then(()=>{
        alert(`Application received`);
    });
}

function trigger(trig){
    switch(trig){
        case `transfer`:
            transferApplication(User);
    }
}
