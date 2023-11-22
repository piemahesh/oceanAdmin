let data = [
    {fullName:"mahesh",companyName:"uber",companyEmail:"uber@gmail.com",interestedIn:["python","django"]},
    {fullName:"mahesh",companyName:"uber",companyEmail:"uber@gmail.com",interestedIn:["python","django"]},
];

// side nav bar'''====
const navbar = document.querySelector("#navbar");
const sideNavbtn = document.querySelector("#sideNavbtn");
const closebtn = document.querySelector("#closebtn");

sideNavbtn.addEventListener("click",()=>{
    console.log("clicked");
    navbar.classList.remove("-left-72");
    navbar.classList.add("left-0");
    // navbar.style.left = "0px";
})

closebtn.addEventListener("click",()=>{
    navbar.classList.add("-left-72");
    navbar.classList.remove("left-0");
})
// side nav end

// pagination start

function paginate(items, itemsPerPage, pageContainer) {
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function showItems(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = items.slice(startIndex, endIndex);

        const itemsContainer = document.querySelector("#items");
        itemsContainer.innerHTML = "";

        //   page items
        pageItems.forEach((item) => {
            // const maindiv = document.createElement("div");
            // const nameData = document.createElement("div");
            // const ageData = document.createElement("div");
            // const emailData = document.createElement("div");
            
            const Dhtml = `
            <div class = "flex inData items-center justify-between min-w-full  h-52 w-full md:h-fit mt-5 overflow-hidden md:p-5 md:w-full rounded-xl md:rounded-none
            flex-col md:flex-row transition-all duration-200 font-thin text-slate-800 border border-t-transparent border-solid border-b-blue-500 md:hover:scale-100 hover:scale-105 hover:cursor-pointer
            hover:drop-shadow hover:shadow-lg hover:shadow-[#3f4e8e50] hover:transition-all hover:duration-100 " id="datasHandle">
           
                <div class="flex items-center md:w-1/4">${item.fullName}</div>
                <div class="flex items-center md:w-1/4">${item.companyName}</div>
                <div class="flex items-center md:w-1/4">${item.companyEmail}</div>
                <div class="flex items-center md:w-1/4">${item.interestedIn}</div>
                <button class="flex items-center justify-center bg-[#397c8f] p-2 w-full md:hidden text-white">View</button>
                
            </div>`;
            itemsContainer.innerHTML = itemsContainer.innerHTML + Dhtml;
            // console.log(item);
            // itemsContainer.appendChild(Dhtml);
        });
    }

    function setupPagination() {
        const pagination = document.querySelector(pageContainer);
        // console.log(pagination);
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const link = document.createElement("a");
            link.href = "#";
            link.innerText = i;

            if (i === currentPage) {
                link.classList.add("active");
            }

            link.addEventListener("click", (event) => {
                event.preventDefault();
                currentPage = i;
                showItems(currentPage);

                const currentActive = pagination.querySelector(".active");
                currentActive.classList.remove("active");
                link.classList.add("active");
            });

            pagination.appendChild(link);
        }
    }

    showItems(currentPage);
    setupPagination();
}
const itemsPerPage = 5;
const pageContainer = "#PageContainer";
paginate(data, itemsPerPage, pageContainer);


const datasHandle = document.querySelectorAll("#datasHandle");
const listView = document.querySelector("#listView");
const gridView = document.querySelector("#gridView");
const cardContainer = document.querySelector("#items");
console.log(listView);
console.log(gridView);
// console.log(cardContainer);

listView.addEventListener("click",()=>{
   
})
gridView.addEventListener("click",()=>{
   
})

console.log(datasHandle);

















{/* <div class = "w-1/3 flex">
                    <button class= "bg-[#397c8f] w-1/2">View</button><button class = "bg-[#3f4d8e] w-1/2">Accept</button>
                </div> */}




// console.log(typeof(Indata))  


// listForm.addEventListener("click",()=>{
//     console.log("button clicked");
//     // let cls = "bg-[#3f4d8e] cursor-pointer px-3 rounded-l-md  text-white flex-row";
//     const cls = "flex-col";
//     Indata.forEach(e => {
//         console.log(e)
//         e.className = cls;
//     });
    
//     // listForm.className = cls;





// listForm.toggleAttribute("active");
// listForm.setAttribute.classList="column"

// console.log(JSON.stringify(listGrid));

// var btnContainer = document.getElementById("myDIV");

// var btns = btnContainer.getElementsByClassName("btn");

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }








// const d = [
// ]
// function rowComponent(data) {
//     return `
//     <h1>${data}-</h1>  `
// }
// document.body.innerHTML = document.body.innerHTML + d.map((d) => rowComponent(d))
// pageItems.forEach((item) => {
//     const maindiv = document.createElement("div");
//     const nameData = document.createElement("div");
//     const ageData = document.createElement("div");
//     const emailData = document.createElement("div");
//     maindiv.className = "inData";
//     nameData.textContent = `${item.name}`;
//     ageData.textContent = `${item.age}`;
//     emailData.textContent = `${item.email}`;
//     maindiv.append(nameData, ageData, emailData);
//     itemsContainer.appendChild(maindiv);
// });


// <button class="text-indigo-500 border border-indigo-500 rounded-lg pr-2 pl-2">view</button>
//                 <button class="text-white border focus:ring bg-green-600 rounded-lg pr-3 pl-3">Accept</button>