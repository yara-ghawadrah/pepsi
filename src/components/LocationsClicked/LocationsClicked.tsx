import { LocationItem, LocationsClickedContainer } from "./LocationsClicked.styles";

/**
 * Represents a component to display clicked locations.
 *
 * @props details - An array containing details of clicked locations.
 */
export const LocationsClicked = ({ details }:{details: string[]}) => {
  if (!details.length) return null;
  return (
    <LocationsClickedContainer>
      <h2>Locations Clicked:</h2>
      <ul>
        {details?.map((locationDetails, index) => (
          <LocationItem key={index}>{locationDetails}</LocationItem>
        ))}
      </ul>
    </LocationsClickedContainer>
  );
};
