var dateDiffInDays = function (date1, date2) {
  //   write your code here
	date1=Date.UTC(date1);
	date2=Date.UTC(date2);
	let diff=date1-date2;
	diff=parseInt(diff/86400000);
	return diff;
};

// Do not change the code below.
// const dateOne = prompt("Enter Start Date.");
// const dateTwo = prompt("Enter End Date.");
// alert(dateDiffInDays(dateOne, dateTwo));
