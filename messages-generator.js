const quoteList = ['All our dreams can come true, if we have the courage to pursue them', 'The secret of getting ahead is getting started.','The best time to plant a tree was 20 years ago. The second best time is now.','Only the paranoid survive.','It’s hard to beat a person who never gives up.','Everything you can imagine is real.' ];
const days = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
const priorityList = ['JavaScript', 'HTML', 'CSS', 'GIT','GITHUB','FunnelCare','Clickfunnels','Upwork'];

const randomMessage = (quotes, day, task) =>{
	let randomQuotes = Math.floor(Math.random() * quotes.length);
	let randomDay = Math.floor(Math.random() * day.length);
	let randomTask = Math.floor(Math.random() * task.length);

	console.log(`Here is your weekly schedule: Please focus on ${task[randomTask]} at ${day[randomDay]}. !!!!! ${quotes[randomQuotes]} !!!!!`);
}

randomMessage(quoteList, days, priorityList);
