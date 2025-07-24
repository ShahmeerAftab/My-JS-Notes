
// **********************************************************  DATE & TIME  *****************************************************************

// Object = group of data
// date current Date ka object lakr hmen deta he jb bhi hm call krwate hen
// isko pta kese chle ga ? isko pta chlega hmare system se js computer p hm javascript ko run kr rhe hen  whan p date ka object call kr rhe hen
// to ye us system se current date or time nikalega or hmen 1 object k type me current date or time la kr de dega
// jb bhi date ka method call krenge us se phle new ka keyword lgyenge
// for example:

// var date=new Date();
// console.log(date);


// ************************************************** .toString()  ************************************************************************

// is me string ka koi bhi method work ni krega jese CharAt or slice waghaira agr hm use krna chahen to hmen toString ka method use krna hoga
// for example:

// var date=new Date();
// console.log(date.toString());


// ************************************************** .getDay()  ************************************************************************


// .getDay ye date ka 1 method he js k through hm day get krte hen

// var date=new Date();
// console.log(date.getDay());

// Day 0 ondex se start hoga 6 pr end hoga or 0 index pr Sunday hoga
// jb bhi hm .getDay ko call krwayenge to wo hmen day ka index no btyga 
// agr hm day ko index k bjy name se get krna chahen to use array me convert kr denge

// var date=new Date();
// var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(day[date.getDay()]);


// ************************************************** .getMonth  ************************************************************************

// .get.month ye bhi date ka 1 method he js k through hm month ko get kr skte hen
// ye bhi hmen index me value btata he or is ka index bhi .day k method ki trh 0 se start hota he or 11 pr close hota he
// for example:

// var date=new Date();
// console.log(date.getMonth());

// agr hm month ko index k bjy name se get krna chahen to use array me convert kr denge

// var month=["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"];
// console.log(month[date.getMonth()]);


// ************************************************** .getDate()  ************************************************************************

// .getDate  ye bhi date ka 1 method he js k through hm date ko get kr skte hen
// ye bhi hmen index me value btata he or is ka index 1 se start hota he or 31 p close hota he
// for example:

// var date=new Date();
// console.log(date.getDate());


// ************************************************** .getFullYear()  ************************************************************************

// .getFullYear  ye bhi date ka 1 method he js k through hm year ko get kr skte hen
// for example:

// var date=new Date();
// console.log(date.getFullYear());


// ************************************************** .getHours()  ************************************************************************

// .getHours  ye bhi date ka 1 method he js k through hm Hours ko get kr skte hen
// for example:

// var date=new Date();
// console.log(date.getHours());


// ************************************************** .getMinutes()  ************************************************************************

// .getMinutes  ye bhi date ka 1 method he js k through hm Minutes ko get kr skte hen
// for example:

// var date=new Date();
// console.log(date.getMinutes());


// ************************************************** .getseconds()  ************************************************************************

// .getSeconds  ye bhi date ka 1 method he js k through hm Seconds ko get kr skte hen
// for example:

// var date=new Date();
// console.log(date.getSeconds());


// ************************************************** .getMilliseconds()  ************************************************************************

// .getMilliseconds  ye bhi date ka 1 method he js k through hm Milliseconds ko get kr skte hen
// for example:

// var date=new Date();
// console.log(date.getMilliseconds());


// ************************************************** .getTime()  ************************************************************************

// .getTime  ye bhi date ka 1 method he .. I
// It tells Total millisoconds since midnight , jan 1 , 1970
// for example:

// var date=new Date();
// console.log(date.getTime());


// ************************************************** SPECIFYING DATE AND TIME  ***************************************************************

// agr hm ksi khaas date ko specify krna chahen to usko bracket me mention kr denge
// for example:

// var date=new Date("january 1 2003");
// console.log(date);

//               OR

// var date=new Date("12-02-2003");
// console.log(date);

// ********************************************************  HOW TO SPECIFY YEAR  ****************************************************************

// var date=new Date();
// date.setFullYear(2003);
// console.log(date);

// ****************************************************** ANOTHER METHOD TO SPECIFY  ************************************************************

// var date = new Date("2003");
// console.log(date);