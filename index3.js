let lyricArray = [
    'Maybe I can break the curse And I can be in love forever If I die',
    'I just need to get it off my chest Yeah, more than you know Yeah, more than you know',
    'Do not leave me, I believe 走り出す No ending 君は僕の鼓動 例えどんな 雨に打たれても 例えどんな 闇に消されても 救い出すよ必ず 君は独りじゃない',
    'Say you will remember me standing in a nice dress Staring at the sunset, babe',
    'ell me something I need to know Then take my breath and never let it go If you just let me invade your space',
    'Uh uh When I close my eyes It is you there in my mind When I close my eyes',
    'When did i become so numb? When did i lose myself? All the words that leave my tongue Feel like they came from someone else',
    'All the things she said All the things she said Running through my head Running through my head Running through my head',
    'Last Christmas I gave you my heart But the very next day you gave it away',
    'You are my angel Angel baby, angel You are my angel, baby Baby, you are my angel Angel baby',
    'Baby girl, yeah We can get it in I can be temptation You can be my sin',
    'バイバイ愛しの思い出と 私の夢見がちな憧れ 優しくなれたよ 少しね 強くもなれたみたい',
    'but i aint worried bout it right now (right now) keeping dreams alive, 1999, heroes i aint worried bout it right now(right now) swimmin in the floods, dancing on the clouds, below',
    'I want you Monday, Tuesday, Wednesday, baby, every night (every night) And it feels like, ooh, ah(yeah) ',
    'I do the same thing I told you that I never would I told you I would change, even when I knew I never could',
    'Georgia, wrap me up in all yourI want you, in my arms Oh, let me hold you',
    'Cause I am in a field of dandelions Wishing on every one that you will be mine, mine',
    'This gon be the one and only Anthem ประสาทสัมผัส Sixth sense พลิกผัน แปล๊บๆ แค่โดนมือก็ราวกับไฟดูด',
    'I can love me better I can love me better baby Can love me better I can love me better baby',
    'ไอ้คนนิสัยไม่ดี ต้องเป็นแบบนี้ทุกที บอกตรงๆ ว่าเลิกแม่งเลยเหอะ ก็คงดี กี่ครั้งที่เสียน้ำตา ผิดแต่ไม่ยอมร่ำลา เลิกเลยไปถ้าคบแล้วไม่มีค่า จัดการแม่งเลย'
];

let RandomButton = document.getElementById('random'); /* random , stop , output ในที่นี้ดึงแท็กมาจากที่เรากำหนด id ไว้ใน HTML*/ 
let StopButton = document.getElementById('stop');
let output = document.getElementById('output');

let timeOutId = 0; /*ืทำการกำหนด timeOutId = 0 ให้เริ่มที่ 0 */


RandomButton.addEventListener('click', () => {
    /*ทำการ set setInterval เมื่อกด random Now! ไว้ที่ 3000 = 3 วินาที*/
        timeOutId = setInterval(() => {
        let n = lyricArray.length;
        let index = Math.floor(Math.random() * n);
        let lyric = lyricArray[index];
        output.innerHTML = lyric;
    }, 3000)
  
});

StopButton.addEventListener('click', () => {
    clearInterval(timeOutId);
    /*ทำการ set clearInterval เมื่อกดปุ่ม Stop Random*/
});