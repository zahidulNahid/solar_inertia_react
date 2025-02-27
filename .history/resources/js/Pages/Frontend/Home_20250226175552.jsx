import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { Hero } from "@/Layouts/Frontend/Partials/Hero";
import { usePage } from "@inertiajs/react";
import CheckoutPage from "@/Layouts/Frontend/Partials/checkout";
import { CheckoutForm } from "@/Components/checkout-form";
import { MainContent } from "@/Components/main-content";

const Home = () => {
    const { props } = usePage();
    console.log(props);

    return (
        <div>
            <Hero />
            
           <MainContent/>
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
