import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/BookingSchema.js';
import Stripe from 'stripe';

export const getCheckoutSession = async (req, res) => {
    try {
        // Get currently booked doctor
        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        // Create Stripe checkout session
        const unitAmount = doctor.cPrice ? parseFloat(doctor.cPrice) * 100 : 0;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items: [{
                price_data: {
                    currency: 'INR',
                    unit_amount: unitAmount,
                    product_data: {
                        name: doctor.name,
                        description: doctor.bio,
                        images: [doctor.photo]
                    }
                },
                quantity: 1
            }]
        });

        // Create new booking
        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            cPrice: doctor.cPrice,
            session: session.id
        });
        await booking.save();
        res
            .status(200)
            .json({ success: true, message: "Successfully paid", session });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error creating checkout session" });
    }
};

/*import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/BookingSchema.js';
import Stripe from 'stripe';




export const getCheckoutSession = async (req, res) => {
    try {
        // Get currently booked doctor
        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id:req.params.doctorId,
            line_items: [{
                price_data: {
                    currency: 'INR', // Changed currency to rupees
                    unit_amount: doctor.cPrice*100,
                    product_data: {
                        name:doctor.name,
                        description:doctor.bio,
                        images:[doctor.photo]
                    }
                },
                quantity:1
            }]
        });

        // Create new booking
        const booking = new Booking({
            doctor:doctor._id,
            user:user._id,
            cPrice:doctor.cPrice,
            session:session.id
        });
        await booking.save();
        res
        .status(200)
        .json({ success: true, message: "Successfully paid", session });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error creating checkout session" });
    }
};
*/



/*export const getCheckoutSession = async (req, res) => {
    try {
        // Get currently booked doctor
        const doctor = await Doctor.findById(req.params.doctorId);
        
        // Check if doctor exists
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        const user = await User.findById(req.userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items: [{
                price_data: {
                    currency: 'bdt',
                    unit_amount: doctor.cPrice * 100, // Assuming cPrice is in BDT, converting to cents
                    product_data: {
                        name: doctor.name,
                        description: doctor.bio,
                        images: [doctor.photo]
                    }
                },
                quantity: 1
            }]
        });

        // Create new booking
        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            cPrice: doctor.cPrice,
            session: session.id
        });
        await booking.save();
        res.status(200).json({ success: true, message: "Successfully paid", session });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Error creating checkout session" });
    }
};*/

