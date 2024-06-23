let inputEl = document.getElementById("searchInput");
let containerEl = document.getElementById("searchResults");
let loaderEl = document.getElementById("spinner");

function displayDetails(item) {

    let titleEl = document.createElement("a");
    titleEl.textContent = item.title;
    titleEl.classList.add("result-title");
    titleEl.href = item.link;
    titleEl.target = "_blank";
    containerEl.appendChild(titleEl);

    let lineBreakEl = document.createElement("br");
    containerEl.appendChild(lineBreakEl);

    let urlEl = document.createElement("a");
    urlEl.textContent = item.link;
    urlEl.classList.add("result-url");
    urlEl.href = item.link;
    urlEl.target = "_blank";
    containerEl.appendChild(urlEl);

    let lineBreakEl1 = document.createElement("br");
    containerEl.appendChild(lineBreakEl1);

    let paraEl = document.createElement("p");
    paraEl.textContent = item.description;
    paraEl.classList.add("link-description");
    containerEl.appendChild(paraEl);

    let lineEl = document.createElement("hr");
    containerEl.appendChild(lineEl);
}


function AllData(allItems) {
    loaderEl.classList.toggle("d-none");
    for (let eachItem of allItems) {
        displayDetails(eachItem);
    }
}


function getData() {
    loaderEl.classList.toggle("d-none");
    let inputValue = inputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + inputValue;
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            AllData(jsondata.search_results);
        });

}


inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        containerEl.textContent = "";
        getData();
    }
});