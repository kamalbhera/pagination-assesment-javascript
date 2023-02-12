let tbody = document.querySelector("tbody");
let pagesize = 10;
let currentpage = 0;

let users = fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then((data) => data.json())
  .then((data) => {
    users = data;

    for (let i = 0; i < 10; i++) {
      insertRow(users[i]);
    }
  });
function insertRow(data) {
  let row = tbody.insertRow();
  let column0 = row.insertCell(0);
  let column1 = row.insertCell(1);
  let column2 = row.insertCell(2);

  column0.innerHTML = data.id;
  column1.innerHTML = data.name;
  column2.innerHTML = data.email;
}
function changepage(direction) {
  if (direction === "next" && currentpage < 9) {
    currentpage++;

    goTopage();
  } else if (direction === "prev" && currentpage > 0) {
    console.log(currentpage);
    currentpage--;

    goTopage();
  } else if (
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(direction)
  ) {
    currentpage = direction - 1;
    goTopage();
  }

  // if(direction=='1'){
  //     currentpage = 0;
  //     goTopage()
  // }
  // if(direction=='2'){
  //     currentpage = 1;
  //     goTopage()
  // }
  // if(direction=='3'){
  //     currentpage = 2;
  //     goTopage()
  // }
  // if(direction=='4'){
  //     currentpage = 3;
  //     goTopage()
  // }
  // if(direction=='5'){
  //     currentpage = 4;
  //     goTopage()
  // }
  // if(direction=='6'){
  //     currentpage = 5;
  //     goTopage()
  // }
  // if(direction=='7'){
  //     currentpage = 6;
  //     goTopage()
  // }
  // if(direction=='8'){
  //     currentpage = 7;
  //     goTopage()
  // }
  // if(direction=='9'){
  //     currentpage = 8;
  //     goTopage()
  // }
  // if(direction=='10'){
  //     currentpage = 9;
  //     goTopage()
  // }
}

function goTopage() {
  tbody.innerHTML = "";
  for (
    let i = currentpage * pagesize;
    i < currentpage * pagesize + pagesize;
    i++
  ) {
    insertRow(users[i]);
  }
}
