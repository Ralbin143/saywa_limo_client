import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { AiFillCar } from "react-icons/ai";
import { MdPreview } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import ReviewBooking from "./ReviewBooking";
import Vehicles from "./Vehicles";
import BookRide from "./BookRide";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { activeStepx } from "../store/StepperSlice";
import { ToastContainer } from "react-toastify";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch } from "react-redux";
import { activeStepx } from "../store/StepperSlice";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#000",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    color: "#fff",
    backgroundImage:
      "linear-gradient( 136deg, rgb(0,0,0) 0%, rgb(0,0,0) 50%, rgb(0,0,0) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    color: "#fff",
    backgroundImage:
      "linear-gradient( 136deg, rgb(0,0,0) 0%, rgb(0,0,0) 50%, rgb(0,0,0) 100%)",
  }),
  ...(ownerState.end && {
    color: "#fff",
    backgroundImage:
      "linear-gradient( 136deg, rgb(255,0,0) 0%, rgb(0,255,0) 50%, rgb(0,0,255) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, end, className } = props;

  const icons = {
    1: <AiFillCar style={{ fontSize: "25px" }} />,
    2: <MdPreview style={{ fontSize: "25px" }} />,
    3: <IoMdDocument style={{ fontSize: "25px" }} />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active, end }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
ƒ   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["CAR CLASS", "Preview", "Agreement"];

export default function Reservation() {
  const { activeStep } = useSelector((state) => state?.activeStep);
  const dispatch = useDispatch();

  React.useEffect(() => {
    sessionStorage.setItem("activeStep", activeStep);

    const active = sessionStorage.getItem("activeStep");
    if (active) {
      dispatch(activeStepx(parseInt(active)));
    }
  }, [activeStep]);

  return (
    <div className="container p-3">
      <ToastContainer />
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  className="d-flex flex-column gap-3"
                  {...labelProps}
                  StepIconComponent={ColorlibStepIcon}
                  // onClick={() => changeTab(label)}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <React.Fragment>
          <div className="mt-4">
            {activeStep === 0 ? (
              <Vehicles />
            ) : activeStep === 1 ? (
              <ReviewBooking />
            ) : activeStep === 2 ? (
              <BookRide />
            ) : null}
          </div>
        </React.Fragment>
      </Box>
    </div>
  );
}
