let data = [
    { fullName: "mahesh1", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh2", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh3", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
    { fullName: "mahesh4", companyName: "uber", companyEmail: "uber@gmail.com", interestedIn: ["python", "django"] },
];


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

const listContainer = document.querySelector("#listItems");
const girdContainer = document.querySelector("#gridItems")
var datasHandle = document.querySelectorAll("#datasHandle");
const companyContainer = document.querySelector("#companyContainer");
const listView = document.querySelector("#listView");
const gridView = document.querySelector("#gridView");
const cardContainer = document.querySelector("#items");
const interestedIn = document.querySelector("#interest");
const activeAndNew = document.querySelector("#activeAndNew");
const currentPath = document.querySelector("#currentPath");
// logout bar
const logoutBtn = document.querySelector("#logoutBtn");
const LogContainer = document.querySelector("#LogContainer");


function logOutComponent(){
    
    
    return (`<div class = "flex flex-col border border-[#397c8f]  bg-white rounded-xl h-56 w-[350px] p-7">
        <h3 class = "text-[#3f4d8e] font-semibold">Confirm logout</h3>
        <div class =" w-full border border-t-black mt-2"></div>
        <p class = "text-[#3f4d8e] mt-3 font-semibold">Are you sure want to log out ?</p>
        <div class = "flex  mt-10 justify-end font-semibold">
            <button class = "w-24 py-2 rounded-3xl text-[#3f4d8e] bg-[#3f4e8e1e]" id ="cancel" onclick="clear()" >Cancel</button>
            <button class = "w-24 py-2 rounded-3xl ml-5 text-white bg-[#3f4d8e]">OK</button>
        </div>
    </div>`);
}

logoutBtn.addEventListener("click",()=>{
    LogContainer.classList.add("flex");
    LogContainer.classList.remove("hidden");
    LogContainer.innerHTML = logOutComponent();
})


// listComponent
function listComponent(item, flag) {
    return `<div class ="flex font-light items-center py-5 pl-10 border border-transparent border-b-[#3f4e8e60] hover:border-b-[#3f4d8e] hover:cursor-pointer hover:shadow-md hover:transition-all
    hover:duration-300 mb-2 " "id="datasHandle">
        <div class="flex md:w-1/4"><span class="hover:text-[#397c8f] transition-colors duration-300">${item.fullName}</span></div>
        <div class="flex md:w-1/4"><span class="hover:text-[#397c8f] transition-colors duration-300">${item.companyName}</span></div>
        <div class="flex md:w-1/4"><span class="hover:text-[#397c8f] transition-colors duration-300">${item.companyEmail}</span></div>
        <div class="flex md:w-1/4 ${flag ? `hidden` : `flex`}">
        <span class="hover:text-[#397c8f] transition-colors duration-300">${item.interestedIn}</span>
        </div>
         <div class="w-1/4 flex ${flag ? `flex` : `hidden`}">
            <button class=" ring rounded-md w-1/2">View</button>
            <button class=" ml-7 py-1 bg-green-700 text-white rounded-md w-1/2">Accept</button>
        </div>
    </div>`
}
// gridComponent
function gridComponent(item, flag) {
    return `<div class ="h-60 max-w-[300px] min-w-full flex flex-col pt-3  font-light text-slate-950 rounded-lg justify-between overflow-hidden
        transition-all duration-300 hover:scale-[1.01] hover:shadow-lg border" "id="datasHandle">
       
            <div class="flex flex-col ml-5 order-2 ">
            <span class = "text-[#3f4d8e] font-semibold">Full Name</span>
            <span> ${item.fullName}grid</span>
            </div>
    
            <div class=" flex  order-1  justify-between border border-transparent border-b-indigo-800">
            <div>
            <span class= "ml-5 text-[#3f4d8e] font-semibold">${item.companyName}</span>
            <span class= "flex gap-1 ml-5 ">
            <i class="ri-time-line text-slate-500"></i>
            <p>2 hours ago</p>
            </span>
            </div>
            <i class="ri-notification-2-line mr-3 font-semibold text-[#397c8f]"></i>
            </div>
    
            
    
            <div class="flex flex-col ml-5 order-4 ">
            <span class = "text-[#3f4d8e] font-semibold">Their Intrested In</span>
            <span>${item.interestedIn}</span>
            </div>
            <div class = "order-5 flex">
            <button class="flex  items-center justify-center bg-[#397c8f] p-2 w-full font-semibold text-lg text-white" id= "viewBtn">View</button>
            <button class="flex  items-center justify-center bg-[#3f4d8e]  w-full  font-semibold text-lg text-white ${flag ? `flex` : `hidden`}">Accept</button> 
            </div>
            
        </div>`;
}

// list and grid functionality
newRequest.addEventListener("click", (e) => {
    listContainer.innerHTML = "";
    girdContainer.innerHTML = "";
    interestedIn.innerHTML = "View or Accept";
    activeAndNew.classList.add("hidden");
    currentPath.classList.remove("hidden");

    data.slice(5).map((item) => {
        listContainer.innerHTML = listContainer.innerHTML + listComponent(item, true);
        girdContainer.innerHTML = girdContainer.innerHTML + gridComponent(item, true);
    });

    e.preventDefault()
})

addEventListener("DOMContentLoaded", () => {
    data.slice(5).map((item) => {
        listContainer.innerHTML = listContainer.innerHTML + listComponent(item, false);
        girdContainer.innerHTML = girdContainer.innerHTML + gridComponent(item, false);
    })
});

// gridView display
gridView.addEventListener("click", () => {
    gridView.classList.remove("bg-slate-300")
    gridView.classList.add("bg-[#3f4d8e]", "text-white", "transition-all", "duration-700");
    listView.classList.remove("bg-[#3f4d8e]", "text-white");
    listView.classList.add("bg-slate-300");
    listContainer.classList.remove("md:flex");
    companyContainer.classList.remove("md:flex");
    girdContainer.classList.remove("md:hidden");
})
// listView display
listView.addEventListener("click", () => {
    listView.classList.remove("bg-slate-300")
    listView.classList.add("bg-[#3f4d8e]", "text-white", "transition-all", "duration-700");
    gridView.classList.remove("bg-[#3f4d8e]", "text-white");
    gridView.classList.add("bg-slate-300");
    listContainer.classList.add("md:flex");
    companyContainer.classList.add("md:flex");
    girdContainer.classList.add("md:hidden");
})

