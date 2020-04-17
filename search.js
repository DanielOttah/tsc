const inputSearch = document.getElementById("inputSearch");
const btnSearch = document.getElementById("btnSearch");
const messageList = document.getElementById("messageList");


let allMessages = [
    {
        title: "Anchoring Your Trust In GOD",
        listen: "assets/audio/anchor(MP3_128K).mp3",
        download: "assets/audio/anchor(MP3_128K).mp3",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "You Are The Light Of The World",
        listen: "assets/audio/light(MP3_128K).mp3",
        download: "assets/audio/light(MP3_128K).mp3",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Invocation Of The Blessing",
        listen: "assets/audio/invoke(MP3_128K).mp3",
        download: "assets/audio/invoke(MP3_128K).mp3",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "How To Renew Your Mind",
        listen: "assets/audio/renew(MP3_128K).mp3",
        download: "assets/audio/renew(MP3_128K).mp3",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Stop Searching, Start Resting",
        listen: "assets/audio/stop(MP3_128K).mp3",
        download: "assets/audio/stop(MP3_128K).mp3",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Commanding the Favour of God",
        listen: "https://drive.google.com/file/d/1FvEPER_pdZ1vFTkf3b9cJ86bKdfxXhuR",
        download: "https://drive.google.com/uc?export=download&id=1FvEPER_pdZ1vFTkf3b9cJ86bKdfxXhuR",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Confession Brings Possesion",
        download: "https://drive.google.com/uc?export=download&id=1G-CufJyjKDHxhBycFj0gGu-bCB_T1A-I",
        listen: "https://drive.google.com/file/d/1G-CufJyjKDHxhBycFj0gGu-bCB_T1A-I/view?usp=sharing",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Hearing The Right Thing",
        download: "https://drive.google.com/uc?export=download&id=1DY-SjzShjxTiqarPvn0nJs0XN4NsGodv",
        listen: "https://drive.google.com/file/d/1DY-SjzShjxTiqarPvn0nJs0XN4NsGodv/view?usp=sharing",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Lessons For Life",
        listen: "https://drive.google.com/file/d/16rcxCCI5KTJPU0Lyt5Wh0gNcrUbeqOdn/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=16rcxCCI5KTJPU0Lyt5Wh0gNcrUbeqOdn",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Ministering To GOD Through Confession",
        listen: "https://drive.google.com/file/d/1OYnl_Tv093Th0pSY41-yA2MEF_yeSeWg/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1OYnl_Tv093Th0pSY41-yA2MEF_yeSeWg",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Power of Knowledg",
        listen: "https://drive.google.com/file/d/13SjAMcOznWuVG1UEKNIofUYKMSX7QZKQ/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=13SjAMcOznWuVG1UEKNIofUYKMSX7QZKQ",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Two Kinds of Faith",
        listen: "https://drive.google.com/file/d/1AAhev_lTzCyTyMVpWBTDgcKlUtedgdZC/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1AAhev_lTzCyTyMVpWBTDgcKlUtedgdZC",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
    {
        title: "Vitalizing Your Faith",
        listen: "https://drive.google.com/file/d/1crnfvLkOD260E3JjSh4nkI5DBaPPKnPb/preview?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1crnfvLkOD260E3JjSh4nkI5DBaPPKnPb",
        imgListen: "assets/images/dl.png",
        imgDownload: "assets/images/s3.png"
    },
];
const createLiList = (msgTitle, listenLink, downloadLink, listenImg, downloadImg) => {
    const list = document.createElement("Li");
    list.className = "list-group-item";
    list.appendChild(document.createTextNode(msgTitle));

    const aTag_Listen = document.createElement("A");
    aTag_Listen.href = listenLink;//fix download link
    const span1 = document.createElement("SAPN");
    span1.classList.add("social-icons", "pull-right");
    const img1 = document.createElement("IMG");
    img1.src = listenImg;
    img1.alt = "social";
    span1.appendChild(document.createTextNode("|"))
    span1.appendChild(img1);
    aTag_Listen.appendChild(span1);
    list.appendChild(aTag_Listen);

    const aTag_download = document.createElement("A");
    aTag_download.href = downloadLink;//fix download link
    const span2 = document.createElement("SAPN");
    span2.classList.add("social-icons", "pull-right");
    const img2 = document.createElement("IMG");
    img2.src = downloadImg;
    img2.alt = "social";
    span2.appendChild(document.createTextNode("|"))
    span2.appendChild(img2);
    aTag_download.appendChild(span2);
    list.appendChild(aTag_download);
    return list;

}
const loadMessages = () => {
    console.log("seeing load msg");

    for (let i = 0; i < allMessages.length; i++) {
        messageList.appendChild(createLiList(
            allMessages[i].title,
            allMessages[i].listen,
            allMessages[i].download,
            allMessages[i].imgListen,
            allMessages[i].imgDownload
        ))
    }
}
const searchForMessage = () => {
    console.log("seeing you");

}
window.addEventListener('load', loadMessages)
btnSearch.addEventListener("click", searchForMessage);

{/* <li class="list-group-item"> Anchoring Your Trust In GOD
<a href="assets/audio/anchor(MP3_128K).mp3" download>
    <span class="social-icons pull-right"> |  <img src=" alt="social"></span>
</a>
<a href="assets/audio/anchor(MP3_128K).mp3"><span class="social-icons pull-right"><img src="assets/images/s3.png" alt="social"> | </span>
</a>
</li> */}