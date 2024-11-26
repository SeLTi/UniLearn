function tabs(tabsBlockSelector) {
  const tabsNavAll = document.querySelectorAll(
    tabsBlockSelector + " [data-tab]"
  );
  const tabsContentAll = document.querySelectorAll(
    tabsBlockSelector + " [data-tab-content]"
  );

  tabsNavAll.forEach(function (item) {
    item.addEventListener("click", function (event) {
      if (item.classList.contains("active")) return;
      tabsNavAll.forEach((i) => {
        i.classList.remove("active");
      });
      item.classList.add("active");

      tabsContentAll.forEach((k) => {
        k.classList.remove("active");
      });
      const dataTab = event.target.dataset.tab;
      document.querySelector("#" + dataTab).classList.add("active");
    });
  });
  console.log(tabsContentAll);
}

tabs(".tabs");
