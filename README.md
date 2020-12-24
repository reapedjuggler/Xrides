* **Task**
----
    XRides, delivers about 200 rides per minute or 288,000 rides per day. 
    Now,they want to send this data to your system via an API. Your task is to create this     
    API and save the data into PostgreSQL.The API should be designed, keeping in mind the real-time streaming nature of data and the
    burst of requests at peak times of the day. The user of this API expects an acknowledgment,
    that the data is accepted and a way to track if the request fails.

</br>

* **Pre-Requisites**
----
  `Node.js`
  `Express.js`
  `PostgreSQL`
  `JavaScript, HTML` 

</br>

* **Implemenation of the REST API rides**
----
  Inserts the data provided by the user in the Data Base
  
* **URL**

  /rides:

* **Method:**

  `POST`
  
* **Data Params**

   **Required:**
 
   `bookingId=[integer]`
   `userId=[integer]`
   `vehicleId=[integer]`
   `packageId=[integer]`
   `travelTypeId=[integer]`
   `travelId=[integer]`
   `mobileId=[integer]`
   `desktopId=[integer]`
   `fromAreaId=[integer]`
   `toAreaId=[integer]`
   `fromId=[integer]`
   `destId=[integer]`
   `begDate=[integer]`
   `endDate=[DATE]`
   `fromLat=[TEXT]`
   `fromLong=[TEXT]`
   `toLat=[TEXT]`
   `toLong=[TEXT]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message: "Your Requested has been accepted" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "Could not process the request, Try again" }`

* **Handling a large number of Requests**
    * **Load Balancing**
        --> We will use the concept of Load Balancing for handling a large number of request
        
</br>

* **Sample Call**

  ```javascript</br>
  route.post("/", (req, res, next) => {
  Ride.addRide(
              // Sending request with desired parameters 
        )
        .then(() => {
              // Render accepted
        })
        .catch((err) => {
              // Render failed
        })
  })
  ```
  </br>
* **Setting Up**
----  
  * **Download the essential node modules**</br>
    <pre>npm install</pre></br>
     **Download and setup PostgreSQL**</br>
     [PostgreSQL](https://www.postgresql.org/)</br>
     </br>**Start the Server**</br>
    <pre>npm start server.js </pre>
  