const campaigns = [
  { title: "Nexa Daily Bonus", remaining: 1258, limit: 5000, ends: "Ends today", tag: "Technology" },
  { title: "Career Toolkit Drop", remaining: 816, limit: 2000, ends: "Ends in 4h", tag: "Career" },
  { title: "Weekend Smart Shop", remaining: 3240, limit: 7500, ends: "Ends tomorrow", tag: "Shopping" }
];

const list = document.querySelector("#campaign-list");
list.innerHTML = campaigns.map((campaign, index) => {
  const claimedPercent = Math.round((1 - campaign.remaining / campaign.limit) * 100);
  return `<article class="campaign-card"><div class="campaign-meta"><span>${campaign.tag}</span><span>${campaign.ends}</span></div><h3>${campaign.title}</h3><div class="capacity"><b style="width:${claimedPercent}%"></b></div><div class="campaign-meta"><span>${campaign.remaining.toLocaleString()} claims remaining</span><span>${claimedPercent}% claimed</span></div><footer><span>Protected campaign</span><button data-campaign="${index}">Unlock <span aria-hidden="true">→</span></button></footer></article>`;
}).join("");

const dialog = document.querySelector("#campaign-dialog");
const title = document.querySelector("#dialog-title");
const copy = document.querySelector("#dialog-copy");
document.querySelectorAll("[data-campaign]").forEach((button) => button.addEventListener("click", () => {
  const campaign = campaigns[Number(button.dataset.campaign)];
  title.textContent = campaign.title;
  copy.textContent = `${campaign.remaining.toLocaleString()} claims remain. A protected campaign URL would start a secure server-side session.`;
  dialog.showModal();
}));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelector("#preview-button").addEventListener("click", () => {
  document.querySelector(".dialog-note").textContent = "Firebase Functions are required before a real unlock flow can begin. No code is exposed in this preview.";
});
document.querySelector("#year").textContent = new Date().getFullYear();

