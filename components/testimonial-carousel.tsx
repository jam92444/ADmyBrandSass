"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlassCard } from "./glass-card";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Marketing Director",
		company: "TechCorp",
		image: "/placeholder.svg?height=80&width=80",
		rating: 5,
		text: "ADmyBRAND AI has revolutionized our marketing campaigns. We've seen a 300% increase in engagement and our ROI has never been better.",
		companyLogo: "/placeholder-logo.svg",
	},
	{
		name: "Michael Chen",
		role: "CEO",
		company: "StartupXYZ",
		image: "/placeholder.svg?height=80&width=80",
		rating: 5,
		text: "The AI-powered content generation is incredible. What used to take our team days now takes minutes, and the quality is consistently excellent.",
		companyLogo: "/placeholder-logo.svg",
	},
	{
		name: "Emily Rodriguez",
		role: "Growth Manager",
		company: "E-commerce Plus",
		image: "/placeholder.svg?height=80&width=80",
		rating: 5,
		text: "The smart audience targeting feature helped us reach customers we never knew existed. Our conversion rates improved by 250%.",
		companyLogo: "/placeholder-logo.svg",
	},
	{
		name: "David Thompson",
		role: "Brand Manager",
		company: "Fashion Forward",
		image: "/placeholder.svg?height=80&width=80",
		rating: 5,
		text: "Brand safety and compliance features give us peace of mind. We can scale our campaigns without worrying about brand reputation.",
		companyLogo: "/placeholder-logo.svg",
	},
];

export function TestimonialCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextTestimonial = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	}, []);

	const prevTestimonial = useCallback(() => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
		);
	}, []);

	useEffect(() => {
		if (!isAutoPlaying) return;
		const timer = setInterval(nextTestimonial, 6000);
		return () => clearInterval(timer);
	}, [isAutoPlaying, nextTestimonial]);

	return (
		<div className="relative max-w-5xl mx-auto px-4 sm:px-6">
			{/* Decorative Elements */}
			<motion.div
				className="absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 text-blue-500/20"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Quote className="w-full h-full" strokeWidth={1} />
			</motion.div>

			<GlassCard className="p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
				{/* Background Gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
						className="relative z-10"
					>
						<div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-12">
							{/* Profile Section */}
							<div className="flex flex-col items-center space-y-3 sm:space-y-4 w-full md:w-1/3">
								<Avatar className="w-16 h-16 sm:w-20 sm:h-20 ring-4 ring-white/10 shadow-xl">
									<AvatarImage src={testimonials[currentIndex].image} />
									<AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-lg sm:text-xl">
										{testimonials[currentIndex].name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>

								<div className="text-center md:text-left w-full">
									<h3 className="text-white font-semibold text-lg sm:text-xl">
										{testimonials[currentIndex].name}
									</h3>
									<p className="text-gray-300 font-medium text-sm sm:text-base">
										{testimonials[currentIndex].role}
									</p>
									<p className="text-gray-400 text-sm sm:text-base">
										{testimonials[currentIndex].company}
									</p>
								</div>

								<div className="flex gap-1">
									{[...Array(testimonials[currentIndex].rating)].map(
										(_, i) => (
											<Star
												key={i}
												className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
											/>
										)
									)}
								</div>
							</div>

							{/* Testimonial Content */}
							<div className="md:w-2/3">
								<blockquote className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed italic text-center md:text-left">
									"{testimonials[currentIndex].text}"
								</blockquote>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</GlassCard>

			{/* Enhanced Navigation - Mobile Friendly */}
			<div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
				<div className="flex items-center justify-between w-full sm:w-auto gap-4">
					<Button
						variant="outline"
						size="default"
						onClick={() => {
							prevTestimonial();
							setIsAutoPlaying(false);
						}}
						className="border-white/20 text-white hover:bg-white/10 bg-transparent/20 backdrop-blur-sm px-3 sm:px-4"
					>
						<ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
						<span className="hidden sm:inline">Previous</span>
					</Button>

					<Button
						variant="outline"
						size="default"
						onClick={() => {
							nextTestimonial();
							setIsAutoPlaying(false);
						}}
						className="border-white/20 text-white hover:bg-white/10 bg-transparent/20 backdrop-blur-sm px-3 sm:px-4"
					>
						<span className="hidden sm:inline">Next</span>
						<ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
					</Button>
				</div>

				<div className="flex items-center justify-center space-x-2 sm:space-x-3">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => {
								setCurrentIndex(index);
								setIsAutoPlaying(false);
							}}
							className={`group relative w-2 h-2 sm:w-3 sm:h-3 transition-all duration-300 ${
								index === currentIndex ? "scale-125" : "hover:scale-110"
							}`}
						>
							<span
								className={`absolute inset-0 rounded-full transition-all duration-300
                ${
									index === currentIndex
										? "bg-blue-500 scale-100"
										: "bg-white/30 scale-75 group-hover:scale-100"
								}
              `}
							/>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
