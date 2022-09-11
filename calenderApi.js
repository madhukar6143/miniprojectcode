const exp=require("express")
const CalenderApi=exp.Router();
const asyncHandler=require("express-async-handler")
const {google} = require('googleapis');
const axios = require('axios');
const schedule = require('node-schedule');
const moment=require("moment")

// Provide the required configuration
 const CREDENTIALS = JSON.parse({"type": "service_account","project_id": "codingcalender",
"private_key_id": "bdc89a56dbb7c1f924f2c08c548d86e8977c5442",
"private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCj1uOI1w1mvAl2\nz+7gALckreOwUb1P+v/ZlcJc+MTLztykje7G9d5lJsuGj3+MIlCop0G8U5Zi0+r9\nROY2jOqy33j2snSnImmsBi1kvxgG7YuWYYakObTLH8MqOIVBU30hN4NyLgf8LKWo\nAuRC4V1laWK75ck3nXEpoaofafxRXXU5DdIG8ZzCf6dDuMtRhzM7bM2hERMGl630\nEnj7mrLBllTrhDqQMLJmirnK6u6Pr3Z5NYEz5hPruNDEb1jTf16zTPBcKDe6o0h0\nC+jAxKPBTek18RjZdn6O5witCLIdUfm41e6WEebRcGl6mwNzVY9337mWGoMY7Nu5\nktYFmH8lAgMBAAECggEAA/bJQ81W34AE2FV/PtUzdwh9FWvqutQGu2kyWLLoz8Fq\n9J4CGNlfkNDBPjEb4rzavTQDTHIj0W7o0+LkGdI+qsjIpPNeLrMHN0qUtB1XXVAU\nWPEPlsrexC0X2ysWckdovZiiR+TEwFtJYdXTirrXFhPg9/e2mW+BtU8edIAvqVcQ\nr0HJWyHOYsrqMd99M4JuSaXOmK47qGw/rIyZfeZDM6II5jL8hZVrA7PMhwoZPySU\nRITTYhEcnCDYv+NAWzW9nWNaYk0nzc0EuYAL7JRdAyS23C4TxoJRhnOCphu6Euv2\neceSNGB3HNdeLlffuciqfdcqmVSoQv0oPcJiQnUCawKBgQDd+jGJzQFHJwg+WkV3\nRyTiSlUQ++l7U4yT3xs9zZvFFeKPnIKabOptJSwtLTxENYvFYrwK5y6O+FVkbWzo\nMZA2bHS+ffbxDpCfl8E/IE5AUCm/W/EkLcFi7UcPsRdOXMkHF2lYwYyPZXCLiyVi\nJ7X0N7fOG/CUf5msjfAJgM0i8wKBgQC884Q91NLXDAzyUB0TRGYE6yhZLC+5MlGG\n2HKp4Wf05MTQi6CtT8C5m913JzCtf8InJT+InVnfG8jjG4PiGwsh8BjvbC+9zruG\nx+Za+Z3zSCJWqmB9AwabisTFuIqmvZBQ0D9uK534OuZ/5P/bhr9nveIzEeE3YNzp\ngJNxJdLrhwKBgQCgkDI3GCfdfNlUqN1oivieCuB/WYiooWWlLJO637fWFp97+9zo\nsPHdIy9SOk9Gk2jXzTRxuomN9wlljFVjmz5Sb57+j4UJFtz747xv2gFgOdwIxAuo\nfMROt41YR2OxViI/U+rqvY3bx6dh+LOAzXKrBYaZutIJyEazbzP628UGiwKBgDXO\nxx7wh2Y0CU/L3qvI86B88w2J1sFPggX7h5O3G+qSZzXYPVZ9eq2gpE21PFh8JGcP\nZWtbG+e8OtXp1QHDn8T3YbJ0xZew0phMPt4zbXaFWToC5N1UykHrH6QKrHlVTE6n\nLxkJlL/GzjMnnHEAi2tYmJzgf5lMnTxloBc9pTXrAoGBAKsjB0CYl3ZxgfiWCNJi\ni0pfZpVd2l6sSFas00OP1ocFbQcPSRSbP5ihSWREBVC73zcYyyI1aKBKvvaeFfIN\nF/X7xGwY8tWM37bYweGDejdS5u9C3TINQPNviPdHYcWhxjhYsB3wxqCpqZyrZM4U\nJC96prtovH+GczLF9Y1jSNib\n-----END PRIVATE KEY-----\n",
"client_email": "codingcalender@codingcalender.iam.gserviceaccount.com",
"client_id": "112477616917661524126",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/codingcalender%40codingcalender.iam.gserviceaccount.com"}
);
 const calendarId = "d7tms3adh537gocsa7a2ide9bo@group.calendar.google.com";

// Google calendar API settings
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar("v3");

const auth = new google.auth.JWT(
    "codingcalender@codingcalender.iam.gserviceaccount.com",
    null,
"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCj1uOI1w1mvAl2\nz+7gALckreOwUb1P+v/ZlcJc+MTLztykje7G9d5lJsuGj3+MIlCop0G8U5Zi0+r9\nROY2jOqy33j2snSnImmsBi1kvxgG7YuWYYakObTLH8MqOIVBU30hN4NyLgf8LKWo\nAuRC4V1laWK75ck3nXEpoaofafxRXXU5DdIG8ZzCf6dDuMtRhzM7bM2hERMGl630\nEnj7mrLBllTrhDqQMLJmirnK6u6Pr3Z5NYEz5hPruNDEb1jTf16zTPBcKDe6o0h0\nC+jAxKPBTek18RjZdn6O5witCLIdUfm41e6WEebRcGl6mwNzVY9337mWGoMY7Nu5\nktYFmH8lAgMBAAECggEAA/bJQ81W34AE2FV/PtUzdwh9FWvqutQGu2kyWLLoz8Fq\n9J4CGNlfkNDBPjEb4rzavTQDTHIj0W7o0+LkGdI+qsjIpPNeLrMHN0qUtB1XXVAU\nWPEPlsrexC0X2ysWckdovZiiR+TEwFtJYdXTirrXFhPg9/e2mW+BtU8edIAvqVcQ\nr0HJWyHOYsrqMd99M4JuSaXOmK47qGw/rIyZfeZDM6II5jL8hZVrA7PMhwoZPySU\nRITTYhEcnCDYv+NAWzW9nWNaYk0nzc0EuYAL7JRdAyS23C4TxoJRhnOCphu6Euv2\neceSNGB3HNdeLlffuciqfdcqmVSoQv0oPcJiQnUCawKBgQDd+jGJzQFHJwg+WkV3\nRyTiSlUQ++l7U4yT3xs9zZvFFeKPnIKabOptJSwtLTxENYvFYrwK5y6O+FVkbWzo\nMZA2bHS+ffbxDpCfl8E/IE5AUCm/W/EkLcFi7UcPsRdOXMkHF2lYwYyPZXCLiyVi\nJ7X0N7fOG/CUf5msjfAJgM0i8wKBgQC884Q91NLXDAzyUB0TRGYE6yhZLC+5MlGG\n2HKp4Wf05MTQi6CtT8C5m913JzCtf8InJT+InVnfG8jjG4PiGwsh8BjvbC+9zruG\nx+Za+Z3zSCJWqmB9AwabisTFuIqmvZBQ0D9uK534OuZ/5P/bhr9nveIzEeE3YNzp\ngJNxJdLrhwKBgQCgkDI3GCfdfNlUqN1oivieCuB/WYiooWWlLJO637fWFp97+9zo\nsPHdIy9SOk9Gk2jXzTRxuomN9wlljFVjmz5Sb57+j4UJFtz747xv2gFgOdwIxAuo\nfMROt41YR2OxViI/U+rqvY3bx6dh+LOAzXKrBYaZutIJyEazbzP628UGiwKBgDXO\nxx7wh2Y0CU/L3qvI86B88w2J1sFPggX7h5O3G+qSZzXYPVZ9eq2gpE21PFh8JGcP\nZWtbG+e8OtXp1QHDn8T3YbJ0xZew0phMPt4zbXaFWToC5N1UykHrH6QKrHlVTE6n\nLxkJlL/GzjMnnHEAi2tYmJzgf5lMnTxloBc9pTXrAoGBAKsjB0CYl3ZxgfiWCNJi\ni0pfZpVd2l6sSFas00OP1ocFbQcPSRSbP5ihSWREBVC73zcYyyI1aKBKvvaeFfIN\nF/X7xGwY8tWM37bYweGDejdS5u9C3TINQPNviPdHYcWhxjhYsB3wxqCpqZyrZM4U\nJC96prtovH+GczLF9Y1jSNib\n-----END PRIVATE KEY-----\n"

    SCOPES
);


 //global variables
 let existList
 let userlist


const start = async () => 
{
try
{
    //
for (let  element of   ["codechef.com","codeforces.com","facebook.com/hackercup","codingcompetitions.withgoogle.com","hackerearth.com","icpc.global"]) 
{   


       start2(element)
       await timeout(10000);

}
}
catch(error)
{
console.log(`Error at Contacting After Start Function --> ${error}`)
}
}//async function close

const timeout = ms => new Promise(res => setTimeout(res, ms));

const start2 = async (element) =>
{
try
{
   
    var twoMonthAfter= moment().add(3, 'months')
    var todayDate= moment()
   
    twoMonthAfter=twoMonthAfter.format().slice(0,19);
    todayDate=todayDate.format().slice(0,19)
   
    userlist = await axios.get("https://clist.by/api/v2/contest/?resource="+element+"&order_by=start&username=madhukar6143&api_key=3d55d6d5e3cc483c544e8f3a57f8f14c5479d34e"&start__gte="+todayDate+"&end__lte="+twoMonthAfter+"")
    var start = new Date()
    var end = new Date();

    end.setDate(end.getDate() + 365);

        getEvents(start, end)
        .then(existList => 
        {
               Myfilter(userlist.data.objects,existList)
               .then(array3=>
                {   
                if(array3.length!=0){
                     for (let events of array3) 
                    {

                        var startTime= moment( events.start).add(330, 'minutes');
                        var endTime= moment( events.end).add(330, 'minutes');

                        startTime=startTime.format().slice(0,19)
                        endTime=endTime.format().slice(0,19)

                           //  Event for Google Calendar
                           let event =
                          {
                            'summary':events.event,
                            'description': events.href,
                            'start':
                           {
                                    'dateTime':  startTime,
                                    'timeZone': 'Asia/Kolkata'
                           },
                           'end':
                                {
                                    'dateTime':  endTime,
                                    'timeZone': 'Asia/Kolkata'
                                } 
                           }//end of event function
                           


                             // insertevent  to Calender
                        insertEvent(event)
                             .then((res) => {   if(res==1)  {console.log("successfully inserted in calender")} else{console.log("error occured while inserting")}})
                            .catch((err) => {console.log(err)})
                        }
                    }
                }
                )//close of myfilter then 
                .catch((err) =>{console.log("error while filtering",err.message)})
            

        }     
        )//close of get events then 
        .catch((err) =>{console.log(err)})//get events promise catch block

    
    }
catch(error)
{
console.log(`Error at Contacting --> ${error}`)
}
}//async function close



// Insert new event to Google Calendar
const insertEvent = async (event) => {

    try {
        let response = await calendar.events.insert({
            auth: auth,
            calendarId: calendarId,
            resource: event
        });
    
        if (response['status'] == 200 && response['statusText'] === 'OK') {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at insertEvent --> ${error}`);
        return 0;
    }
};



//filter array based on past events
const Myfilter = async (array1,array2) => {
    try{
            let array3 = await array1.filter(entry1 => !array2.some(entry2 => entry1.event === entry2.summary));
             return array3
       }
      catch(error){
            console.log(`Error at Array filtering --> ${error}`)  
             return 0;
    }
};



// Get all the events between two dates
const getEvents = async (dateTimeStart, dateTimeEnd) => {
    try {
        let response = await calendar.events.list({
            auth: auth,
            calendarId: calendarId,
            timeMin: dateTimeStart,
            timeMax: dateTimeEnd,
            timeZone: 'Asia/Kolkata'
           
        });
        let items =  response['data']['items'];
        return items;
    } catch (error) {
        console.log(`Error at getEvents  --> ${error}`);
        return 0;
    }
};







   // start(); 
   







module.exports=CalenderApi;

