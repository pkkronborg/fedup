let list = document.getElementById("list");

const url = "https://fedup.kronia.one/wp-json/wp/v2/posts";

async function getData() {
  const response = await fetch(url);
  const postList = await response.json();

  for (let i = 0; i < postList.length; i++) {
    list.innerHTML += `
    <h1>${postList[i].title.rendered}</h1>
    <div>
        ${postList[i].content.rendered}
    </div>
    `;
  }
}

getData();
