import React, { useState, useEffect } from "react"
import { getListings } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";

const Listings = (props) => {

    const [listingsList, setListingsList] = useState([])

    useEffect(() => {
        getListings()
    }, [listingsList] )

    return (
        <div>

            <a
            href="/login"
            onClick={() => window.localStorage.clear()} 
            >
            Log out</a>
            {/* <h1>Listings go here with the functionality to get all the listings, add a new listing, edit an existing listing and get the optimal price for the listing, and delete the listing</h1> */}
            <button>Add new listing</button>

            {listingsList.map(listing => (
                <Link key={listing.id} to={`/listings/${listing.id}`}>
                    <ListingCard listing={listing}/>
                </Link>
            ))}
          
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = {
    getListings
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)