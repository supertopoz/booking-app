

//moment = Moment.load()

function upDateData(dataArr, studentId){     
     var spreadsheetId = BOOKSHEET_ID;
     var sheet = SpreadsheetApp.openById(spreadsheetId);  
     var id = parseInt(getLastId(sheet)) + 1;
     var studentIdList = getStudentData(sheet);
     var row = studentIdList[studentId]
     var range = "B"+row+":G"+row;
     try {
        sheet.getRange(range).setValues([dataArr])
     } 
     catch(e){
        dataArr.unshift(id)
        sheet.appendRow(dataArr)
     }
     
}

function deleted(studentId){
     var spreadsheetId = BOOKSHEET_ID;
     var sheet = SpreadsheetApp.openById(spreadsheetId);  
     var id = parseInt(getLastId(sheet)) + 1;
     var studentIdList = getStudentData(sheet);
     var row = studentIdList[studentId]
     var range = "B"+row+":G"+row;
     var dataArr = ['DELETED',studentId,'DELETED','DELETED','DELETED',0]
     try {
        sheet.getRange(range).setValues([dataArr])
     } 
     catch(e){
        dataArr.unshift(id)
        sheet.appendRow(dataArr)
     }  
}

function sendDataToSheet(data) {
     var spreadsheetId = BOOKSHEET_ID;
     var message = '';
     var sheet = SpreadsheetApp.openById(spreadsheetId);          
       var today = data.date.replace('date','');
       var time = moment().format('hh:mm:ss')
       var tester = ''
       data.goTest.forEach(function(item){  
          try {
            var position = item.tester.indexOf(':');
            if(position >= 0){
              var tester = item.tester.slice(position + 2);
            } else {
              tester = item.tester
            }
          }
          catch(e){
            message = 'One of the students doesn\'t have a tester yet'
          }
          upDateData([data.center, item.code, tester, today,'10:00',1 ], item.code)
       })
       data.dontGoTest.forEach(function(item){
          try {
          var position = item.tester.indexOf(':');
            if(position >= 0){
              var tester = item.tester.slice(position + 2);
            } else {
              tester = item.tester
            }
          }
          catch(e){
            message = 'One of the students doesn\'t have a tester yet'
          }
          upDateData([data.center, item.code, tester, today,'10:00',0 ], item.code)
       })
  return 'Send data to sheet is connected: '+ message   
 }
 
 
 function getStudentData(sheet){
 
   var STUDENT_CODES = {}
   var studentCodes = sheet.getRange('C2:C').getValues();
   studentCodes.forEach(function(item,index){
     if(item[0] !== '') STUDENT_CODES[item] = index+2
   })
   return STUDENT_CODES
 }

 function getLastId(sheet) {
     var column = 'A';
     var lastRow = sheet.getActiveSheet().getMaxRows();
     var values = sheet.getActiveSheet().getRange(column + "1:" + column + lastRow).getValues();
     for (; values[lastRow - 1] == "" && lastRow > 0; lastRow--) {}
     var lastvalue = isNaN(values[lastRow - 1]) ? 0 : values[lastRow - 1]
     return lastvalue;
 }

// function getRowPositionById(Id) {
//     var column = 'A';
//     var lastRow = sheet.getLastRow();
//     var data = sheet.getRange(column + "1:" + column + lastRow).getValues();
//
//     for (var i = 0; i < data.length; i++) {
//         var rowIdValue = parseInt(data[i]);  
//         if (rowIdValue == Id) {
//             return i + 1;
//         }
//     }
// }
 

function deleteRow(Id) {  
   var rowIndex =  getRowPositionById(Id);  
   sheet.deleteRow(rowIndex);
}



