import { AppShell, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";

export const AppLayout = () => {
  return (
    <AppShell
      padding="md"
      header={{ height: 100 }}
      style={{ overflow: "hidden", height: "100vh" }}
      styles={{
        main: {
          height: "calc(100vh - 100px)",
          overflow: "hidden",
        },
      }}
    >
      <AppShell.Header bg="primary.9">
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main
        style={{
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          pos="absolute"
          top={50}
          left="50%"
          px={{ base: "1rem", sm: "2rem", md: "4rem" }}
          style={{
            transform: "translateX(-50%)",
            zIndex: 1000,
            width: "92%",
            overflow: "hidden",
          }}
        >
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};

// import { AppShell, Box } from "@mantine/core";
// import { Outlet } from "react-router-dom";
// import { AppHeader } from "./AppHeader";

// export const AppLayout = () => {
//   return (
//     <AppShell
//       padding="md"
//       header={{ height: 100 }}
//       style={{ overflow: "visible", height: "100vh" }} // allow overflow visible to see overlap
//       styles={{
//         root: {
//           maxWidth: "100vw",   // prevent AppShell max-width restriction
//           overflowX: "hidden",
//         },
//         header: {
//           padding: 0,          // remove default padding on header
//           width: "100vw",      // make header full viewport width
//           maxWidth: "100vw",
//           position: "relative",
//           zIndex: 1,
//         },
//         main: {
//           height: "calc(100vh - 100px)",
//           overflow: "visible", // important to show overlap
//           position: "relative", // position relative to contain absolute Box
//         },
//       }}
//     >
//       <AppShell.Header bg="primary.9">
//         <AppHeader />
//       </AppShell.Header>

//       <AppShell.Main
//         style={{
//           display: "flex",
//           overflow: "visible",
//           position: "relative", // ensure Box absolute inside here
//         }}
//       >
//         <Box
//           pos="absolute"
//           top={-50} // move it up by 50px to overlap header (adjust as needed)
//           left="50%"
//           px={{ base: "1rem", sm: "2rem", md: "4rem" }}
//           style={{
//             transform: "translateX(-50%)",
//             zIndex: 10, // higher than header
//             width: "92%",
//             overflow: "visible",
//           }}
//         >
//           <Outlet />
//         </Box>
//       </AppShell.Main>
//     </AppShell>
//   );
// };

// import { AppShell, Box } from "@mantine/core";
// import { Outlet } from "react-router-dom";
// import { AppHeader } from "./AppHeader";

// export const AppLayout = () => {
//   return (
//     <AppShell
//       padding="md"
//       header={{ height: 100 }}
//       styles={{
//         root: {
//           maxWidth: "100vw",
//           overflowX: "hidden",
//         },
//         header: {
//           padding: 0,
//           width: "100vw",
//           maxWidth: "100vw",
//           position: "relative",
//           zIndex: 2,
//         },
//         main: {
//           height: "calc(100vh - 100px)",
//           overflow: "visible",
//           position: "relative",
//           padding: 0,
//         },
//       }}
//     >
//       <AppShell.Header bg="primary.9">
//         <AppHeader />
//       </AppShell.Header>

//       <AppShell.Main>
//         <Box
//           pos="absolute"
//           top={-50} // 👈 overlap header by 50px
//           left="50%"
//           w="100%"
//           px={{ base: "1rem", sm: "2rem", md: "4rem" }}
//           style={{
//             transform: "translateX(-50%)",
//             zIndex: 5,
//             maxWidth: "100vw",
//           }}
//         >
//           <Outlet />
//         </Box>
//       </AppShell.Main>
//     </AppShell>
//   );
// };
