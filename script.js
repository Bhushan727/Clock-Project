console.log("Working");

var firstElem = document.getElementById('wakeup');
var secondElem = document.getElementById('lunch');
var thirdElem = document.getElementById('nap');
var fourthElem = document.getElementById('sleep');






function changeBtn()
{
    document.getElementsByClassName('alarmBtn')[0].innerText = "Party Time";
}

function changeBtn2()
{
    document.getElementsByClassName('alarmBtn')[0].innerText = "Set Alarm";
}


var firstOpt = firstElem.options[firstElem.selectedIndex].value;
  
var secondOpt = secondElem.options[secondElem.selectedIndex].value;
    
var thirdOpt = thirdElem.options[thirdElem.selectedIndex].value;
   
var fourthOpt = fourthElem.options[fourthElem.selectedIndex].value;
   
// onclick function of set Alarm button
function setAlarm()
{
    // displaying the selected times into display div

    document.getElementById('wakeT').innerText = firstElem.options[firstElem.selectedIndex].text;

    document.getElementById('lunchT').innerText = secondElem.options[secondElem.selectedIndex].text;

    document.getElementById('napT').innerText = thirdElem.options[thirdElem.selectedIndex].text;

    document.getElementById('nightT').innerText = fourthElem.options[fourthElem.selectedIndex].text;

    // Assigning the value of selected time interval of dropDown into varibales

    firstOpt = firstElem.options[firstElem.selectedIndex].value;
    secondOpt = secondElem.options[secondElem.selectedIndex].value;
    thirdOpt = thirdElem.options[thirdElem.selectedIndex].value;
    fourthOpt = fourthElem.options[fourthElem.selectedIndex].value;

}


const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('second');


const clock = setInterval(function time() {
    
    let dateToday = new Date();
    
    // console.log(dateToday);
    var hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    // setting the current hour , minute and seconds into digital cloack divs

    if(min < 10){
        min = '0' + min;
    }

    if(sec < 10){
        sec = '0' + sec;
    }
    if(hr > 12)
    {
        if((hr-12)<10)
        {
            hour.textContent = `0${hr-12}`;
        }else{

            hour.textContent = hr - 12;
        }
        document.getElementById('amPm').textContent = 'PM';

    }else if(hr == 12)
    {
        hour.textContent = hr;
    }
    else if(hr>=10)
    {
        hour.textContent = hr;
    }
    else
    {
        hour.textContent = '0'+hr ;
    }
    minute.textContent = min;
    seconds.textContent = sec;

    
    console.log(hr);
    
    console.log(firstOpt);
    console.log(secondOpt);
    console.log(thirdOpt);
    console.log(fourthOpt);
    
    const msg = document.getElementById('timeMsg');
    
    // Matching the selected hour in dropdown interval to current hr 
    
    if(hr == firstOpt)
    {
        msg.innerHTML = "GRAB SOME HEALTHY BREAKFAST !";
        document.getElementById("imageC").src="Group 5183.png";

    }
    else if(hr == secondOpt)
    {
        msg.innerHTML = "LET'S HAVE SOME LUNCH";
        document.getElementById("imageC").src="lunch.png";
        document.getElementById('gMsg').innerText = "GOOD AFTERNOON ! TAKE SOME SLEEP";
        
    }
     if(hr == thirdOpt)//thirdOpt && hr < (thirdOpt+1))
    {
        msg.innerHTML = "STOP YAWNING, GET SOME TEA... "
        document.getElementById("imageC").src="lunch_image.png";
        document.getElementById('gMsg').innerText = "GOOD EVENING !!";

    }
    //  console.log(fourthOpt);
    else if(hr==fourthOpt)
    {
        msg.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP !"
        document.getElementById("imageC").src="Group 5194.png";
        document.getElementById('gMsg').innerText = "GOOD NIGHT !";
    }
    else
    {
        msg.innerText = "RUNNING OUT OF TIME.. !!"
        document.getElementById("imageC").src = "lunch.png";
        document.getElementById('gMsg').innerText = "You're Lucky ..!!"
    }



},1000);


