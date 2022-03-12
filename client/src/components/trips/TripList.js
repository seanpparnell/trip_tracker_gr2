import Trip from './Trip';

const TripList = ({ trips, updateTrip, deleteTrip }) => (
  <>
    { trips.map( t => 
      <Trip 
        key={t.id}
      
        {...t}
        fav={false}
        updateTopic={updateTrip}
        deleteTopic={deleteTrip}
      />
    )}
  </>
)

export default TripList;
