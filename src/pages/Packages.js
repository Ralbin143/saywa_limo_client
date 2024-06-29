import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./package.css";
import { getActivePackageSliceItem } from "../store/Packages/PackageSlice";
import { useNavigate } from "react-router-dom";

function PackagesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { packagesList, isLoading } = useSelector((state) => state?.package);

  useEffect(() => {
    dispatch(getActivePackageSliceItem());
  }, []);
  return (
    <div className="container mt-4 mb-4">
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="d-flex flex-wrap gap-4">
          {packagesList?.map((res, i) => (
            <div
              key={i}
              className="package-container"
              onClick={() => navigate(`/package/${res._id}`)}
            >
              {res.PackageName}
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default PackagesPage;
