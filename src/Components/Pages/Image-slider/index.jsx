import { useEffect, useState } from "react";

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurerentSlide] = useState(0);
  const [errormsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  
  async function fetchImages(getUrl) {
    try {
      setLoading(false);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
    }
  }, [url]);

  if (loading) {
    return <div>Loading Data Please waimt!!!!!</div>;
  }

  if (errormsg !== null) {
    return <div>Error Occured ! {errormsg}</div>;
  }

  return <div className="container"></div>;
}
