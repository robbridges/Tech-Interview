// this was a question I got asked by ebay a few months ago and was completely dumbfounded how to answer it.
// Yeah I can do it now, feels great, even if it doesn't do me much good. 

const meetingTimes = {

}

const addMeetingTimes = (start, end) => {
  const meetingStart = start;
  const meetingEnd = end; 
  try {
    checkMeetingTimes(start,end);
    for (let i = meetingStart; i <= meetingEnd; i++) {
      meetingTimes[i] = "taken";
    }
    console.log(`Meeting from ${start} to ${end} successfully added`);
  } catch (e) {
    console.log(`Meeting from ${start} to ${end} not added, you  are already scheduled`);
  }
}
const checkMeetingTimes = (start, end) => {
  let meetingTimesArray = [];
  for (let i = start; i <= end; i++) {
    meetingTimesArray.push(i.toString());
  }
  for (let number of meetingTimesArray) {
    if (meetingTimes[number]) {
      throw new Error('No, you are already booked');
    }
    

  }
}

addMeetingTimes(1,6);
addMeetingTimes(7,8);
addMeetingTimes(8,10);
