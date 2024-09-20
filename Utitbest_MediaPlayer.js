let now_playing = document.querySelector('.player-trackOf');
let playerArtwork = document.querySelector('.player-artwork');
let artistName = document.querySelector('.artistName');
let trackName = document.querySelector('.trackName');
let artworkImg = document.querySelector('.artwork-img');
let counterStart = document.querySelector('.trackStarter');
let counterEnd = document.querySelector('.trackEnd');
let trackSeek = document.querySelector('.trackSeek');
let volumeSeek = document.querySelector('.volumeSeek');
let suffle = document.querySelector('.trackShuff');
let previous = document.querySelector('.previous');
let playPause = document.querySelector('.playPause');
let repeat = document.querySelector('.repeat');
let playNext = document.querySelector('.playNext');
let openPlayList = document.querySelector('.openPlayList');
let togglePlayer = document.querySelector('.toggle-player');
let btncolorHandler = document.querySelectorAll('.cls');
let playerBg = document.querySelector('.Music-player-wrapper');
let list_of = document.querySelector('.player-trackOf');
let list_playingNow = document.querySelector('.list_playingNow');
let openExplorer = document.querySelector('.openPlayList');
let waves = document.querySelectorAll('.wve');
let player = document.querySelector('.player');


let currentTrack = document.createElement('AUDIO');


let track_index = 0;
let is_playing = false;
let israndom = false;
let customizeList = false;
let updateTimer;

let music_list = [{
    trackName:'Waje_Ft_Timaya_Kpolongo_9jaflaver.com_.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Waje_Ft_Timaya',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/2cbf1959-2021-4553-86cf-708648cce114.jpg',
},{
    trackName:'kpong-kpon(ku men udi)-1.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Okpo Record',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/10b8abdd-107c-4240-901e-dc6d52fb4ffd.jpg',
},{
    trackName:'Davido-Ft-Kizz-Daniel-Twe-Twe-Remix-(TrendyBeatz.com).mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Davido-Ft-Kizz-Daniel',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/c4d5031e-2ed0-43e8-8a7f-8823edd29d82.jpg',
},{
    trackName:'NINIOLA-MARADONA.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Niniola',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/f32dfe4b-d22a-40b5-b837-6edb872dd04e.jpg',
},{
    trackName:'King_Perryy_Ft_Timaya_Man_On_Duty_9jaflaver.com_.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'King-Perry Ft Timaya',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/169de50e-d197-43d5-9cfc-e7db0f4f939d.jpg',
},{
    trackName:'Asake_-_Ototo.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Asake',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/b33ac5a7-71c0-4e9e-8aa5-ae95165a52b4.jpg',
},{
    trackName:'ArrDee-No-Biggie-24Naijamuzic-com.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'ArrDee',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/6846d078-1f74-4cb8-aaab-9bb6253813ea.jpg',
},{
    trackName:'2pac ft jay sean - ride it (remix).mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'2pac ft jay sean',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/bef07992-0ec5-4777-97fe-0ca8ed19d86a.jpg',
},{   
    trackName:'Madonna - La Isla Bonita (Official Video).mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Madonna - La Isla Bonita',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/c9344d63-8851-4d40-a97f-152ec842f9c7.jpg',
},{
    trackName:'Tiwa-Savage-Ft-Omarion-Get-It-Now-Remix-(TrendyBeatz.com).mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Tiwa-Savage-Ft-Omarion',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/4bf9a35d-4561-49dc-a19e-02a03ea26c9b.jpg',
},{
    trackName:'M.O.P._-_Ante_Up_Robbing_Hoodz_Theory_Ft._Funkmaster_Flex.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Theory_Ft._Funkmaster',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/13c9fc4e-9257-4d9e-803b-98e08b2c9a10.jpg',
},{
    trackName:'DJ_Yomc__ Foreign Rap Verses Mix 2.0-www.ForeignDjMixtapes.com.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'DJ_Yomc__ Foreign Rap',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/IMG-20230808-WA0002.jpg',
},{
    trackName:'DJ fixy Best Of P-Square.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'DJ fixy',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/13c9fc4e-9257-4d9e-803b-98e08b2c9a10.jpg',
},{
    trackName:'Oliver Heart Attack Audio Ft De La Soul.mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Oliver Heart Ft De La Soul',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/Snapchat-1316163763.jpg',
},{
    trackName:'Mayorkun-Let-Me-Know-2-(JustNaija.com).mp3',
    trackLocation:'C:/Users/UTITOFON PC/Music/',
    artistName:'Mayorkun',
    trackArtwork:'C:/Users/UTITOFON PC/Pictures/IMG-20230808-WA0003.jpg',
}];

load_track(track_index);

