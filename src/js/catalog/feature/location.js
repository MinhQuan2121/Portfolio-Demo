export function locationAPI() {
  function updateTime() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    };
    const localTime = now.toLocaleTimeString('en-GB', options);
    const timeZoneOffset = '+7:00';
    const location = 'OMT'; // Replace with your specific time zone abbreviation if needed

    document.getElementById('local-time').innerHTML =
      `<span class="inika italic">Location: </span><br> Local time ${localTime}, ${location} (${timeZoneOffset})`;
  }

  updateTime();
  setInterval(updateTime, 60000); // Update time every minute
}
