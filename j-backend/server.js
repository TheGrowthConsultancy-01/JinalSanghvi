// const express = require('express');
// const cors = require('cors');
// const { PrismaClient } = require('@prisma/client');
// const { Resend } = require('resend');
// require('dotenv').config();

// const app = express();
// const prisma = new PrismaClient();
// const resend = new Resend(process.env.RESEND_API_KEY);

// app.use(express.json());
// app.use(cors());

// // Test Route / Health Check
// app.get('/', (req, res) => {
//   res.json({ message: 'Jinal Sanghvi Backend is running successfully!' });
// });

// // Booking / Form Submission Endpoint
// app.post('/api/bookings', async (req, res) => {
//   try {
//     const { fullName, phone, email, service, preferredDate, preferredTime, message } = req.body;

//     // 1. Validation
//     if (!fullName || !phone || !service || !preferredDate || !preferredTime) {
//       return res.status(400).json({ error: 'Please fill in all required fields.' });
//     }

//     // 2. Save to MySQL via Prisma
//     const newBooking = await prisma.booking.create({
//       data: {
//         fullName,
//         phone,
//         email: email || null,
//         service,
//         preferredDate,
//         preferredTime,
//         message: message || null,
//       },
//     });

//     // 3. Send Notifications via Resend to Admin Email
//     const ADMIN_EMAILS = ['tgc.henil@gmail.com'];
//     const FROM_EMAIL = 'Jinal Sanghvi <onboarding@resend.dev>'; // Testing ke liye resend default domain

//     try {
//       await resend.emails.send({
//         from: FROM_EMAIL,
//         to: ADMIN_EMAILS,
//         subject: `🚨 New Lead/Booking: ${service} - ${fullName}`,
//         html: `
//           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
//             <div style="background-color: #111; padding: 20px; text-align: center;">
//               <h2 style="color: #fff; margin: 0;">New Consultation / Booking</h2>
//             </div>
//             <div style="padding: 24px; background-color: #f9f9f9;">
//               <p style="font-size: 16px; color: #333;">You have received a new submission from your website:</p>
//               <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
//                 <tr>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 35%;">Service:</td>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Full Name:</td>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullName}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredDate}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Time:</td>
//                   <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredTime}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
//                   <td style="padding: 10px;">${message || 'N/A'}</td>
//                 </tr>
//               </table>
//             </div>
//             <div style="background-color: #eee; padding: 12px; text-align: center; font-size: 12px; color: #666;">
//               Jinal Sanghvi Automated Notification System
//             </div>
//           </div>
//         `,
//       });
//     } catch (emailError) {
//       console.error('Email sending failed, but booking saved:', emailError);
//     }

//     return res.status(201).json({
//       success: true,
//       message: 'Booking saved and notifications dispatched successfully!',
//       data: newBooking,
//     });

//   } catch (error) {
//     console.error('Booking error:', error);
//     return res.status(500).json({ error: 'Internal server error while processing booking.' });
//   }
// });

// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(cors());

// Test Route / Health Check
app.get('/', (req, res) => {
  res.json({ message: 'Jinal Sanghvi Backend is running successfully!' });
});

// Booking / Form Submission Endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const { fullName, phone, email, service, preferredDate, preferredTime, message } = req.body;

    // 1. Validation
    if (!fullName || !phone || !service || !preferredDate || !preferredTime) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    // 2. Save to MySQL via Prisma
    const newBooking = await prisma.booking.create({
      data: {
        fullName,
        phone,
        email: email || null,
        service,
        preferredDate,
        preferredTime,
        message: message || null,
      },
    });

    // 3. Send Notifications via Resend
    const ADMIN_EMAIL = 'tgc.henil@gmail.com';
    // Yahan apna verified domain use karein (jaise info@jinalsanghavi.com ya support@jinalsanghavi.com)
    const FROM_EMAIL = 'Jinal Sanghvi <support@jinalsanghavi.com>'; 

    try {
      // A. Admin ko Lead Notification Mail
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `🚨 New Lead/Booking: ${service} - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #111; padding: 20px; text-align: center;">
              <h2 style="color: #fff; margin: 0;">New Consultation / Booking</h2>
            </div>
            <div style="padding: 24px; background-color: #f9f9f9;">
              <p style="font-size: 16px; color: #333;">You have received a new submission from your website:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 35%;">Service:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Full Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Time:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredTime}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                  <td style="padding: 10px;">${message || 'N/A'}</td>
                </tr>
              </table>
            </div>
            <div style="background-color: #eee; padding: 12px; text-align: center; font-size: 12px; color: #666;">
              Jinal Sanghvi Automated Notification System
            </div>
          </div>
        `,
      });

      // B. User ko Confirmation Mail (Agar user ne email bhara hai toh)
      if (email) {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: [email],
          subject: `Booking Request Received - Jinal Sanghvi`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #763CD2; padding: 20px; text-align: center;">
                <h2 style="color: #fff; margin: 0;">Booking Request Received!</h2>
              </div>
              <div style="padding: 24px; background-color: #f9f9f9;">
                <p style="font-size: 16px; color: #333;">Hello <b>${fullName}</b>,</p>
                <p style="font-size: 14px; color: #555;">Thank you for reaching out. We have received your booking request for <b>${service}</b>. Here are the details you submitted:</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 35%;">Service:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Time:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredTime}</td>
                  </tr>
                </table>
                <p style="font-size: 14px; color: #555; margin-top: 20px;">We will get in touch with you shortly to confirm your appointment.</p>
              </div>
              <div style="background-color: #eee; padding: 12px; text-align: center; font-size: 12px; color: #666;">
                Jinal Sanghvi Healing & Wellness
              </div>
            </div>
          `,
        });
      }

    } catch (emailError) {
      console.error('Email sending failed, but booking saved:', emailError);
    }

    return res.status(201).json({
      success: true,
      message: 'Booking saved and notifications dispatched successfully!',
      data: newBooking,
    });

  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ error: 'Internal server error while processing booking.' });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});