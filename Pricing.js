import React, { Component } from "react";
class Pricing extends Component {
    constructor() {
        super();
        this.state = {
            pricingData: [
                {
                    title: "FREE",
                    price: 0,
                    pricePer: "/month",
                    currency: "$",
                    features: [{
                        name: "Single User",
                        access: true,
                    },
                    {
                        name: "5GB Storage",
                        access: true,
                    },
                    {
                        name: "Unlimited Public Projects",
                        access: true,
                    },
                    {
                        name: "Community Access",
                        access: true,
                    },
                    {
                        name: "Unlimited Private Projects",
                        access: false,
                    },
                    {
                        name: "Dedicated Phone Support",
                        access: false,
                    },
                    {
                        name: "Free Subdomain",
                        access: false,
                    },
                    {
                        name: "Monthly Staus Reports",
                        access: false,
                    },

                    ]

                },
                {
                    title: "PLUS",
                    price: 9,
                    pricePer: "/month",
                    currency: "$",
                    features: [{
                        name: "5 Users",
                        access: true,
                    },
                    {
                        name: "50GB Storage",
                        access: true,
                    },
                    {
                        name: "Unlimited Public Projects",
                        access: true,
                    },
                    {
                        name: "Community Access",
                        access: true,
                    },
                    {
                        name: "Unlimited Private Projects",
                        access: true,
                    },
                    {
                        name: "Dedicated Phone Support",
                        access: true,
                    },
                    {
                        name: "Free Subdomain",
                        access: true,
                    },
                    {
                        name: "Monthly Staus Reports",
                        access: false,
                    },

                    ]

                },
                {
                    title: "PRO",
                    price: 49,
                    pricePer: "/month",
                    currency: "$",
                    features: [{
                        name: "Unlimited User",
                        access: true,
                    },
                    {
                        name: "150GB Storage",
                        access: true,
                    },
                    {
                        name: "Unlimited Public Projects",
                        access: true,
                    },
                    {
                        name: "Community Access",
                        access: true,
                    },
                    {
                        name: "Unlimited Private Projects",
                        access: true,
                    },
                    {
                        name: "Dedicated Phone Support",
                        access: true,
                    },
                    {
                        name: "Free Subdomain",
                        access: true,
                    },
                    {
                        name: "Monthly Staus Reports",
                        access: true,
                    },

                    ]

                }

            ]
        }
    }
    render() {
        return (
            <section class="pricing py-5">
                <div class="container">
                    <div class="row">


                        <>
                            {this.state.pricingData.map((e) => {
                                return (
                                    <>
                                        <div class="col-lg-4">

                                            <div class="card mb-5 mb-lg-0">
                                                <div class="card-body">
                                                    <h5 class="card-title text-muted text-uppercase text-center">{e.title}</h5>
                                                    <h6 class="card-price text-center">{e.currency}{e.price}<span class="period">{e.pricePer}</span></h6>
                                                    <hr />
                                                    <ul class="fa-ul">
                                                        {e.features.map((f) => {


                                                            if (f.access === true) {
                                                                return (<li><span class="fa-li"><i class="fas fa-check"></i></span>{f.name}</li>);
                                                            }

                                                            else {
                                                                return (<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{f.name}</li>);
                                                            }




                                                        })}
                                                    </ul>
                                                    <div class="d-grid">
                                                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    </>


                                )
                            })
                            }


                        </>
                    </div>
                </div>
            </section>

        )
    }
}
export default Pricing;