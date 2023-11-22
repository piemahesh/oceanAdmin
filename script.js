let data = [
    { fullName: "mahesh", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
];

console.log(document.location.pathname);
// console.log(document.location.pathname == "/index.html");
const companyContainer = document.querySelector("#companyContainer");
// console.log(companyContainer);
// side nav bar'''====
const navbar = document.querySelector("#navbar");
const sideNavbtn = document.querySelector("#sideNavbtn");
const closebtn = document.querySelector("#closebtn");

sideNavbtn.addEventListener("click", () => {
    navbar.classList.remove("-left-72");
    navbar.classList.add("left-0");
})

closebtn.addEventListener("click", () => {
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
            const Dhtml = `
            <div class = "flex inData items-center justify-between min-w-full  h-52 w-full md:h-fit mt-5 overflow-hidden md:p-5 md:w-full rounded-xl md:rounded-none
            flex-col md:flex-row transition-all duration-200 font-thin text-slate-800 border border-t-transparent border-solid border-b-blue-500 md:hover:scale-100 hover:scale-105 hover:cursor-pointer
            hover:drop-shadow hover:shadow-sm hover:shadow-[#3f4e8e3f] hover:transition-all hover:duration-100 " id="datasHandle">
           
                <div class="flex items-center md:w-1/4">${item.fullName}</div>
                <div class="flex items-center md:w-1/4">${item.companyName}</div>
                <div class="flex items-center md:w-1/4">${item.companyEmail}</div>
                <div class="flex items-center md:w-1/4">${item.interestedIn}</div>
                <button class="flex items-center justify-center bg-[#397c8f] p-2 w-full md:hidden text-white" id= "viewBtn">View</button>
                
            </div>`;
            itemsContainer.innerHTML = itemsContainer.innerHTML + Dhtml;
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

// list and grid functionality;
var datasHandle = document.querySelectorAll("#datasHandle");

const listView = document.querySelector("#listView");
const gridView = document.querySelector("#gridView");
const cardContainer = document.querySelector("#items");
gridView.addEventListener("click", () => {
    gridView.classList.remove("bg-slate-300")
    gridView.classList.add("bg-[#3f4d8e]", "text-white", "transition-all", "duration-700");
    listView.classList.remove("bg-[#3f4d8e]", "text-white");
    listView.classList.add("bg-slate-300");
    cardContainer.classList.add("md:grid-cols-3");
    cardContainer.classList.remove("md:grid-cols-1");
    // datas loop;
    datasHandle.forEach(e => {
        e.classList.add("h-52","flex-col");
        e.classList.remove("md:h-fit","md:p-5","md:w-full","md:flex-row","md:rounded-none");
        // e.querySelector("#viewBtn").classList.add("flex")
        e.querySelector("#viewBtn").classList.remove("md:hidden");
        e.querySelectorAll("div").forEach(i =>{
            i.classList.add("justify-center");
        })
        
    });
    
});
listView.addEventListener("click", () => {
    listView.classList.remove("bg-slate-300")
    listView.classList.add("bg-[#3f4d8e]", "text-white", "transition-all", "duration-700");
    gridView.classList.remove("bg-[#3f4d8e]", "text-white");
    gridView.classList.add("bg-slate-300");
    cardContainer.classList.add("md:grid-cols-1");
    cardContainer.classList.remove("md:grid-cols-3");
    datasHandle.forEach(e => {
        e.classList.add("md:h-fit","md:p-5","md:w-full","md:flex-row","md:rounded-none");
        // e.classList.remove("h-52");
        e.querySelector("#viewBtn").classList.add("md:hidden")
    });
});









{/* <div class = "w-1/3 flex">
                    <button class= "bg-[#397c8f] w-1/2">View</button><button class = "bg-[#3f4d8e] w-1/2">Accept</button>
                </div> */}

