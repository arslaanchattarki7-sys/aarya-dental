function bookAppointment() {
    const box = document.getElementById("appointmentBox");

    box.style.display = "block";

    box.scrollIntoView({
        behavior: "smooth"
    });
}

function submitAppointment() {

    const name = document.getElementById("patientName").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (!name || !phone || !service || !date) {
        alert("Please fill all the details.");
        return;
    }

    document.getElementById("appointmentMessage").innerText =
        "Appointment request received!";

}