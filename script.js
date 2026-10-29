/* NEPSE-AI-Intelligence hub — filter + search over the static card grid.
   Cards live in index.html (data-account / data-layer attributes);
   no data is duplicated here. Without JS everything is simply visible. */

(function () {
  "use strict";

  var search = document.getElementById("search");
  var chips = Array.prototype.slice.call(document.querySelectorAll("#chips .chip-btn"));
  var cards = Array.prototype.slice.call(document.querySelectorAll("#cards .card"));
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");
  var TOTAL = cards.length;

  var state = { layer: "all", account: "all", q: "" };

  chips.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var kind = btn.dataset.kind;
      state[kind] = btn.dataset.filter;
      // keep only one active choice per chip group
      chips.forEach(function (b) {
        if (b.dataset.kind === kind) {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        }
      });
      apply();
    });
  });

  if (search) {
    search.addEventListener("input", function () {
      state.q = search.value.trim().toLowerCase();
      apply();
    });
  }

  function apply() {
    var shown = 0;
    cards.forEach(function (card) {
      var okAccount = state.account === "all" || card.dataset.account === state.account;
      var okLayer = state.layer === "all" || card.dataset.layer === state.layer;
      var okQuery = !state.q || card.textContent.toLowerCase().indexOf(state.q) !== -1;
      var visible = okAccount && okLayer && okQuery;
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    if (count) count.textContent = "Showing " + shown + " of " + TOTAL + " repositories";
    if (empty) empty.hidden = shown > 0;
  }

  apply();
})();
