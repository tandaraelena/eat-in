import { Banner } from "./banner";

export const Form = ({ children }) => {
  return (
    <div style={{ position: "relative", fontSize: "18px" }}>
      <Banner />
      <div
        style={{
          position: "absolute",
          top: "45px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "white",
              padding: "30px",
              borderRadius: "4px",
              width: "400px",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
