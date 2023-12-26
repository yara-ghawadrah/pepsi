import { useEffect, useRef, useState } from "react";
import { LocationsClicked } from "../../components/LocationsClicked/LocationsClicked";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";
import {
  Button,
  ConfigurationsContainer,
  DetailsSection,
  InputField,
  Option,
  SariDetailsContainer,
  Select,
  Text
} from "./Home.styles";
import Map, { Transaction, SariMapRef } from "sari-package";

const DEFAULT_ZOOM = 10;

function Home() {
  const DEFAULT_CENTER = { lat: 24.4667, lng: 39.6 };
  const map = useRef<SariMapRef>(null);
  const [poiInput, setPoiInput] = useState<string>("");
  const [currentZoom, setCurrentZoom] = useState<number>(DEFAULT_ZOOM);
  const [enableTransactionFetching, setEnableTransactionFetching] =
    useState<boolean>(false);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>(
    DEFAULT_CENTER
  );
  const [debouncedPois, setDebouncedPOIs] = useState<string[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [locationsClickedDetails, setLocationsClickedDetails] = useState<
    string[]
  >([]);
  const [mapType, setMapType] = useState<string>();

  const toggleTransactionFetching = () => {
    setEnableTransactionFetching((prev) => !prev);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedPOIs(poiInput.split("/"));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [poiInput]);

  return (
    <div>
      <Map
        ref={map}
        mapType={mapType}
        searchTermPOIs={debouncedPois}
        onLocationClick={(details: string) => {
          setLocationsClickedDetails((currentDetails) => [
            ...currentDetails,
            details
          ]);
        }}
        onTransactionsChange={setTransactions}
        zoom={currentZoom}
        onZoomChange={setCurrentZoom}
        onCenterChange={setMapCenter}
        disableTransactionFetch={!enableTransactionFetching}
        appKey={import.meta.env.VITE_SARI_KEY}
      />
      <SariDetailsContainer>
        <ConfigurationsContainer>
          <h2>Sari's configurations:</h2>
          <InputField
            type="text"
            value={poiInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPoiInput(event.target.value);
            }}
            placeholder="Enter POIs separated by '/'"
          />
          <label>
            <Text>
              Enable Transaction Fetching{" "}
              <input
                type="checkbox"
                checked={enableTransactionFetching}
                onChange={toggleTransactionFetching}
              />
            </Text>
          </label>
          <Button
            onClick={() => {
              map.current!.getTransactions();
            }}
          >
            Fetch transactions
          </Button>
          <Button
            onClick={() => {
              map.current!.resetCenter();
            }}
          >
            Set Map Centroid
          </Button>
          <Button
            onClick={() => {
              map.current!.resetZoom();
            }}
          >
            Set Default Zoom Level
          </Button>
          <Select
            value={mapType}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setMapType(event.target.value);
            }}
          >
            {["roadmap", "hybrid", "satellite", "terrain"].map((value, id) => (
              <Option key={id} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </ConfigurationsContainer>
        <DetailsSection>
          <h2>Sari's details:</h2>
          <Text>Current Zoom Level: {currentZoom}</Text>
          <Text>
            Current Center Level:
            <ul>
              <li key="s">lat: {mapCenter.lat}</li>
              <li key="y">lng: {mapCenter.lng}</li>
            </ul>
          </Text>
        </DetailsSection>
      </SariDetailsContainer>
      {!!transactions.length && (
        <TransactionsTable transactions={transactions} />
      )}
      <LocationsClicked details={locationsClickedDetails} />
    </div>
  );
}

export default Home;
