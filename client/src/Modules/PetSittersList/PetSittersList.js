import React from "react";
import BASE_URL from "../../services/base_url";
import { Get } from "react-axios";

const url = BASE_URL + "/petsitter";

export default function PetSittersList() {
  return (
    <Get url={url}>
      {(error, response, isLoading, makeRequest, axios) => {
        if (error) {
          return (
            <div>
              Something bad happened: {error.message}{" "}
              <button onClick={() => makeRequest({ params: { reload: true } })}>
                Retry
              </button>
            </div>
          );
        } else if (isLoading) {
          return <div>Loading...</div>;
        } else if (response !== null) {
          console.log(response.data);
          return (
            <div>
              {response.data.message}{" "}
              <button
                onClick={() => makeRequest({ params: { refresh: true } })}
              >
                Refresh
              </button>
            </div>
          );
        }
        return <div>Default message before request is made.</div>;
      }}
    </Get>
  );
}
