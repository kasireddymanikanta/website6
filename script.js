$(document).ready(function () {
    let experienceCount = 1;

    // Add more experience fields dynamically
    $('#addExperience').click(function () {
        experienceCount++;
        const experienceTemplate = `
            <div class="form-group">
                <label for="experience${experienceCount}">Company Name</label>
                <input type="text" class="form-control" id="experience${experienceCount}">
            </div>
            <div class="form-group">
                <label for="role${experienceCount}">Role</label>
                <input type="text" class="form-control" id="role${experienceCount}">
            </div>
            <div class="form-group">
                <label for="duration${experienceCount}">Duration (Years)</label>
                <input type="number" class="form-control" id="duration${experienceCount}">
            </div>`;
        $('#experienceSection').append(experienceTemplate);
    });

    // Form submission handler (front-end validation can be expanded here)
    $('#applicationForm').on('submit', function (event) {
        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.classList.add('was-validated');
    });
});

