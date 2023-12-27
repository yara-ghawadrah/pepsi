import { SariConfigurationsProps } from "./SariConfigurations.interface";
import {
  Button,
  ConfigurationsContainer,
  InputField,
  Option,
  Select,
  Text
} from "./SariConfigurations.styles";

function SariConfigurations({
  poiInput,
  setPoiInput,
  enableTransactionFetching,
  toggleTransactionFetching,
  map,
  transactionsStatus,
  mapType,
  setMapType
}: SariConfigurationsProps) {
  return (
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
      <Text>Transactions Status = {transactionsStatus}</Text>
      <Button
        onClick={() => {
          map.current!.resetCenter();
        }}
      >
        Set Map Default Center
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
  );
}

export default SariConfigurations;
