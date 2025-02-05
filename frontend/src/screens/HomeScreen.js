import React from "react";
import Banner from '../components/Home/Banner'
import Layout from "../layout/Layout";
import Categories from "../components/Home/Categories";
import { useSelector } from "react-redux";

function HomeScreen() {

    const {
        categoriesList: { categories, loading, error },
        // getAllCards: { products, loading: cardLoading, error: cardError, offers }
    } = useSelector((state) => state);

    return (
        <Layout header={true}>
            <Banner />
            <div className="h-[200px] container mx-auto xl:px-32 px-4 my-6">
                <Categories categories={categories} loading={loading} />
            </div>
        </Layout>
    )
}

export default HomeScreen;