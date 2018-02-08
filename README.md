# Reminder-Booking-Form
This form is used to control who goes for a level test. 

![image](https://user-images.githubusercontent.com/13721960/35966270-ad5ad594-0d00-11e8-9335-57df294295ff.png)


# The data passes to the this google sheet 
https://docs.google.com/spreadsheets/d/178Aa1kvDutCdmso-ozQe3jXRBQW0WFeib7E56OJ-En8/edit

# Center data persistance
The data is linked to a firebase store in the account of jason@ilavietnam.edu.vn


# Purpose
To provide an add-on for ELT to book students into a placement test on the day of their test. 

# Life cycle

- Student arrives as center
- ELT open app and wait for their contact list to load
- ELT add in student's id and name into app 
- ELT select a level tester 
- Student's name is added to this [Google sheet](https://docs.google.com/spreadsheets/d/178Aa1kvDutCdmso-ozQe3jXRBQW0WFeib7E56OJ-En8/edit). 
- Data only persists in the sheet until midnight
- The positioning and of students and for which center is persisted in Firebase
- ELT can move students in and out of the level test 
- When students are in the test the level testing app will pick them up and display to correct tester. 

![image](https://user-images.githubusercontent.com/13721960/35966180-6cc56b98-0d00-11e8-8f14-a731ff875204.png)

## Getting Started

- Owner: jason@ilavietnam.edu.vn
- [Master code](https://script.google.com/a/ilavietnam.edu.vn/d/1rdrRinLzkffOWRVnd3fAjIU878l8oUlHeKCZ5u3Ae3E_2U16-ix4Oe_U/edit?usp=drive_web);
- [UI](https://script.google.com/a/ilavietnam.edu.vn/macros/s/AKfycbxAgtxDCUEGjLe3uM-bl9953MtVGciIJVUcqUQtHw6PVcHRGUYY/exec)

### Prerequisites

[Add Google appscript Github assistant tool to chrome.](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en)


### Installing

1) Fork code. 
2) Install chrome addon. 
3) Sign in using Github account
4) Pull down fork. 
5) Do some work.
6) Push new work back to fork. 
7) Make a pull request when wanting to add to mast branch. 

## Running the tests

Comming soon.

## Deployment

Only mast branch code should be deployed to ILA's internal app store. 
Deployment requires an admin account and to be carried out from root deployment document or appscript. 


## Built With

Javascript 
JQuery
Redux

## To Do

Upgrade interface
Move whole application to admin@ilamail.edu.vn


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jason Allshorn** - *Initial work* - [Supertopoz](https://github.com/Supertopoz)

## License

This app strictly belongs to ILA Vietnam. There is not lience for reuse




