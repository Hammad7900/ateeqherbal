import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'whatsapp',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.contactMethod === 'whatsapp' && formData.phone) {
      const waText = `Hello Ateeq Herbal!\n\nMera Naam: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      const waLink = `https://wa.me/923016215826?text=${encodeURIComponent(waText)}`;
      window.open(waLink, '_blank');
    } else {
      const mailText = `Mera Naam: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      const mailLink = `mailto:unaniherbalmedicine2@gmail.com?subject=New Enquiry from ${formData.name}&body=${encodeURIComponent(mailText)}`;
      window.open(mailLink, '_blank');
    }

    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', contactMethod: 'whatsapp', message: '' }); 
    
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div style={{ maxWidth: "950px", margin: "50px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#2E5C31", fontSize: "36px", marginBottom: "10px" }}>Contact Us</h1>
        <p style={{ color: "#666", fontSize: "16px" }}>
          Aapke sawalat, mashware aur order ki maloomat ke liye hum hamesha hazir hain.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
        
        {/* Left Side: Info */}
        <div style={{ flex: "1", minWidth: "300px", background: "#f4f9f4", padding: "30px", borderRadius: "10px", border: "1px solid #e0eee0" }}>
          <h3 style={{ color: "#2E5C31", fontSize: "22px", marginBottom: "20px", borderBottom: "2px solid #2E5C31", paddingBottom: "10px", display: "inline-block" }}>
            Get In Touch
          </h3>
          
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#333", margin: "0 0 5px 0", fontSize: "16px" }}>📍 Location</h4>
            <p style={{ color: "#666", margin: "0" }}>Multan, Punjab, Pakistan</p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#333", margin: "0 0 5px 0", fontSize: "16px" }}>✉️ Email Us</h4>
            <p style={{ color: "#666", margin: "0" }}>unaniherbalmedicine2@gmail.com</p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#333", margin: "0 0 5px 0", fontSize: "16px" }}>📞 Call / WhatsApp</h4>
            <p style={{ color: "#666", margin: "0" }}>+92 301 6215826</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: "1.5", minWidth: "300px", background: "#fff", padding: "35px", borderRadius: "10px", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", border: "1px solid #eee" }}>
          <h3 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>Send us a Message</h3>
          
          {isSubmitted && (
            <div style={{ background: "#d4edda", color: "#155724", padding: "12px 15px", borderRadius: "5px", marginBottom: "20px", fontWeight: "bold" }}>
              Aapka paigham process ho raha hai. Shukriya!
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "200px" }}>
                <label style={{ display: "block", marginBottom: "5px", color: "#555", fontWeight: "bold", fontSize: "14px" }}>Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: "1", minWidth: "200px" }}>
                <label style={{ display: "block", marginBottom: "5px", color: "#555", fontWeight: "bold", fontSize: "14px" }}>Phone (WhatsApp) *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="03XXXXXXXXX" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#555", fontWeight: "bold", fontSize: "14px" }}>Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="youremail@example.com" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }} />
            </div>

            <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "8px", border: "1px solid #eee" }}>
              <label style={{ display: "block", marginBottom: "10px", color: "#333", fontWeight: "bold", fontSize: "15px" }}>Aap chahte hain hum aapse kaisay raabta karein? *</label>
              <div style={{ display: "flex", gap: "20px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "15px", color: "#555" }}>
                  <input type="radio" name="contactMethod" value="whatsapp" checked={formData.contactMethod === 'whatsapp'} onChange={handleChange} />
                  WhatsApp Message
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "15px", color: "#555" }}>
                  <input type="radio" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={handleChange} />
                  Email
                </label>
              </div>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#555", fontWeight: "bold", fontSize: "14px" }}>Your Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="How can we help you today?" rows="4" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box", resize: "vertical" }}></textarea>
            </div>

            <button type="submit" style={{ padding: "15px", background: "#2E5C31", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;