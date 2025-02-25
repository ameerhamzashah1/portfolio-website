document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("xVjG6htUOIBXps39Z"); // Replace with your actual EmailJS public key

    const form = document.getElementById("contact-form") as HTMLFormElement;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLTextAreaElement).value;

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        const params = { name, email, message };
        const serviceID = "service_t0yp14t";
        const templateID = "template_2pu362f";

        try {
            await emailjs.send(serviceID, templateID, params);
            alert("Message sent successfully!");
            form.reset();
        } catch (error) {
            alert("Failed to send message. Try again.");
            console.error("EmailJS Error:", error);
        }
    });
});

