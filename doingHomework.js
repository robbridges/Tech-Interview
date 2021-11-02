/*
You are given two arrays, start time and end time, each start time corresponds to a student, so starttime[0] and endtime[0] are one students start and end times
find out if this student was doing work in query time, the third argument... seemingly all that we need to do is check if query time is later than (bigger than) start time, but smaller than
end time
*/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
   let total = 0;
   for (let i =0; i < startTime.length; i++) {
     const start =startTime[i];
     const end = endTime[i];
     if (queryTime >= start && end >= queryTime) {
       total ++
     }
   } 
   return total;
};

console.log(busyStudent([4], [4], 4))