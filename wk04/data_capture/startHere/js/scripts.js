

//OPTION 1 FOR INF0
// const getString = window.location.search;
// console.log(getString);

// const myInfo = new URLSearchParams(getString);
// console.log(myInfo);



//OPTION 2 FOR INFO
const myInfo = new URLSearchParams(window.location.search);





document.querySelector('#results').innerHTML = `
<p> appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p> proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
<p> your phone: ${myInfo.get('phone')}</p>
<p>your email is ${myInfo.get('email')}</p>
`