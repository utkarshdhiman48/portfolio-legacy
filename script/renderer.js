//datas
let timelineData = [
{
heading:"DevMela 2020",
name:"DevMela 2020",
date:"November 2020",
location:"Online",
details: "This event was organized by Google Developer Group Jalandhar in association with DSC communities from all over Punjab. There I participated in a quiz-competition and won.",
},
{
heading:"Hacktoberfest 2020",
name:"Hacktoberfest 2020",
date:"October 2020",
location:"Online",
details: "This is a world-wide open source event, Held every year in October for whole month -such an octotastic month.",
},
{
heading:"Devfest India 2020",
name:"Devfest India 2020",
date:"October 2020",
location:"Online",
details: "This festival is held every year by Google Developer Group communities all over India, however this year it was organized online due to pandemic. There were quizzes after live sessions, I eventually cleared one of the quizzes and got some SCHWAGS.",
},					
{
heading:"Hack The Mountain 2020",
name:"Hack The Mountain 2020",
date:"October 2020",
location:"Online",
details: "This was an online hackathon organized by Sudanstech in association with many sponsors. The saying \"With great sponsors comes great perks\" was justified here. Despite the perks my team consisting Ashwani kumar and Manpreet Singh Kullar made it to top 40s from over more than 250+ submissions.",
},
{
heading:"Hacktoberfest 2019",
name:"Hacktoberfest 2019",
date:"October 2019",
location:"Online",
details: "This is a world-wide open source event, Held every year in the month of October. It was the first time i tried such an event and was amazed to discover how even small contributions with beginner level coding skills earned me a t-shirt.",
},
{
heading:"ACUITY 3.0",
name:"ACUITY 3.0",
date:"September 2019",
location:"GNDU RC jal",
details: "This was a mock placement drive organized in our college to give an idea of how the interviews are held. I was one of the winners.",
},
{
heading:"TECHNOBUZZ 2K19",
name:"TECHNOBUZZ 2K19",
date:"September 2019",
location:"GNDU RC jal",
details: "This was a poster making competition themed technology and machine organized in our college. I was among top 3s.",
},
{
heading:"Prix Mosaic-2016",
name:"Prix Mosaic-2016(Media Fest)",
date:"October 2016",
location:"Hans Raj Mahila Maha Vidyalaya (college)",
details: "This was a poster making competition themed olympic games organized in our college. I was representing my school and ended up among top 3s. However my name was pronounced and spelled wrong, I know even spelling bee veterans find it hard to spell my name. XD",
},
{
heading:"NCC",
name:"NCC",
date:"August 2015",
location:"Dayanand Model Sr. Sec. School",
details: "NCC 'A' Certificate is given to the cadet when they complete the first level of training. A Cadet earns this certificate after 1-2 year training and attending minimum 1 camp. It was a challenging experience for me, i got ill by the end but I sticked to it.",
}
];

//classes
class TimelineCell{
  constructor(obj){
    let timelineProgressContent = document.createElement("div");
    timelineProgressContent.classList.add("timeline-progress-content", "hidden-view-details");

    let timelineDetailsCard = document.createElement("section");
    timelineDetailsCard.classList.add("hidden-view-details-card");

    let hoverCard = document.createElement("figure");
    hoverCard.classList.add("sub-card");

    let hoverCardCap = document.createElement("figcaption");
    hoverCardCap.classList.add("sub-card-content");

    let subCardHeadName = document.createElement("span");
    subCardHeadName.classList.add("sub-card-head-name");
    subCardHeadName.innerText = obj.heading;

    let subCardHeadExtras1 = document.createElement("span");
    subCardHeadExtras1.classList.add("sub-card-head-extras");
    subCardHeadExtras1.innerText = obj.date;

    let subCardHeadExtras2 = document.createElement("span");
    subCardHeadExtras2.classList.add("sub-card-head-extras");
    subCardHeadExtras2.innerText = obj.location;

    let subCardHeadDetails = document.createElement("span");
    subCardHeadDetails.classList.add("sub-card-head-details");
    subCardHeadDetails.innerText = obj.details;

    hoverCardCap.appendChild(subCardHeadName);
    hoverCardCap.appendChild(subCardHeadExtras1);
    hoverCardCap.appendChild(subCardHeadExtras2);
    hoverCardCap.appendChild(subCardHeadDetails);

    hoverCard.appendChild(hoverCardCap);

    timelineDetailsCard.appendChild(hoverCard);
    timelineProgressContent.innerText = obj.heading;
    timelineProgressContent.appendChild(timelineDetailsCard);
    timelineProgressContent.setAttribute("data-year", obj.year);
    timelineProgressContent.setAttribute("title", "Scroll right for more!");
    
    this.main = timelineProgressContent;
  }
  main;

