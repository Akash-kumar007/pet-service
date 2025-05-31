import React, { useState } from "react";

const events = [
  {
    name: "Pet Costume Parade",
    img: "https://stlmardigras.org/images/uploads/manipulations/_ansel_image_cache/5ffbf9ed659cae3c7b938b757b0f7184.jpg",
    type: "Parade",
    location: "Central Park, NY",
    time: "10:00 AM - 12:00 PM",
  },
  {
    name: "Dog Agility Challenge",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4o2bUNIbxFGFhkWYDxo353qoc9-e7Uc8UkQ&s",
    type: "Competition",
    location: "City Arena, LA",
    time: "1:00 PM - 3:00 PM",
  },
  {
    name: "Cat Talent Show",
    img: "https://moderncat.com/wp-content/uploads/2018/05/the-savitsky-cats-1440x980.jpg",
    type: "Show",
    location: "Pet Pavilion, SF",
    time: "11:00 AM - 2:00 PM",
  },
  {
    name: "Adoption Fair",
    img: "https://www.shutterstock.com/image-photo/huntington-beach-california-usa-april-600nw-2147917481.jpg",
    type: "Adoption",
    location: "Green Park, Seattle",
    time: "9:00 AM - 1:00 PM",
  },
  {
    name: "Pet & Owner Look-Alike Contest",
    img: "https://xvctqx.infiniteuploads.cloud/2019/08/dogsownerslook-likedogs.jpg",
    type: "Contest",
    location: "Fairgrounds, Austin",
    time: "2:00 PM - 4:00 PM",
  },
  {
    name: "Pet Wellness Workshop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmxeXBUYBBDwCUW4kO-3PdibdBnYoIOI7-w&s",
    type: "Workshop",
    location: "Community Center, Denver",
    time: "3:00 PM - 5:00 PM",
  },
];

export default function PetEventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventType, setEventType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const filteredEvents = events.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (eventType === "" || event.type === eventType)
    );
  });

  const uniqueTypes = [...new Set(events.map((e) => e.type))];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} at ${selectedEvent.name}!`);
    setName("");
    setEmail("");
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-6 text-center">
        <h1 className="text-3xl font-bold text-pink-600">🐾 Pet Events</h1>
        <p className="text-gray-600 mt-2">
          Join us for fun-filled events for you and your furry friends!
        </p>
      </header>

      {/* Search & Filter Bar */}
      <div className="p-4 bg-white shadow-sm flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full max-w-xl border border-gray-300 rounded-md p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full max-w-xs border border-gray-300 rounded-md p-2"
        >
          <option value="">All Types</option>
          {uniqueTypes.map((type, idx) => (
            <option key={idx} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Events Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No events found.
          </p>
        )}
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg bg-white"
          >
            <img
              src={event.img}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold text-center">{event.name}</h3>
              <p className="text-center text-sm text-gray-500">{event.type}</p>
              <div className="mt-2 text-sm text-gray-600 text-center">
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Time:</strong> {event.time}
                </p>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
                onClick={() => setSelectedEvent(event)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Book: {selectedEvent.name}
            </h2>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 border border-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}