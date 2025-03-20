import "./Appointment.css";
import { useState, useRef } from "react";
import axios from "axios";
import { addDoc, collection, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import emailjs from "emailjs-com"; 

const availableTimeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

const BookAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const fileInputRef = useRef(null);

  // Fetch booked time slots for the selected date
  const fetchBookedSlots = async (date) => {
    const selectedDate = new Date(date);
    selectedDate.setHours(12, 0, 0, 0); // Prevent timezone shift
    const formattedDate = selectedDate.toISOString().split("T")[0];

    const q = query(collection(db, "appointments"), where("appointmentDate", "==", formattedDate));
    const querySnapshot = await getDocs(q);
    const booked = querySnapshot.docs.map(doc => doc.data().timeSlot);
    setBookedSlots(booked);
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setAppointmentDate(date);
    fetchBookedSlots(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !location || !receipt || !appointmentDate || !timeSlot) {
      alert("Please fill in all fields and upload a receipt.");
      return;
    }

    if (bookedSlots.includes(timeSlot)) {
      alert("This time slot is already booked. Please choose another.");
      return;
    }

    try {
      // Upload receipt to Cloudinary
      const formData = new FormData();
      formData.append("file", receipt);
      formData.append("upload_preset", "haircut_upload");
      formData.append("folder", "appointments");
      formData.append("resource_type", "auto");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dpsrsij99/image/upload`,
        formData
      );

      const receiptUrl = response.data.secure_url;

      // Fix Date Offset Issue
      const selectedDate = new Date(appointmentDate);
      selectedDate.setHours(12, 0, 0, 0);
      const formattedDate = selectedDate.toISOString().split("T")[0];

      // Save appointment details in Firestore
      await addDoc(collection(db, "appointments"), {
        name,
        email,
        phone,
        location,
        appointmentDate: formattedDate,
        timeSlot,
        receiptUrl,
        createdAt: serverTimestamp(),
      });

      // Send email notification to client
      const emailParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_location: location,
        appointment_date: formattedDate,
        time_slot: timeSlot,
        receipt_url: receiptUrl,
      };

      await emailjs.send(
        "service_5x3fslf", 
        "template_n0hnp7y",
        emailParams,
        "2dcl4i1_4cB0k2KfX" 
      );

      alert("Appointment booked successfully! A confirmation email has been sent.");

      // Reset form fields
      setName("");
      setEmail("");
      setPhone(0);
      setLocation("");
      setAppointmentDate("");
      setTimeSlot("");
      setReceipt(null);
      setBookedSlots([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="appt-form-container p-5 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="w-50 border p-4 grey-bg rounded" id="appt-form">
        
        <label htmlFor="user-name" className="text-white">Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
          autoComplete="no"
          id="user-name"
        />

        <label htmlFor="user-email" className="text-white">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
          autoComplete="no"
          id="user-email"
        />
        <label htmlFor="user-phone" className="text-white">Phone:</label>
        <input
          type="number"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control mb-3"
          autoComplete="no"
          id="user-phone"
        />

        <label htmlFor="user-location" className="text-white">Location:</label>
        <input
          type="text"
          placeholder="Enter Location/Address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control mb-3"
          autoComplete="no"
          id="user-location"
        />

        <label htmlFor="appointment-date" className="text-white">Appointment Date:</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={handleDateChange}
          className="form-control mb-3"
          id="appointment-date"
        />

        <label htmlFor="time-slot" className="text-white">Time Slot:</label>
        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="form-control mb-3"
          id="time-slot"
        >
          <option value="">Select a time slot</option>
          {availableTimeSlots.map((slot) => (
            <option key={slot} value={slot} disabled={bookedSlots.includes(slot)}>
              {slot} {bookedSlots.includes(slot) ? "(Booked)" : ""}
            </option>
          ))}
        </select>

        <label htmlFor="receipt" className="text-white">Payment receipt</label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setReceipt(e.target.files[0])}
          className="form-control mb-3"
          id="receipt"
        />

        <button type="submit" className="btn bg-black text-white">Submit</button>
      </form>
    </div>
  );
};

export default BookAppointment;
