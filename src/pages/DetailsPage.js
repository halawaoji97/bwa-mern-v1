import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import React, { Component } from 'react';
import itemDetails from 'json/itemDetails.json';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

class DetailsPage extends Component {
    componentDidMount() {
        window.title = "Details Page"

        window.scrollTo(0, 0)
    }
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ];

        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle data={itemDetails} breadcrumb={breadcrumb} />
                <FeaturedImage data={itemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={itemDetails} />
                        </div>
                        <div className="col-5"><BookingForm itemDetails={itemDetails} /></div>
                    </div>
                </section>
                <Categories data={itemDetails.categories} />
                <Testimony data={itemDetails.testimonial} />
                <Footer />
            </>
        )
    }
}


export default DetailsPage;