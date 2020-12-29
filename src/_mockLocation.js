import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp:100000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            longitude: -113.087222 + increment * tenMetersWithDegrees *Math.random(),
            latitude: 37.675833 + increment * tenMetersWithDegrees *Math.random()
        }
    }
};

let counter = 0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId:Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000)