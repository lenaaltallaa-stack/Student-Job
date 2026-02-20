// ===== الوظائف  =====
const jobs = [
  { title: "Web Assistant", status: "متاح", image: "assets/images/job1.jpg" },
  { title: "Library Helper", status: "مكتمل", image: "assets/images/job2.jpg" },
  { title: "Graphic Designer", status: "متاح", image: "assets/images/job3.jpg" },
  { title: "Data Entry", status: "متاح", image: "assets/images/job4.jpg" }
];

const jobsList = document.getElementById("jobsList");
const jobsTable = document.getElementById("jobsTable");
const searchInput = document.getElementById("searchInput");

// ===== عرض الوظائف (Cards + Table) =====
function renderJobs(list) {
  jobsList.innerHTML = "";
  jobsTable.innerHTML = "";

  list.forEach(function(job) {
    const color = job.status === "متاح" ? "success" : "danger";

    // Cards
    jobsList.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card p-3">
          <img src="${job.image}" class="job-img w-100 rounded mb-2" alt="job image">
          <h5>${job.title}</h5>
          <p class="text-${color} fw-bold">${job.status}</p>
        </div>
      </div>
    `;

    // Table
    jobsTable.innerHTML += `
      <tr>
        <td>${job.title}</td>
        <td class="fw-bold text-${color}">${job.status}</td>
      </tr>
    `;
  });

  // jQuery Animation
  $("#jobsList").hide().fadeIn(500);
}

// أول عرض
renderJobs(jobs);

// ===== Live Search =====
searchInput.addEventListener("keyup", function() {
  const keyword = searchInput.value.toLowerCase();

  const filtered = jobs.filter(function(job) {
    return job.title.toLowerCase().includes(keyword);
  });

  renderJobs(filtered);
});

// ===== Form Validation =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("الرجاء تعبئة جميع الحقول");
  } else {
    alert("تم الإرسال بنجاح ");
    this.reset();
  }
});