function load_track(track_index){
    clearInterval(updateTimer);
    reset();

    if(localStorage.getItem('playingTrack') != null){
        track_index = JSON.parse(localStorage.getItem('playingTrack'));
    }
    currentTrack.addEventListener('ended', playNextTrack);
    // this function check were to form
    checkStorageBeforePlay();


    changeBtnClr(randomBg());
    let bg1 = randomBg();
    let bg2 = randomBg();
    let bg3 = randomBg();

    let t = track_index+1;
    let tt = music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    list_of.innerHTML = 'playing track ' + t +' of '+ tt;
    // list_playingNow.innerHTML = track_index +1;

    // let rr = music_list[track_index].trackName;
    // document.title = rr;

    let bgclr = 'linear-gradient('+ Math.floor(Math.random() * 361) + 'deg,' + bg1 + ',' + bg2 + ',' + bg3 + ')';
    playerBg.style.background = bgclr;
}
function randomBg(){
    let color = '#';
    let letters = '1234567890abcdef'.split('');

    for(let i = 0; i < 6; i++){
        let random = letters[Math.floor(Math.random() * 16)];
        color += random;
    }
    return color;
}
function changeBtnClr(clr){
    btncolorHandler.forEach((btn) => {
        btn.style.setProperty('color', clr);
    });

    document.body.setAttribute('btnClr', clr)
}

function reset(){
    counterStart.innerHTML = '00:00';
    counterEnd.innerHTML = '00:00'
}

function pauseRandom(){
    israndom= false;

    suffle.classList.remove('randomActive');
    this.localStorage.setItem('randomTrack', JSON.stringify(false));
}

function playRandom(){
    israndom= true;

    suffle.classList.add('randomActive');
    this.localStorage.setItem('randomTrack', JSON.stringify(true));
}

function randomTrack(){
    israndom ? pauseRandom() : playRandom();
}

function checkRandomActive(){
    if(localStorage.getItem('randomTrack') != null){
        let truefalse = JSON.parse(localStorage.getItem('randomTrack'));

        if( JSON.parse(localStorage.getItem('randomTrack'))){
            suffle.classList.add('randomActive')
        }else{
            suffle.classList.remove('randomActive');
        }
    }else{
        suffle.classList.remove('randomActive')
    }

}

function playPauseTrack(){
    is_playing ? pauseTrack() : playTrack(); 
}
window.addEventListener('keydown', function(event){
    if(event.keyCode == 32){
        playPauseTrack()
    }
    
})
function playTrack(){
    currentTrack.play();
    currentTrack.volume = getvolume();
    // currentTrack.playbackSpeed = 3;
    is_playing = true;
    artworkImg.classList.add('inPlay')
    playPause.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';

    

    waves.forEach(ele =>{
        ele.classList.add('waves');
        ele.style.setProperty('background', document.body.getAttribute('btnClr'));
    });
}

function showHideswaves(){
    is_playing ? hideWaves() : showWaves();
};

function pauseTrack(){
    currentTrack.pause()
    is_playing = false;
    artworkImg.classList.remove('inPlay')
    playPause.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';

    waves.forEach(ele =>{
        ele.removeAttribute('style');
        ele.classList.remove('waves');
    });
}
function playNextTrack(){
    if(LoadFromStorage() != 0){
        if(localStorage.getItem('repeatCurrent') !== null && JSON.parse(localStorage.getItem('repeatCurrent')) == true){
            let repeat = track_index;
            track_index = repeat;
            load_track(track_index);
            playTrack();
            return;
        }
        music_list = LoadFromStorage();

        if(localStorage.getItem('randomTrack') !== null && JSON.parse(localStorage.getItem('randomTrack')) == true){
            israndom = true;
        }
        if(track_index < music_list.length - 1 && israndom == false){
            track_index += 1;
        }else if(track_index < music_list.length - 1 && israndom == true){
            let randomIndex = Math.floor(Math.random() * music_list.length);
    
            track_index = randomIndex;
        }else{
            track_index = 0;
        }
        load_track(track_index);
        playTrack();
        colorCurrentPlay(track_index);
    
        return;
    }
    if(track_index < music_list.length - 1 && israndom == false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && israndom == true){
        let randomIndex = music_list[Math.floor(Math.random() * music_list.length)];

        track_index = randomIndex;
    }else{
        track_index = 0;
    }
    load_track(track_index);
    playTrack();
};


function playPreviousTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    load_track(track_index);
    playTrack();
    colorCurrentPlay(track_index)
}
window.addEventListener('keydown', function(event){
    if(event.keyCode == 39){
        playNextTrack();
    }
});
window.addEventListener('keydown', function(event){
    if(event.keyCode == 37){
        playPreviousTrack();
    }
});

