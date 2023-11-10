export const Summary = ({ formData, setShowSummary, setFormData }) => { 

    return (
      <div>
        <h2>Summary</h2>
        <p>Hi! {formData.name}</p>
        <p>This is the information we collected from you:</p>
        <p>Your email is {formData.email}</p>
        <p>You are in the age range {formData.ageGroup}</p>
        <p>You are a {formData.gender}</p>
        <p>Your favorite artist is {formData.favoriteArtist}</p>
        <p>You like to listen to {formData.musicType}</p>
        <p>You listen to music for {formData.averageTime} a day</p>
      </div>
    );
  };
  
