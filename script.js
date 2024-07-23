document.getElementById('carpoolForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const startLocation = document.getElementById('startLocation').value;
    const destination = document.getElementById('destination').value;
    
    const passenger = { name, number, startLocation, destination };
    
    let passengers = localStorage.getItem('passengers');
    passengers = passengers ? JSON.parse(passengers) : [];
    passengers.push(passenger);
    
    localStorage.setItem('passengers', JSON.stringify(passengers));
    
    window.location.href = 'display.html';
});