function ForwardBackward(){
    let seekto = currentTrack.duration * (trackSeek.value / 100);
        currentTrack.currentTime = seekto;
}

function ChangeVolume(){
    let volume = currentTrack.volume = volumeSeek.value / 100;
    this.localStorage.setItem('playvolume', volume);
}

function getvolume(){
    let vol = '';
    if(localStorage.getItem('playvolume') !== null){
        vol = parseFloat(this.localStorage.getItem('playvolume'));
    }else{
        vol = 1;
    }
    return vol;
}

function updateVolumeSlider(){
    if(getvolume() == 1){
        volumeSeek.value = 100;
    }else{
        let vlume = getvolume().toString().replace('0.', '');
        volumeSeek.value = vlume;
    }
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(currentTrack.duration)){
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
        trackSeek.value = seekPosition;

        let currentMin = Math.floor(currentTrack.currentTime / 60);
        let currentSec = Math.floor(currentTrack.currentTime - currentMin * 60);

        let durationMin = Math.floor(currentTrack.duration / 60);
        let durationSec = Math.floor(currentTrack.duration - durationMin * 60);

        if(currentMin < 10){currentMin = '0' + currentMin}
        if(currentSec < 10){currentSec = '0' + currentSec}

        if(durationMin < 10){durationMin = '0' + durationMin}
        if(durationSec < 10){durationSec = '0' + durationSec}

        counterStart.innerHTML = currentMin + ':' + currentSec;
        counterEnd.innerHTML = durationMin + ':' + durationSec;
    }
    
};

document.addEventListener('keydown', function(e){
    if(e.which == 38){
        let currVal = volumeSeek.value++;
        volumeSeek.value = currVal +1;
        currentTrack.volume = getvolume();
        // alert(getvolume())
        localStorage.setItem('playvolume', volumeSeek.value / 100);
    }else if(e.which == 40){
        volumeSeek.value -= 1;
        currentTrack.volume = getvolume();
        localStorage.setItem('playvolume', volumeSeek.value / 100);
    }
    // else if(e.which == 175){
    //     let currVal = volumeSeek.value++;
    //     volumeSeek.value = currVal +2;
    //     currentTrack.volume = getvolume();
    //     localStorage.setItem('playvolume', volumeSeek.value / 100);
    // }else if(e.which == 174){
    //     volumeSeek.value -= 2;
    //     currentTrack.volume = getvolume();
    //     localStorage.setItem('playvolume', volumeSeek.value / 100);
    // }    
});

// generate input
let uploader = document.createElement('input');
    uploader.type = 'file';
    uploader.multiple = true;
    uploader.className = 'UploadMultipleFile';
    uploader.id = 'uploader';
    uploader.accept = 'audio/*';

    openExplorer.append(uploader);

    let uploaderInvokeer = document.querySelector('.UploadMultipleFile');
    uploaderInvokeer.addEventListener('change', function(){
        let selectedFiles = this.files;

        let list = [];

        for(var i = 0; i < selectedFiles.length; i++){
            list.push(selectedFiles[i].name);
        }
        localStorage.setItem('trackList', JSON.stringify(list));
        showList();
        load_track(0);
    });

    function LoadFromStorage(){
        if(localStorage.getItem('trackList') !== null){
            return JSON.parse(localStorage.getItem('trackList'));
        }else{
            return 0;
        }
    }
function storageTrueFalse(){
    if(localStorage.getItem('trackList') !== null){
        return true;
    }else{
        return false;
    }
}

function checkStorageBeforePlay(){
    storageTrueFalse() ? playUploadedFiles() : playLoalFiles();
}

function playUploadedFiles(){
    // if(localStorage.getItem('playingTrack') != null){
    //     track_index = JSON.parse(localStorage.getItem('playingTrack'));
    // };

    music_list = LoadFromStorage();
    let location = 'C:/Users/UTITOFON PC/Music/';
    let mymand = music_list[track_index];
    let artwork = 'C:/Users/UTITOFON PC/Pictures/1d6c7bc4-c0d6-496a-9f26-867e9efd4836.jpg';
    
    currentTrack.src = location + music_list[track_index];
    artworkImg.src = artwork;
    trackName.innerHTML = mymand;
    artistName.innerHTML = mymand;
}

function playLoalFiles(){
    trackName.innerHTML = music_list[track_index].trackName;
    artistName.innerHTML = music_list[track_index].artistName;
    artworkImg.src =  music_list[track_index].trackArtwork;
    currentTrack.src = music_list[track_index].trackLocation + music_list[track_index].trackName;
}

