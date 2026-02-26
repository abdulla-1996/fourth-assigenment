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

// Store current active tab
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
// step.5
// step.6
// step.7
// step.8

