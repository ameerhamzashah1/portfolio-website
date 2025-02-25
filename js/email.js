document.addEventListener("DOMContentLoaded", function () {
    console.log("Email code file is loaded!");
  
    // 1) Initialize EmailJS with your actual Public Key from EmailJS Dashboard
    emailjs.init("bVVv6H27oJio_Inao"); // <-- Replace with YOUR real Public Key
  
    // 2) Grab the form
    const form = document.getElementById("contact-form");
    if (!form) {
      console.error("❌ Error: Contact form not found!");
      return;
    }
  
    // 3) Add 'submit' event listener
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      // 4) Get input values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // 5) Validate
      if (!name || !email || !message) {
        alert("⚠ Please fill all fields.");
        return;
      }
  
      // 6) Prepare params for EmailJS (must match placeholders in your template)
    //   const params = { name, email, message };
      const params = { from_name: name, from_email: email, message };

  



      // 7) Replace these with the actual IDs from your EmailJS Dashboard
      //    - 'service_g41r3ln' is your Email Service ID
      //    - 'template_abcdef' is your Email Template ID
      //      (NOT the same as the service ID!)
      const serviceID = "service_g41r3ln";   // e.g. "service_123abcd"
      const templateID = "template_abcdef";  // e.g. "template_xyz123"
  
      try {
        // 8) Send the email
        await emailjs.send(serviceID, templateID, params);
        alert("✅ Message sent successfully!");
        form.reset();
      } catch (error) {
        alert("❌ Failed to send message. Try again.");
        console.error("EmailJS Error:", error);
      }
    });
  });
  Name: {{name}}
Email: {{email}}
Message: {{message}}
