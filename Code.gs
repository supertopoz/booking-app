var moment = Moment.moment
// comment
function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

//   var nameStr    = contacts[i].getFullName();
function getContacts(){
  emails = [];
  names = []
  var contacts = ContactsApp.getContacts();
  for (var i in contacts){
   var fullName = contacts[i].getFullName()
   var email = contacts[i].getPrimaryEmail()
   if(email !== null){
    if(fullName !== "" &&  email.indexOf('@ilavietnam.edu.vn') >=0  && email.indexOf("-") === -1 ){
      emails.push(email)
      names.push(fullName)
    }  
    }
  } 
  return [emails,names]
}
