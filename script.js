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

function showContent(sectionId) {
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(section => section.classList.remove('active'));  


  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');  

}