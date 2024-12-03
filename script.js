function toggleMenu() {
  var menuList = document.getElementById("menuList");
  menuList.classList.toggle("active");
}

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.boxShadow = '2px 2px 10px rgba(255, 255, 255, 0.5)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.boxShadow = 'none';
    });
  });

const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, AUD: 1.35, CAD: 1.25 },
    EUR: { USD: 1.18, GBP: 0.88, AUD: 1.59, CAD: 1.47 },
    GBP: { USD: 1.33, EUR: 1.14, AUD: 1.81, CAD: 1.67 },
    AUD: { USD: 0.74, EUR: 0.63, GBP: 0.55, CAD: 0.92 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, AUD: 1.09 }
};

function euroConvert () {
  alert("havent developed yet cuz the coder is sleep deprived")
}

function showContent(sectionId) {
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(section => section.classList.remove('active'));  


  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');  

}