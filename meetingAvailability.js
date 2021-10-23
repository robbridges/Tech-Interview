// this was a question I got asked by ebay a few months ago and was completely dumbfounded how to answer it.
// Yeah I can do it now, feels great, even if it doesn't do me much good. 

const meetingTimes = {

}

let meetingTimesArray = [];

let problem = false;

const addMeetingTimes = (start, end) => {
  const meetingStart = start;
  const meetingEnd = end;
  for (let i = meetingStart; i <= meetingEnd; i++) {
    meetingTimes[i] = "taken";
  }
}
const checkMeetingTimes = (start, end) => {
  for (let i = start; i <= end; i++) {
    meetingTimesArray.push(i.toString());
  }
  for (let number of meetingTimesArray) {
    if (meetingTimes[number]) {
      problem = true;
      return;
    }
    

  }
}

addMeetingTimes(8,12);
addMeetingTimes(5, 7);
checkMeetingTimes(1,4);
problem ? console.log('Nope, doesnt work out') : console.log('This would work');



