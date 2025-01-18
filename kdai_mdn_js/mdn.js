const date = new Date(2024, 9, 12); 
const option = {year:'numeric', month:'long', day:'numeric'};
console.log(new Intl.DateTimeFormat('ja-JP',option).format(date));
