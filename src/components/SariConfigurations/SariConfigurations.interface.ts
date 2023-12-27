import { Dispatch, RefObject, SetStateAction } from "react";
import { TransactionStatus, SariMapRef } from "sari-package";

export interface SariConfigurationsProps {
  poiInput: string;
  setPoiInput: Dispatch<SetStateAction<string>>;
  enableTransactionFetching: boolean;
  toggleTransactionFetching: () => void;
  map: RefObject<SariMapRef>;
  transactionsStatus: TransactionStatus;
  mapType: string | undefined;
  setMapType: Dispatch<SetStateAction<string | undefined>>;
}
