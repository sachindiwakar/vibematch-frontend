import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/slices/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connection);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <h1 className="text-2xl font-bold text-center m-4">
        No Connection Found !!!
      </h1>
    );

  return (
    <div className="flex justify-center m-4 flex-col">
      <h1 className="text-2xl font-bold m-4">
        You have {connections.length} Connections.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
        {connections.map((connection) => {
          const {
            id,
            firstName,
            lastName,
            age,
            gender,
            city,
            country,
            photoUrl,
            about,
            interest,
            isVerifiedBadge,
          } = connection;

          return (
            <div
              className="card card-side bg-base-300 shadow-lg w-full"
              key={id}
            >
              <figure className="w-32 shrink-0">
                <img
                  src={photoUrl}
                  alt="user-photo"
                  className="w-32 h-full object-cover rounded-full p-2"
                />
              </figure>

              <div className="card-body py-3">
                <h2 className="card-title flex items-center gap-2">
                  {firstName + " " + lastName}

                  {isVerifiedBadge && (
                    <span
                      className="badge badge-primary badge-sm"
                      title="Premium Member"
                    >
                      ✓
                    </span>
                  )}
                </h2>

                <p className="text-sm opacity-70">{about}</p>

                {age && gender && (
                  <p className="text-sm">{age + ", " + gender}</p>
                )}

                {city && country && (
                  <p className="text-sm">{city + ", " + country}</p>
                )}

                {interest?.length > 0 && (
                  <p className="text-sm text-warning">
                    {interest.map((item, index) => (
                      <span key={item}>
                        {item}

                        {index !== interest.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              <div className="flex items-end m-2 p-2">
                <Link to={"/chat/" + id}>
                  <button className="btn btn-primary">Chat</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
