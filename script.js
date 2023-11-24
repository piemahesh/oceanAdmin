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

const listContainer = document.querySelector("#listItems");
const girdContainer = document.querySelector("#gridItems")
var datasHandle = document.querySelectorAll("#datasHandle");
const companyContainer = document.querySelector("#companyContainer");
const listView = document.querySelector("#listView");
const gridView = document.querySelector("#gridView");
const cardContainer = document.querySelector("#items");
// list display
data.forEach((item) => {
    const lhtml = `
    <div class ="flex font-light py-5 pl-10 border border-transparent border-b-[#3f4d8e] hover:cursor-pointer hover:shadow-md hover:transition-all
    hover:duration-300 mb-2 " "id="datasHandle">
   
        <div class="flex md:w-1/4">${item.fullName}</div>
        <div class="flex md:w-1/4 justify-between border md:border-none border-transparent border-b-indigo-800">${item.companyName}</div>
        <div class="flex md:w-1/4">${item.companyEmail}</div>
        <div class="flex md:w-1/4">${item.interestedIn}</div>
        <button class="flex  order-5 md:order-5 items-center justify-center bg-[#397c8f] p-2 w-full md:hidden text-white" id= "viewBtn">View</button>
        
    </div>`;
    listContainer.innerHTML = listContainer.innerHTML + lhtml;
});
data.forEach((item)=>{
    const ghtml = `
    <div class ="h-60 max-w-[300px] min-w-full flex flex-col pt-3  font-light text-slate-950 rounded-lg justify-between overflow-hidden
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

        <button class="flex  order-5 md:order-5 items-center justify-center bg-[#397c8f] p-2 w-full text-white" id= "viewBtn">View</button>
        
    </div>`;
    girdContainer.innerHTML = girdContainer.innerHTML + ghtml;
})

gridView.addEventListener("click",()=>{
    gridView.classList.remove("bg-slate-300")
    gridView.classList.add("bg-[#3f4d8e]", "text-white", "transition-all", "duration-700");
    listView.classList.remove("bg-[#3f4d8e]", "text-white");
    listView.classList.add("bg-slate-300");
    listContainer.classList.remove("md:flex");
    companyContainer.classList.remove("md:flex");
    girdContainer.classList.remove("md:hidden");
})
listView.addEventListener("click",()=>{
    listView.classList.remove("bg-slate-300")
    listView.classList.add("bg-[#3f4d8e]", "text-white", "transition-all", "duration-700");
    gridView.classList.remove("bg-[#3f4d8e]", "text-white");
    gridView.classList.add("bg-slate-300");
    listContainer.classList.add("md:flex");
    companyContainer.classList.add("md:flex");
    girdContainer.classList.add("md:hidden");
})