  render(){
    return this.main;
  }
}

class TimelineProgressBar{
  constructor(date){
    let year;
    if(date)
      year = calcYear(date);
    
    this.main = document.createElement("div")
    this.main.classList.add("timeline-progress-bar")
    
    if(year)  
      this.main.setAttribute("data-year", year);
    else{
      this.main.style.minWidth = "1rem";
      this.main.style.width = "1.5rem";
      this.main.style.backgroundColor = "transparent";
    }
  }
  main;

  render(){  
    return this.main;
  }
}

class bgHex{
  constructor(rows=12, columns=20){
    //create super parent
    this.main = document.createElement("div");
    this.main.classList.add("hexSuperParent");
    //create rows
    for (let i = 0; i < rows; i++) {
      let row = document.createElement("div");
      row.classList.add("hexRow");
      //alternatively move row
      if(i%2===0){
        let half = document.createElement("div");
        half.classList.add("halfHex");
        row.classList.add("hexRowMoved");
        row.appendChild(half);
      }
      
      //create hexagons for each row
      for(let j=0; j<columns; j++){
        let hex = document.createElement("div");
        hex.classList.add("bgHexagon");
        if(parseInt(Math.random()+0.1))
          hex.classList.add("bgHexagon-trans");
        row.appendChild(hex);
      }
      this.main.appendChild(row);
    }
  }
  main;

  render(){
    return this.main;
  }
}


//hexagon background

//header element
const header = document.querySelector('header');

//cursor for hex-background
let cursor = document.createElement("div");
cursor.classList.add("cursor");

//event for mouse movements
header.addEventListener('mousemove', (e) => {
  let side = cursor.offsetHeight;
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.left = (x - side/2) + "px";
  cursor.style.top = (y - side/2) + "px";
});


//add background to header
header.appendChild(new bgHex(parseInt(window.innerHeight/55), parseInt(window.innerWidth/48)).render());

//append this cursor to hexBg
header.appendChild(cursor);





///timeline

//add random colors here
let colors = new Map();

//parent of timeline
const timelineSuperParent = document.querySelector("article.timeline");

//an element to append timeline
let timelineParent = document.createElement("section");
timelineParent.classList.add("sub-card", "timeline-progress");


//beginning transparent element
timelineParent.appendChild(new TimelineProgressBar().render());

//dynamically appending
for (let i = 0; i < timelineData.length; i++) {
  let element = timelineData[i];//current element
  let cell = new TimelineCell(element).render();//current cell
  let bar = new TimelineProgressBar(element.date).render();//corresponding bar
  let year = calcYear(element.date);//current elements year

  //if color exist don't override
  if(!colors.has(year)) colors.set(year, `hsl(${parseInt((Math.random()*1000)%360)}, ${parseInt((Math.random()*100)%100)}%, ${parseInt(60)}%)`);

  //setting colors
  cell.style.borderColor = colors.get(year);
  
  if(i!=0){
    bar.style.backgroundColor = colors.get(year);
    timelineParent.appendChild(bar);
  }

  timelineParent.appendChild(cell);
}

timelineSuperParent.appendChild(timelineParent);

//ending transparent element
timelineParent.appendChild(new TimelineProgressBar().render());













//helper functions
function calcYear(date) {
  return parseInt(date.charAt(date.length-2)+date.charAt(date.length-1));
}