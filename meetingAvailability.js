// this was a question I got asked by ebay a few months ago and was completely dumbfounded how to answer it.
// Yeah I can do it now, feels great, even if it doesn't do me much good. 

const meetingTimes = {

}



let problem = false;

const addMeetingTimes = (start, end) => {
  const meetingStart = start;
  const meetingEnd = end;
  checkMeetingTimes(start,end);
  for (let i = meetingStart; i <= meetingEnd; i++) {
    meetingTimes[i] = "taken";
  }
}
const checkMeetingTimes = (start, end) => {
  let meetingTimesArray = [];
  for (let i = start; i <= end; i++) {
    meetingTimesArray.push(i.toString());
  }
  for (let number of meetingTimesArray) {
    if (meetingTimes[number]) {
      problem = true;
      return;
    }
    meetingTimesArray = [];

  }
}

addMeetingTimes(1,6);
addMeetingTimes(7,8);
addMeetingTimes(8,10);
problem ? console.log('this would not work') : console.log('this would work');




