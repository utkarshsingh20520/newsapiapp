let apikey = "4aee872907603597658f84cf91cd5821";
 


let country = "in";
let countryname = "India";

function show0() {
  country = "in";
  document.getElementById("country").innerHTML = "India";
  load();
}
function show1() {
  country = "au";
  document.getElementById("country").innerHTML = "Australia";
  console.log("Clicked");
  load();
}
function show2() {
  country = "jp";
  document.getElementById("country").innerHTML = "Japan";
  load();
}
function show3() {
  country = "us";
  document.getElementById("country").innerHTML = "United States of America";
  load();
}
function show4() {
  country = "gb";
  document.getElementById("country").innerHTML = "United Kingdom";
  load();
}

console.log(document.getElementById("0"));

let newsaccordion = document.getElementById("newsaccordion");

function load() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://gnews.io/api/v4/top-headlines?country=${country}&token=${apikey}`
  );

  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let newselem = "";
      articles.forEach((element, index) => {
        let news = `<div class="col-lg-3 col-md-3 col-sm-12 card my-3 px-3">
                          <div class="row" style="border: .5px solid black">
                            <div class="image col-sm-12 p-0">
                               <img src="${element.image}" alt="Image is not in the server">
                             </div>
                            <div class="headingss col-sm-12 p-0">
                                 <p>${element.title}</p>
                            </div>
                            <div class="button">
                               <a class="btns" href="${element.url} target="_blank">Read More</a>
                            </div>
                          </div>
                    </div> `;
        newselem += news;
      });

      newsaccordion.innerHTML = newselem;
    } else {
      console.log("Error");
    }
  };

  xhr.send();
}


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
