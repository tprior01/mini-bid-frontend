import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Available() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

const url = 'https://mini-bid-api.herokuapp.com/itm/available'

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="Available">
      {loading && (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      )}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      {data && 
        data.map((item, i) => (
          <table>
          <tbody>
          <tr key={i}>
            <td><a href={`http://localhost:3000/itm/${item._id}`}> {item.title} </a></td>
            <td>{item.condition}</td>
            <td>{item.expiresAt}</td>
            <td><a href={`http://localhost:3000/usr/${item.user._id}`}> {item.user.username} </a></td>
            <td><img src={`data:${item.file.contentType.data};base64,${Buffer.from(item.file.data.data).toString("base64")}`} alt="profile"/></td>

          </tr>
          </tbody>

          </table>
          ))}
    </div>  
      )
  }