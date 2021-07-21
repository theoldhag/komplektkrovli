document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.tabs-btn').forEach(function (tabContent) {
          tabContent.classList.remove('tabs-btn-active')
        })
        event.currentTarget.classList.add('tabs-btn-active')
      })
    })
  })
