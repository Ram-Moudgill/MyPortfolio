console.log("hello world");
const arrowLeft=document.getElementById("arrow__left");
const arrowRight=document.getElementById("arrow__right");
const mainHeader=document.getElementById("main__header");
const imgColl=['myimg1.jpg','myimg2.jpg','myimg5.jpg','myimg6.jpg'];
let count=0;
const switchRight=()=>
{
    count++;
    if(count>=imgColl.length)
    {
        count=0;
    }
    console.log(imgColl.length);
    let headerImg=imgColl[count];
    mainHeader.style.backgroundImage=`url("images/headerimg/${headerImg}")`;
}
setInterval(switchRight
   , 6000);
arrowRight.addEventListener('click',()=>
{
    count++;
    if(count>=imgColl.length)
    {
        count=0;
    }
    console.log(imgColl.length);
    let headerImg=imgColl[count];
    mainHeader.style.backgroundImage=`url("images/headerimg/${headerImg}")`;

})
arrowLeft.addEventListener('click',()=>
{
    count--;
    if(count<0)
    {
        count=imgColl.length-1;
    }
    console.log(imgColl.length);
    let headerImg=imgColl[count];
    mainHeader.style.backgroundImage=`url("images/headerimg/${headerImg}")`;

})
