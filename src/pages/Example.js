import React from "react";
import { Component } from "react";
// import InputNumber from "elements/Form/InputNumber";
// import InputDate from "elements/Form/InputDate";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ];
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumbList} />
                    </div>
                </div>
            </div>
        );

    }


}


