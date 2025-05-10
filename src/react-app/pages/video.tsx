import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/video.css"; // Import your CSS file for styling
function VideoPage() {
  const { id } = useParams(); // Access the dynamic segment
  const navigate = useNavigate(); // React Router navigation hook
  interface VideoData {
    image_url: string;
    likes: number;
    views: number;
    videos: string; // Add the missing 'videos' property
  }

  const [data, setData] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true); // Explicit loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost/API/Apagefromthephotographer"; // Fallback to localhost if env variable is not set

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController
    const signal = controller.signal;

    setLoading(true); // Start loading
    setError(null); // Reset error state

    fetch(`${API_BASE_URL}/config/data_fetch.php?id=${id}`, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Get the response as plain text
      })
      .then((text) => {
        try {
          // Remove "Connected successfully" and parse the JSON
          const cleanedText = text.replace("Connected successfully", "").trim();
          const jsonData = JSON.parse(cleanedText);

          // Check if the response contains an error
          if (jsonData.error) {
            console.error("API Error:", jsonData.error);
            navigate("/404", { replace: true }); // Redirect to 404 page and replace history
          } else if (!jsonData || Object.keys(jsonData).length === 0) {
            navigate("/404", { replace: true }); // Redirect to 404 page and replace history
          } else {
            setData(jsonData); // Set the data directly
          }
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          setError("Invalid response from server.");
        }
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Error fetching data:", error);
          setError("Failed to load data. Please try again later.");
          setLoading(false); // Stop loading
        }
      });

    return () => controller.abort(); // Cleanup on unmount
  }, [id, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data ? (
        <div className="container">
          <div className="video_container">
            <iframe
              src={data.videos}
              title="Video Player"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video_player"
            ></iframe>
              <div className="video_details">
                <h2>Likes: {data.likes}</h2>
                <h2>Views: {data.views}</h2>
                <button
                  className="like_button"
                  onClick={() => {
                    // Handle like button click
                    console.log("Like button clicked");
                  }}
                >
                  Like
                </button>
              </div>
            </div>
          </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default VideoPage;
