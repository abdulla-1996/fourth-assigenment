// step.1
// Dashboard section elements
const dashboard = {
  total: document.getElementById("totalCount"),
  interview: document.getElementById("interviewCount"),
  rejected: document.getElementById("rejectedCount")
};

// Tabs section elements
const tabs = {
  all: document.getElementById("tabAll"),
  interview: document.getElementById("tabInterview"),
  rejected: document.getElementById("tabRejected")
};

// Job Available section elements
const jobSection = {
  sectionCount: document.getElementById("sectionCount"),
  container: document.getElementById("jobsContainer"),
  emptyState: document.getElementById("noJobsContainer")
};

// step.2
// Job data
const jobs = [
  { id: 1, status: "all" },
  { id: 2, status: "all" },
  { id: 3, status: "all" },
  { id: 4, status: "all" },
  { id: 5, status: "all" },
  { id: 6, status: "all" },
  { id: 7, status: "all" },
  { id: 8, status: "all" }
];

let currentTab = "all";

// step.3 update dashboard counting
function updateDashboard() {

  let interviewCount = 0;
  let rejectedCount = 0;

  // Loop through jobs array
  for (let i = 0; i < jobs.length; i++) {

    if (jobs[i].status === "interview") {
      interviewCount++;
    }
    else if (jobs[i].status === "rejected") {
      rejectedCount++;
    }
  }

  // Update dashboard UI
  dashboard.total.innerText = jobs.length;
  dashboard.interview.innerText = interviewCount;
  dashboard.rejected.innerText = rejectedCount;
}

// step.4
// add tab style when active
function setActiveTab(activeTab) {

  const allTabs = [tabs.all, tabs.interview, tabs.rejected];

  // Remove active style from all tabs
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove("bg-primary", "text-white");
    allTabs[i].classList.add("bg-white", "text-gray-500");
  }

  // Add active style to clicked tab
  activeTab.classList.remove("bg-white", "text-gray-500");
  activeTab.classList.add("bg-primary", "text-white");
}
// step.5
// filtering cards 
function filterCards(type) {

  const cards = document.querySelectorAll(".job-card");

  let selectedCount = 0;

  // Count selected jobs (interview and rejected)
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "interview" || jobs[i].status === "rejected") {
      selectedCount++;
    }
  }

  // Show or Hide cards
  for (let i = 0; i < cards.length; i++) {

    const card = cards[i];
    const id = parseInt(card.id.replace("card-", ""));
    const job = jobs.find(j => j.id === id);

    if (type === "all") {
      card.style.display = "block";
    }
    else if (job && job.status === type) {
      card.style.display = "block";
    }
    else {
      card.style.display = "none";
    }
  }

  // Section count logic
  if (selectedCount === 0) {
    jobSection.sectionCount.innerText = jobs.length + " Jobs";
  } else {
    jobSection.sectionCount.innerText =
      selectedCount + " of " + jobs.length + " Jobs";
  }

  // Show empty state if no visible cards
  let visibleCards = 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].style.display !== "none") {
      visibleCards++;
    }
  }

  if (visibleCards === 0) {
    jobSection.emptyState.classList.remove("hidden");
  } else {
    jobSection.emptyState.classList.add("hidden");
  }
}

// step.6
// click events
tabs.all.addEventListener("click", function () {
  currentTab = "all";
  setActiveTab(tabs.all);
  filterCards("all");
});

tabs.interview.addEventListener("click", function () {
  currentTab = "interview";
  setActiveTab(tabs.interview);
  filterCards("interview");
});

tabs.rejected.addEventListener("click", function () {
  currentTab = "rejected";
  setActiveTab(tabs.rejected);
  filterCards("rejected");
});

// step.7
// delegation 
jobSection.container.addEventListener("click", function (e) {

  const card = e.target.closest(".job-card");
  if (!card) return;

  const id = parseInt(card.id.replace("card-", ""));
  const job = jobs.find(j => j.id === id);

  // Interview button
  if (e.target.classList.contains("interview-btn")) {

    job.status = job.status === "interview" ? "all" : "interview";

    card.querySelector(".status-badge").innerText =
      job.status.toUpperCase();

    updateDashboard();
    filterCards(currentTab);
  }

  // Rejected button
  else if (e.target.classList.contains("rejected-btn")) {

    job.status = job.status === "rejected" ? "all" : "rejected";

    card.querySelector(".status-badge").innerText =
      job.status.toUpperCase();

    updateDashboard();
    filterCards(currentTab);
  }

  // Delete button
  else if (e.target.closest(".delete-btn")) {

    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) {
      jobs.splice(index, 1);
    }

    card.remove();

    updateDashboard();
    filterCards(currentTab);
  }

});


// final step
setActiveTab(tabs.all);
updateDashboard();
filterCards("all");


