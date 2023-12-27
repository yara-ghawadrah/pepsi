import { useEffect, useRef, useState } from "react";
import { LocationsClicked } from "../../components/LocationsClicked/LocationsClicked";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";
import { SariDetailsContainer, DetailsSection, Text } from "./Home.styles";
import Map, { Transaction, SariMapRef, TransactionStatus } from "sari-package";
import SariConfigurations from "../../components/SariConfigurations/SariConfigurations";

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
  const [transactionsStatus, setTransactionsStatus] =
    useState<TransactionStatus>(TransactionStatus.Idle);
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
        onTransactionsChange={(
          status: TransactionStatus,
          data?: Transaction[]
        ) => {
          setTransactionsStatus(status);
          if (data) {
            setTransactions(data);
          }
        }}
        zoom={currentZoom}
        onZoomChange={setCurrentZoom}
        onCenterChange={setMapCenter}
        disableTransactionFetch={!enableTransactionFetching}
        appKey={import.meta.env.VITE_SARI_KEY}
      />
      <SariDetailsContainer>
        <SariConfigurations
          poiInput={poiInput}
          setPoiInput={setPoiInput}
          enableTransactionFetching={enableTransactionFetching}
          toggleTransactionFetching={toggleTransactionFetching}
          map={map}
          transactionsStatus={transactionsStatus}
          mapType={mapType}
          setMapType={setMapType}
        />
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
