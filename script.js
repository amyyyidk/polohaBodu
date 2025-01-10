document.getElementById('pointForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const result = document.getElementById('result');

    if (Math.abs(x) <= 25 && Math.abs(y) <= 25) {
        result.textContent = 'The point lies inside the square or on its boundary.';
        result.className = 'inside';
    } else {
        result.textContent = 'The point lies outside the square.';
        result.className = 'outside';
    }
});
