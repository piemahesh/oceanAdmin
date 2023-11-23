let data = [
    { fullName: "mahesh1", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh2", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh3", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
];

console.log(document.location.pathname);
// console.log(document.location.pathname == "/index.html");

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

// data show start

const itemsContainer = document.querySelector("#items");
data.forEach((item) => {
    const Dhtml = `
    <div class = "flex inData  justify-between min-w-full pt-2 h-52 w-full md:h-fit mt-5 overflow-hidden md:p-5 md:w-full rounded-xl md:rounded-none
    flex-col md:flex-row transition-all duration-200 font-light text-slate-950 border border-t-transparent border-solid border-b-blue-500 md:hover:scale-100 hover:scale-[1.01] hover:cursor-pointer
    hover:drop-shadow hover:shadow-sm hover:shadow-[#3f4e8e3f] hover:transition-all hover:duration-100 " id="datasHandle">
   
        <div class="flex ml-5 order-2 md:order-1 md:ml-0 md:w-1/4">${item.fullName}</div>
        <div class="flex ml-5 order-1 md:order-2 md:ml-0 md:w-1/4 justify-between border md:border-none border-transparent border-b-indigo-800">${item.companyName} <i class="ri-notification-2-line mr-3 md:hidden"></i> </div>
        <div class="flex ml-5 order-3 md:order-3 md:ml-0 md:w-1/4">${item.companyEmail}</div>
        <div class="flex ml-5 order-4 md:order-4 md:ml-0 md:w-1/4">${item.interestedIn}</div>
        <button class="flex  order-5 md:order-5 items-center justify-center bg-[#397c8f] p-2 w-full md:hidden text-white" id= "viewBtn">View</button>
        
    </div>`;
    itemsContainer.innerHTML = itemsContainer.innerHTML + Dhtml;
});

// list and grid functionality;
var datasHandle = document.querySelectorAll("#datasHandle");
const companyContainer = document.querySelector("#companyContainer");
const listView = document.querySelector("#listView");
const gridView = document.querySelector("#gridView");
const cardContainer = document.querySelector("#items");

// 
gridView.addEventListener("click", () => {
    gridView.classList.remove("bg-slate-300")
    gridView.classList.add("bg-[#3f4d8e]", "text-white", "transition-all", "duration-700");
    listView.classList.remove("bg-[#3f4d8e]", "text-white");
    listView.classList.add("bg-slate-300");
    cardContainer.classList.add("md:grid-cols-3");
    cardContainer.classList.remove("md:grid-cols-1");
    companyContainer.classList.remove("md:flex");
    // datas loop;
    datasHandle.forEach(e => {
        e.classList.add("h-52","flex-col");
        e.classList.remove("md:h-fit","md:p-5","md:w-full","md:flex-row","md:rounded-none","justify-start");
        e.querySelector("#viewBtn").classList.remove("md:hidden");

        e.querySelectorAll("div").forEach(i =>{
            i.classList.add("md:ml-5");
            i.classList.remove("md:ml-0");
            console.log(i.getRootNode());
            
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
    companyContainer.classList.add("md:flex");
    datasHandle.forEach(e => {
        e.classList.add("md:h-fit","md:p-5","md:w-full","md:flex-row","md:rounded-none");
        e.querySelector("#viewBtn").classList.add("md:hidden");
        e.querySelectorAll("div").forEach(i =>{
            i.classList.add("md:ml-0");
            i.classList.remove("md:ml-5");
        })
    });
});









{/* <div class = "w-1/3 flex">
                    <button class= "bg-[#397c8f] w-1/2">View</button><button class = "bg-[#3f4d8e] w-1/2">Accept</button>
                </div> */}