function showList(){
    let a, b, c, d, e, f, g, h;

    a = document.createElement('DIV');
    a.className = 'showPlayList-cnt hide';
    
    b = document.createElement('DIV');
    b.className = 'playerInnerwrap';

    c =document.createElement('UL');
    c.className = 'music-container';

    d = LoadFromStorage();

    if( d == 0){
        e = document.createElement('li');
        e.classList.add('fa-bounce');
        e.innerHTML = 'your playlist is empty';
        c.appendChild(e);

        b.appendChild(c);
        a.appendChild(b);
        player.append(a);
        return;
        
    }
 
    for(let x = 0; x < d.length; x++){
        e = document.createElement('LI');
        e.className = 'listTrack';
        e.innerHTML = d[x];
        c.appendChild(e);
    }   
    b.appendChild(c);
    a.appendChild(b);
    player.append(a);
    clickToPlayFromLIst();
};

function clickToPlayFromLIst(){
    let listTrack = document.querySelectorAll('.listTrack');
            listTrack.forEach((ele, ind) => {
                ele.onclick = function(){
                    // ele.classList.add('active-play')
                    track_index = ind;
                    
                    load_track(track_index);
                    playTrack();
                    colorCurrentPlay(track_index)
                }
            });
};

function repeatTrack(){
    let ele1, ele2, ele3, ele4;
    ele4 = document.querySelector('.repeatCurrentTrack');
    if(ele4 == null){
        ele1 = document.createElement('span');
        ele1.className = 'repeatIsActive repeatCurrentTrack';
        ele1.innerHTML = 1;
        repeat.append(ele1);
        repeat.classList.add('rep');
        localStorage.setItem('repeatCurrent', true)
    }else{
        ele4.remove()
        repeat.classList.remove('rep');
        localStorage.setItem('repeatCurrent', false)

    }
}

function colorCurrentPlay(track_index){
    let list = document.querySelectorAll('.listTrack');
    let playListInnerBody = document.querySelector('.showPlayList-cnt')
    // let toPlay = list[track_index];
        // toPlay.style.color = 'pink';

    list.forEach((ind) =>{
        ind.classList.remove('active-play');
        list[track_index].classList.add('active-play');
    });
    let track = list[track_index];
    let elePos = track.getBoundingClientRect()
        playListInnerBody.scrollTo(0, elePos.button - elePos.height);
        localStorage.setItem('playingTrack', track_index);
}

function isrepeatActive(){
    if(localStorage.getItem('repeatCurrent') != null && JSON.parse(localStorage.getItem('repeatCurrent')) == true){
        ele1 = document.createElement('span');
        ele1.className = 'repeatIsActive repeatCurrentTrack';
        ele1.innerHTML = 1;
        repeat.append(ele1);
        repeat.classList.add('activeActive');
    }
}

// function to add drop options

function toggler(){
    let a, b, c, d, e, f, g, h, i, j, k, l;
    b = document.querySelector('.element-tool');
    if(b.classList.contains('default')){
        b.classList.remove('default')
        b.classList.add('appear')
    }else{
        b.classList.add('default')
        b.classList.remove('appear')
    }
}
function hideShowList(){
    let list = document.querySelector('.showPlayList-cnt');
    if(list.classList.contains('show')){
        list.classList.remove('show');
        list.classList.add('hide');
    }else{
        list.classList.remove('hide');
        list.classList.add('show');
    }
}

function showspeed(){
    let a, b, c, d, e, f, g, h, i, j, k, l, m;
        b = document.querySelector('.element-tool');
        a = document.createElement('select');
        j = b.querySelector('.playSpeed');
        if(j !== null){
            j.remove();
        }
        a.className = 'playSpeed speedy';
        c = document.createElement('option');
        c.value = 1;
        c.innerText = 'Normal Speed';
        a.append(c);

        d = document.createElement('option');
        d.value = 0.25;
        d.innerText = 'Super slow';
        a.append(d);

        e = document.createElement('option');
        e.value = 0.5;
        e.innerText = 'slower';
        a.append(e);

        f = document.createElement('option');
        f.value = 0.75;
        f.innerText = 'slow';
        a.append(f);

        g = document.createElement('option');
        g.value = 1.25;
        g.innerText = 'Fast';
        a.append(g);

        h = document.createElement('option');
        h.value = 1.75;
        h.innerText = 'Faster';
        a.append(h);

        i = document.createElement('option');
        i.value = 2;
        i.innerText = ' Super faster';
        a.append(i);

        b.appendChild(a)
        spd();
}

function spd(){
    let a = document.querySelector('.playSpeed');
    a.addEventListener('change', function(){
        currentTrack.playbackRate = this.value;
    })
}

isrepeatActive();
showList();
checkStorageBeforePlay();
updateVolumeSlider();
window.onload = function(){
    checkRandomActive(); 
};
// console.log(navigator)
