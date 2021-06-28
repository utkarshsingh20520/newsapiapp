let apikey = "a739f2090b544d16a3a6724a5c7ff582";

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
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`
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
                               <img src="${element.urlToImage}" alt="Image is not in the server">
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