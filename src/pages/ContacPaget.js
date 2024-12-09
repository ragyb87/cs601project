import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/g.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.projectType) tempErrors.projectType = "Please select a project type";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        comments: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-page">
      <h2>Have a project idea? Let's talk!</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="projectType">Projects</label>
          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}>
            <option value="" disabled>Select a project type</option>
            <option value="webDevelopment">Web Development</option>
            <option value="mobileApp">Mobile App</option>
            <option value="design">Design</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && <span className="error">{errors.projectType}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comment (Optional)</label>
          <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      
      ) : (
        <div className="success-message">
          <h2>Thank you for your submission!</h2>
          <p>We received your message and will get back to you soon.</p>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
