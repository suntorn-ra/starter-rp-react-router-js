import { RPProvider, RPLayout, RPPages, RPConfig } from "@react-pdf-kit/viewer";

const AppPdfViewer = (props) => {
  const { showToolbar = true, defaultLayoutProps, pdfSrc } = props;
  return (
    <RPConfig licenseKey="YOUR_LICENSE_KEY">
      <RPProvider src={pdfSrc}>
        {showToolbar ? (
          <RPLayout toolbar {...defaultLayoutProps}>
            <RPPages />
          </RPLayout>
        ) : (
          <div style={{ width: "100%", height: "550px" }}>
            <RPPages />
          </div>
        )}
      </RPProvider>
    </RPConfig>
  );
};

export default AppPdfViewer;
