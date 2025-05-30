import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { HardHat, PenTool as Tool, BarChart3, PanelTop } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust path if needed
import { Link } from "@inertiajs/inertia-react";

export function MainContent() {
    const [selectedPanels, setSelectedPanels] = useState(null);
    const [customQuantity, setCustomQuantity] = useState("");

    const handleDonate = (panels) => {
        setSelectedPanels(panels);
        setCustomQuantity(panels.toString());
    };

    const handleCheckout = () => {
        if (selectedPanels) {
            router.visit(
                `/checkout?panels=${selectedPanels}&amount=${
                    selectedPanels * 550
                }`
            );
        }
    };

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Left Side - Information */}
                <div className="space-y-8">
                    {[
                        {
                            Icon: HardHat,
                            title: "Community Powered:",
                            text: "What better way to fuel our growth and create lasting change than by coming together with our alumni, families, and friends? Your generosity can turn this dream into reality—saving our school money and making a positive impact on the environment for generations to come. Every contribution, no matter the size, brings us one step closer to building a brighter, more sustainable future.",
                        },
                        {
                            Icon: Tool,
                            title: "160 kW Solar Power System:",
                            text: "Our cutting-edge solar installation, featuring 280 high-efficiency solar panels, is designed to harness the sun's power effectively, generating over 206 MWh of clean energy annually. Included in the system's design and planning phase, the School District has been able to maximize the number of financial solar incentives available for the project.",
                        },
                        {
                            Icon: BarChart3,
                            title: "Solar Savings:",
                            text: "Adding solar to the facility will save the school district approximately $120,000 annually in utility costs by covering 70% of their power needs from the solar array. This will allow the school to invest in other improvements and new team members.",
                        },
                        {
                            Icon: PanelTop,
                            title: "Environmental Impact:",
                            text: "With this solar installation, we're offsetting 190 tons of CO2 annually—equivalent to removing 41 cars from the road and powering 90 homes each year. This impact is also comparable to planting 3,159 trees annually, contributing to a healthier planet.",
                        },
                    ].map(({ Icon, title, text }) => (
                        <div key={title} className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-[#F1F8E9] flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-[#4CAF50]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">{title}</h3>
                                <p className="text-gray-600">{text}</p>
                            </div>
                        </div>
                    ))}

                    <div className="text-center py-8">
                        <p className="text-gray-800 font-medium mb-4">
                            At Solar Foundation, we're not just installing solar
                            panels...
                        </p>
                        <Button
                            variant="destructive"
                            className="bg-[#D32F2F] hover:bg-[#B71C1C]"
                        >
                            LEARN ABOUT THE NEW SPORTS COMPLEX
                        </Button>
                    </div>
                </div>

                {/* Right Side - Donation Selection */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">
                        Build a Brighter Future: <br />
                        Select Your Solar Impact
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((panels) => (
                            <div
                                key={panels}
                                className={`border rounded-md p-4 ${
                                    selectedPanels === panels
                                        ? "bg-lime-100"
                                        : ""
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="radio"
                                        id={`donate-${panels}`}
                                        name="donate"
                                        value={panels}
                                        checked={selectedPanels === panels}
                                        onChange={() => handleDonate(panels)}
                                        className="h-4 w-4 text-[#4CAF50] focus:ring-[#4CAF50]"
                                    />
                                    <label
                                        htmlFor={`donate-${panels}`}
                                        className="flex-grow font-medium"
                                    >
                                        Donate {panels} Solar Panel
                                        {panels > 1 ? "s" : ""}
                                    </label>
                                    <span className="font-bold">
                                        ${panels * 550}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Custom Quantity Input */}
                        <div className="mt-8">
                            <div className="text-gray-600 mb-2">
                                Custom amount? Awesome!
                            </div>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={customQuantity}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setCustomQuantity(value);
                                        if (value !== "") {
                                            handleDonate(
                                                Number.parseInt(value)
                                            );
                                        }
                                    }}
                                    placeholder="Enter custom quantity"
                                    className={`w-full p-3 border rounded-md ${
                                        customQuantity
                                            ? "bg-lime-100 border-lime-500"
                                            : "bg-white"
                                    }`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <Link
                        href=
                        className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] mt-4 inline-flex items-center justify-center px-4 py-2 text-white rounded-md"
                    >
                        GO TO CHECKOUT
                    </Link>
                </div>
            </div>
        </section>
    );
}
