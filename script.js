
const levelsDisplay = document.querySelector('.levelmain')
const levels = document.querySelector('.levels')
const arrowdown = document.querySelector('.arrowdown')

levelsDisplay.addEventListener('mouseover', function() {
    levels.style.display = 'block';
    // arrowdown.transform.rotate = '180'
})

levelsDisplay.addEventListener('mouseout', function() {
    levels.style.display = 'none';
    // arrowdown.transform.rotate = '180'
})