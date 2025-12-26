import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation } from "react-router-dom";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";

/* ---------------- VALIDATION SCHEMA ---------------- */
const schema = yup.object({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
    email: yup
        .string()
        .required("Email is required")
        .email("Enter a valid email address"),
    message: yup
        .string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
});

type FormData = yup.InferType<typeof schema>;

const Contact = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const location = useLocation();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    /* ---------------- PREFILL EMAIL FROM FOOTER ---------------- */
    useEffect(() => {
        if (location.state?.email) {
            setValue("email", location.state.email, {
                shouldValidate: true,
                shouldDirty: true,
            });
        }
    }, [location.state, setValue]);

    /* ---------------- SUBMIT HANDLER ---------------- */
    const onSubmit = (data: FormData) => {
        const subject = encodeURIComponent("Security Service Inquiry");
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );

        window.open(
            `mailto:info@rishirajsecurityforce.in?subject=${subject}&body=${body}`,
            "_self"
        );

        setIsSuccess(true);
        reset();

        // auto-hide success overlay
        setTimeout(() => setIsSuccess(false), 4000);
    };

    return (
        <section className="relative bg-gray-900">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e')",
                }}
            />

            <div className="relative py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT CONTENT */}
                        <Reveal>
                            <div className="text-white">
                                <h1 className="text-4xl font-bold">Contact Us</h1>
                                <p className="mt-4 text-gray-200 max-w-md">
                                    Get in touch for professional security services in Boisar.
                                </p>
                            </div>
                        </Reveal>

                        {/* FORM */}
                        <Reveal delay={150}>
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">

                                {/* SUCCESS OVERLAY */}
                                {isSuccess && (
                                    <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 flex items-center justify-center animate-successFade z-10">
                                        <div className="text-center">
                                            <div className="text-green-500 text-5xl mb-3">✔</div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                Message Ready to Send
                                            </h3>
                                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                                Your email app has been opened successfully.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                    {/* NAME */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Your First Name
                                        </label>
                                        <input
                                            {...register("name")}
                                            className={`mt-2 w-full px-4 py-3 rounded-md border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                        ${errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300 dark:border-gray-700"
                                                }
                      `}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* EMAIL */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Your Email Address*
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className={`mt-2 w-full px-4 py-3 rounded-md border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                        ${errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300 dark:border-gray-700"
                                                }
                      `}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* MESSAGE */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Your Message*
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            className={`mt-2 w-full px-4 py-3 rounded-md border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                        ${errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-300 dark:border-gray-700"
                                                }
                      `}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition"
                                    >
                                        Submit Your Inquiry
                                    </button>
                                </form>
                            </div>
                        </Reveal>

                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Contact;
