// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('scheduledDate').min = today;
document.getElementById('pickupDate').min = today;

// Load type toggle functionality
const fullLoadRadio = document.getElementById('fullLoad');
const partLoadRadio = document.getElementById('partLoad');
const fullLoadFields = document.getElementById('fullLoadFields');
const partLoadFields = document.getElementById('partLoadFields');

function toggleLoadType() {
    if (fullLoadRadio.checked) {
        fullLoadFields.style.display = 'grid';
        partLoadFields.style.display = 'none';
        // Enable full load fields
        fullLoadFields.querySelectorAll('input, select').forEach(field => {
            if (field.hasAttribute('required') || field.id === 'sourceCity' || field.id === 'destinationCity' || field.id === 'material' || field.id === 'weight' || field.id === 'truckType' || field.id === 'numTrucks' || field.id === 'scheduledDate') {
                field.required = true;
            }
        });
        // Disable part load fields
        partLoadFields.querySelectorAll('input, select').forEach(field => {
            field.required = false;
        });
    } else {
        fullLoadFields.style.display = 'none';
        partLoadFields.style.display = 'grid';
        // Enable part load fields
        partLoadFields.querySelectorAll('input, select').forEach(field => {
            if (field.id === 'sourceCity2' || field.id === 'destinationCity2' || field.id === 'pickupType' || field.id === 'material2' || field.id === 'weight2' || field.id === 'pickupDate') {
                field.required = true;
            }
        });
        // Disable full load fields
        fullLoadFields.querySelectorAll('input, select').forEach(field => {
            field.required = false;
        });
    }
}

fullLoadRadio.addEventListener('change', toggleLoadType);
partLoadRadio.addEventListener('change', toggleLoadType);

// Initialize
toggleLoadType();

// Form submission handler
document.getElementById('loadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Determine which fields to validate based on load type
    let requiredFields = [];
    let alertData = '';

    if (data.loadType === 'full') {
        requiredFields = ['sourceCity', 'destinationCity', 'material', 'weight', 'truckType', 'numTrucks', 'scheduledDate'];
        alertData = 'Load Type: Full Load\n' +
            'From: ' + data.sourceCity + '\n' +
            'To: ' + data.destinationCity + '\n' +
            'Material: ' + data.material + '\n' +
            'Weight: ' + data.weight + '\n' +
            'Truck Type: ' + data.truckType + '\n' +
            'Number of Trucks: ' + data.numTrucks + '\n' +
            'Scheduled Date: ' + data.scheduledDate;
    } else {
        requiredFields = ['sourceCity2', 'destinationCity2', 'pickupType', 'material2', 'weight2', 'pickupDate'];
        alertData = 'Load Type: Part Load\n' +
            'From: ' + data.sourceCity2 + '\n' +
            'To: ' + data.destinationCity2 + '\n' +
            'Source Pin Code: ' + (data.sourcePinCode || 'Not provided') + '\n' +
            'Destination Pin Code: ' + (data.destinationPinCode || 'Not provided') + '\n' +
            'Pickup Type: ' + data.pickupType + '\n' +
            'Material: ' + data.material2 + '\n' +
            'Weight: ' + data.weight2 + '\n' +
            'Pickup Date: ' + data.pickupDate;
    }

    // Basic validation
    let isValid = true;

    requiredFields.forEach(field => {
        const element = document.getElementById(field);
        if (!data[field] || data[field] === '') {
            element.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            element.style.borderColor = '';
        }
    });

    if (isValid) {
        // Simulate form submission
        alert('Load details submitted successfully!\n\n' + alertData);

        // Reset form
        this.reset();
        document.getElementById('fullLoad').checked = true;
        toggleLoadType();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Pin code validation
const pinCodeInputs = document.querySelectorAll('#sourcePinCode, #destinationPinCode');
pinCodeInputs.forEach(input => {
    input.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, ''); // Only allow digits
        if (this.value.length > 6) {
            this.value = this.value.slice(0, 6);
        }
    });
});

// Real-time validation
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('blur', function () {
        if (this.required && this.value.trim() === '') {
            this.style.borderColor = '#ff4444';
        } else {
            this.style.borderColor = '';
        }
    });
});

// Auto-capitalize city names
const cityInputs = document.querySelectorAll('#sourceCity, #destinationCity, #sourceCity2, #destinationCity2');
cityInputs.forEach(input => {
    input.addEventListener('input', function () {
        this.value = this.value.replace(/\b\w/g, l => l.toUpperCase());
    });
});




// this is the recent load /Booking 

// Add click handlers for buttons
document.addEventListener('DOMContentLoaded', function () {
    const contactBtns = document.querySelectorAll('.contact-btn');
    const quoteBtns = document.querySelectorAll('.quote-btn');
    const viewAllBtn = document.querySelector('.view-all-btn');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            alert('View Contact functionality would be implemented here');
        });
    });

    quoteBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Quote Now functionality would be implemented here');
        });
    });

    viewAllBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('View all load posts functionality would be implemented here');
    });
});