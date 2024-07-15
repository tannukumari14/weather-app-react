// import React from 'react';

// const Alerts = ({ alerts }) => {
//     // Check if alerts is defined and has data
//     if (!alerts || alerts.length === 0) {
// ;
//     }

//     // Filter alerts for specific conditions
//     const tsunamiAlerts = alerts.filter(alert => alert.condition === 'Tsunami');

//     // Display alerts if there are any tsunamis detected
//     if (tsunamiAlerts.length > 0) {
//         return (
//             <div>
//                 <h3>Tsunami Alert!</h3>
//                 {tsunamiAlerts.map((alert, index) => (
//                     <div key={index}>
//                         <p><strong>{alert.event}</strong></p>
//                         <p>{alert.description}</p>
//                         <p>Start: {new Date(alert.start * 1000).toLocaleString()}</p>
//                         <p>End: {new Date(alert.end * 1000).toLocaleString()}</p>
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     // Default return if no tsunami alerts
    
// };

// export default Alerts;

