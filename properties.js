window.onload = function () {
    const propertyList = document.getElementById('property-List');
    let properties = JSON.parse(localStorage.getItem('properties')) || [];

    if (properties.length === 0) {
        propertyList.innerHTML = "<p>No properties found.</p>";
        return;
    }

    propertyList.innerHTML = properties.map(property => `
        <div class="property-card">
            <h3>${property.title}</h3>
            <p><b>Location:</b> ${property.location}</p>
            <p><b>Price:</b> ${property.price}</p>
            <p><b>Type:</b> ${property.type}</p>
            <p>${property.description}</p>
        </div>
    `).join('');
};