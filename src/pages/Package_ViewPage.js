import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getSinglePackageSliceItem } from "../store/Packages/PackageSlice";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import DateTimePicker from "../components/home/DateTimePicker";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { activeStepx } from "../store/StepperSlice";
import { location } from "../store/Places";

const today = new Date();
const formattedDatexxx = `${today.getDate().toString().padStart(2, "0")}-${(
  today.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}-${today.getFullYear()}`;

function Package_ViewPage() {
  const libraries = ["places"];
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleItem } = useSelector((state) => state?.package);
  const hourlyOriginRef = useRef();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [currentDate, setCurrentDate] = useState(formattedDatexxx);
  const [pickupTimeError, setPickupTimeError] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDateError, setPickupDateError] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(getSinglePackageSliceItem({ id: id }));
  }, []);

  const reserveAction = () => {
    const data = {
      rideType: "package-trip",
      source: hourlyOriginRef.current.value,
      destination: "-",
      routeNo: 0,
      pickupDate: currentDate,
      scheduleDate: currentDate,
      pickupTime: pickupTime,
      hour: "-",
      travelTime: "-",
      travelLength: "-",
      vehicleId: selectedVehicle,
      shortDescription: "",
      tripStatus: "Booked",
      noOfPassengers: "",
      noOfBags: "",
      meetAndGreet: "",
      totalAmount: selectedPrice,
      tripOccasion: "",
      tripOccasionDetails: "",
      totalKms: "",
      stops: "",
      totalHours: "",
      bagType: "",
      flightInformation: "",
      needCarSeat: "",
      seatCount: "",
      gratuiryTypeCash: "",
      gratuityAmount: "",
      nightCharge: "",
      discount: "",
      voucherAmount: "",
      voucherCode: "",
      walletBalance: "",
    };

    dispatch(location(data));
    sessionStorage.setItem("locationData", JSON.stringify(data));
    dispatch(activeStepx(2));

    // if (wayPointsList.length === 0) {
    //   sessionStorage.setItem("waypoints", "[]");
    // }
    Navigate("/reservation");
  };
  return (
    <div className="container mt-5 mb-4">
      <div className="text-center mb-4">
        <h2>PACKAGE</h2>
        <div className="text-secondary">
          Explore some of the best tips from around the world
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div>Image</div>
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>
            {singleItem[0]?.PackageName}
          </div>
          <div className="text-secondary">{singleItem[0]?.Description}</div>
        </div>
        <div className="col-12 col-md-6">
          <div className="package-itemsss">{singleItem[0]?.TotalPerson}</div>
          <div className="package-itemsss">{singleItem[0]?.TourLength}</div>
          {singleItem[0]?.vehicles.map((res, i) => (
            <div
              className="package-itemsss d-flex justify-content-between"
              style={{
                background: selectedVehicle === res.id && "#c29c66",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedVehicle(res.id);
                setSelectedPrice(parseInt(res.price));
              }}
            >
              <input type="radio" />
              <div>{res.name}</div>
              <div>${res.price}</div>
            </div>
          ))}
          <div className="package-itemsss">
            <Autocomplete>
              <input
                type="text"
                className="emptyInput"
                ref={hourlyOriginRef}
                value={fromLocation}
                onBlur={(e) => {
                  setFromLocation(hourlyOriginRef.current.value);
                }}
                onChange={(e) => {
                  setFromLocation(e.target.value);
                }}
              />
            </Autocomplete>
          </div>

          <DateTimePicker
            setCurrentDate={setCurrentDate}
            setPickupDateError={setPickupDateError}
            //   pickupDateError={pickupDateError}
            setPickupTime={setPickupTime}
            pickupTimeError={pickupTimeError}
          />

          <div
            className="text-center mt-3 reserveButtonHome"
            onClick={() => reserveAction()}
          >
            Reserve Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package_ViewPage;
