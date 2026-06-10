let restaurants=[];
document.getElementById('today').innerText='오늘 날짜: '+new Date().toLocaleDateString();

function addRestaurant(){
const input=document.getElementById('restaurantInput');
const name=input.value.trim();
if(!name){alert('맛집 이름을 입력하세요!');return;}
restaurants.push(name);

const li=document.createElement('li');
li.innerHTML=`${name} <button onclick="this.parentElement.remove()">삭제</button>`;
li.addEventListener('click',function(e){
if(e.target.tagName!=='BUTTON'){
this.style.textDecoration='line-through';
}
});
document.getElementById('restaurantList').appendChild(li);
input.value='';
}

function recommendRestaurant(){
if(restaurants.length===0){
document.getElementById('recommend').innerText='등록된 맛집이 없습니다.';
return;
}
const random=restaurants[Math.floor(Math.random()*restaurants.length)];
document.getElementById('recommend').innerText='추천 맛집: '+random;
}
