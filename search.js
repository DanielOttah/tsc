const inputSearch = document.getElementById("inputSearch");
btnSearch.addEventListener("click", searchForMessage);
window.addEventListener('load', loadMessages);
btnRefresh.addEventListener("click", loadMessages);


let allMessages = [
    {
        title: "Anchoring Your Trust In GOD",
        listen: "assets/audio/anchor(MP3_128K).mp3",
        download: "assets/audio/anchor(MP3_128K).mp3",

    },
    {
        title: "You Are The Light Of The World",
        listen: "assets/audio/light(MP3_128K).mp3",
        download: "assets/audio/light(MP3_128K).mp3",

    },
    {
        title: "Invocation Of The Blessing",
        listen: "assets/audio/invoke(MP3_128K).mp3",
        download: "assets/audio/invoke(MP3_128K).mp3",

    },
    {
        title: "How To Renew Your Mind",
        listen: "assets/audio/renew(MP3_128K).mp3",
        download: "assets/audio/renew(MP3_128K).mp3",

    },
    {
        title: "Stop Searching, Start Resting",
        listen: "assets/audio/stop(MP3_128K).mp3",
        download: "assets/audio/stop(MP3_128K).mp3",

    },
    {
        title: "Commanding the Favour of God",
        listen: "https://drive.google.com/file/d/1FvEPER_pdZ1vFTkf3b9cJ86bKdfxXhuR",
        download: "https://drive.google.com/uc?export=download&id=1FvEPER_pdZ1vFTkf3b9cJ86bKdfxXhuR",

    },
    {
        title: "Confession Brings Possesion",
        download: "https://drive.google.com/uc?export=download&id=1G-CufJyjKDHxhBycFj0gGu-bCB_T1A-I",
        listen: "https://drive.google.com/file/d/1G-CufJyjKDHxhBycFj0gGu-bCB_T1A-I/view?usp=sharing",

    },
    {
        title: "Hearing The Right Thing",
        download: "https://drive.google.com/uc?export=download&id=1DY-SjzShjxTiqarPvn0nJs0XN4NsGodv",
        listen: "https://drive.google.com/file/d/1DY-SjzShjxTiqarPvn0nJs0XN4NsGodv/view?usp=sharing",

    },
    {
        title: "Lessons For Life",
        listen: "https://drive.google.com/file/d/16rcxCCI5KTJPU0Lyt5Wh0gNcrUbeqOdn/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=16rcxCCI5KTJPU0Lyt5Wh0gNcrUbeqOdn",

    },
    {
        title: "Ministering To GOD Through Confession",
        listen: "https://drive.google.com/file/d/1OYnl_Tv093Th0pSY41-yA2MEF_yeSeWg/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1OYnl_Tv093Th0pSY41-yA2MEF_yeSeWg",

    },
    {
        title: "Power of Knowledg",
        listen: "https://drive.google.com/file/d/13SjAMcOznWuVG1UEKNIofUYKMSX7QZKQ/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=13SjAMcOznWuVG1UEKNIofUYKMSX7QZKQ",

    },
    {
        title: "Two Kinds of Faith",
        listen: "https://drive.google.com/file/d/1AAhev_lTzCyTyMVpWBTDgcKlUtedgdZC/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1AAhev_lTzCyTyMVpWBTDgcKlUtedgdZC",

    },
    {
        title: "Vitalizing Your Faith",
        listen: "https://drive.google.com/file/d/1crnfvLkOD260E3JjSh4nkI5DBaPPKnPb/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1crnfvLkOD260E3JjSh4nkI5DBaPPKnPb",

    },
    {
        title: "Provoking Divine Favour 1",
        listen: "https://drive.google.com/file/d/1le_tExZocq9iOWpJOaoQC_Arafj4_3RA/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1le_tExZocq9iOWpJOaoQC_Arafj4_3RA",

    },
    {
        title: "Provoking Divine Favour 2",
        listen: "https://drive.google.com/file/d/177g9XDqSgePJuyjzao3CFAPmDhLd9xZi/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=177g9XDqSgePJuyjzao3CFAPmDhLd9xZi",

    },
    {
        title: "Provoking Divine Favour 3",
        listen: "https://drive.google.com/file/d/1ZGyhtgTdvZzP9V90gga9MIusN9U2_jCR/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1ZGyhtgTdvZzP9V90gga9MIusN9U2_jCR",

    },
    {
        title: "Receiving Under The Anointing of Your Prophet",
        listen: "https://drive.google.com/file/d/1zOVWsyQHkPWI-1Eb6-IkzkqH0feo_J0W/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1zOVWsyQHkPWI-1Eb6-IkzkqH0feo_J0W",

    },
    {
        title: "Understanding The Operations Of Favour",
        listen: "https://drive.google.com/file/d/1APzZhVsknuT0r8Yd9dkXhDbrJbBB22dx/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1APzZhVsknuT0r8Yd9dkXhDbrJbBB22dx",

    },
    {
        title: "Walking In Supernatural Favour",
        listen: "https://drive.google.com/file/d/1zk0Tkop4hEDmOOxVo7KKYIRoPNnhHbyE/view?usp=sharing",
        download: "https://drive.google.com/uc?export=download&id=1zk0Tkop4hEDmOOxVo7KKYIRoPNnhHbyE",

    },
    // {
    //     title: "",
    //     listen: "",
    //     download: "https://drive.google.com/uc?export=download&id=",

    // },
];
const createLiList = (msgTitle, listenLink, downloadLink) => {
    let downloadImg = "assets/images/dl.png";
    let listenImg = "assets/images/s3.png";
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
    span2.appendChild(img2);
    span2.appendChild(document.createTextNode("|"))
    aTag_download.appendChild(span2);
    list.appendChild(aTag_download);
    return list;

}
function loadMessages() {
    inputSearch.value = "";
    let allmgs = messageList.firstElementChild;
    while (allmgs) {
        allmgs.remove();
        allmgs = messageList.firstElementChild;
    }
    for (let i = 0; i < allMessages.length; i++) {
        messageList.appendChild(createLiList(
            allMessages[i].title,
            allMessages[i].listen,
            allMessages[i].download
        ))
    }
}
function searchForMessage() {
    let filter = [];
    let allmgs = messageList.firstElementChild;
    let message = inputSearch.value.toLowerCase();

    while (allmgs) {
        allmgs.remove();
        allmgs = messageList.firstElementChild;
    }
    if (message == "") {

    } else {
        for (let i = 0; i < allMessages.length; i++) {
            if (allMessages[i].title.toLowerCase().includes(message)) {
                filter.push(i);
            }
        }

        if (filter.length == 0) {
            let noLi = document.createElement("li");
            noLi.appendChild(document.createTextNode("Sorry! No result. Try Using another query."))
            messageList.appendChild(noLi);
        }
        else {
            for (let i = 0; i < filter.length; i++) {
                messageList.appendChild(createLiList(
                    allMessages[filter[i]].title,
                    allMessages[filter[i]].listen,
                    allMessages[filter[i]].download
                ))
            }
        }

    }

}


