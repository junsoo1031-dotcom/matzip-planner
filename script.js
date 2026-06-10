
let restaurants=[];

document.getElementById('today').innerText =
new Date().toLocaleDateString('ko-KR');

function saveData(){
localStorage.setItem('restaurants',
document.getElementById('restaurantList').innerHTML);
}

function loadData(){
const data=localStorage.getItem('restaurants');
if(data){
document.getElementById('restaurantList').innerHTML=data;
}
}

loadData();

function addRestaurant(){

const name=document.getElementById('name').value;
const region=document.getElementById('region').value;
const rating=document.getElementById('rating').value;
const date=document.getElementById('visitDate').value;
const file=document.getElementById('photo').files[0];

if(name===''){
alert('맛집 이름 입력');
return;
}

const li=document.createElement('li');

let content=`
<b>${name}</b><br>
지역 : ${region}<br>
평점 : ${rating}<br>
방문예정일 : ${date}<br>
<button onclick="favorite(this)">❤️ 즐겨찾기</button>
<button onclick="removeItem(this)">🗑 삭제</button>
`;

if(file){
const reader=new FileReader();
reader.onload=function(e){
li.innerHTML=content +
`<br><img class="preview" src="${e.target.result}">`;
document.getElementById('restaurantList').appendChild(li);
saveData();
};
reader.readAsDataURL(file);
}else{
li.innerHTML=content;
document.getElementById('restaurantList').appendChild(li);
saveData();
}

restaurants.push(name);

document.getElementById('name').value='';
}

function favorite(btn){
btn.innerText='💖 저장됨';
saveData();
}

function removeItem(btn){
btn.parentElement.remove();
saveData();
}

function recommendRestaurant(){
if(restaurants.length===0){
document.getElementById('recommend').innerText='등록된 맛집 없음';
return;
}

const random=restaurants[Math.floor(Math.random()*restaurants.length)];

document.getElementById('recommend').innerText =
'오늘의 추천 맛집 : '+random;
}

function searchRestaurant(){
const keyword=document.getElementById('search').value.toLowerCase();
const items=document.querySelectorAll('#restaurantList li');

items.forEach(item=>{
if(item.innerText.toLowerCase().includes(keyword)){
item.style.display='block';
}else{
item.style.display='none';
}
});
}
