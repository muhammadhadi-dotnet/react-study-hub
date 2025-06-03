import { useState } from "react";
import { showToast } from "./ToastAlert";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const sendData = async (url, payload, method = "POST") => {
    console.log("Sending data to:", url);
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      if (data.isSuccess === false) {
        throw new Error(data.message || "Failed to send data");
      }

      setResponse(data);
      setLoading(false);
      return data; 

    } catch (err) {
      setError(err.message);
      setLoading(false);
      showToast(`Error: ${err.message}`, "error");
      console.error("Error:", err);
      return null; 
    }
  };

  return { sendData, loading, error, response };
};

export default usePost;
