import React, { useState, useEffect } from "react";
import notification from "/src/assets/notification.png";

const UserNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notifications from the API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Replace with your notification API endpoint
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();

    // Poll the API every 30 seconds to fetch the latest notifications
    const interval = setInterval(fetchNotifications, 30000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="p-4 bg-white flex-col items-center justify-center h-[100vh]">
      <div className=" m-4">
        <h2 className="text-lg font-bold">Notifications</h2>
        <p>New Arrivals</p>
      </div>

      {loading ? (
        <div className="text-center">Loading notifications...</div>
      ) : notifications.length > 0 ? (
        <ul className="space-y-3">
          {notifications.slice(0, 5).map((notification) => (
            <li
              key={notification.id}
              className="p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition"
            >
              <div className="font-semibold">{notification.title}</div>
              <div className="text-sm text-gray-600">
                Price: ${notification.price}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <center>
          <div className="flex-col items-center justify-center">
            <img src={notification} alt="notification" className="h-[250px]" />
            <p className="text-center">Sorry a problem occured...</p>
          </div>
        </center>
      )}
    </div>
  );
};

export default UserNotification;
