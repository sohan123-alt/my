document.getElementById('property-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    let properties = JSON.parse(localStorage.getItem('properties')) || [];

    properties.push({
        title,
        location,
        price,
        type,
        description
    });

    localStorage.setItem('properties', JSON.stringify(properties));
    document.getElementById('message').textContent = "Property added successfully!";
    document.getElementById('property-form').reset();
});