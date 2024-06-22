import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Auth from "./components/auth/Auth";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Auth submitLabel={"Login"} onSubmit={function (credentials: { email: string; password: string; }): Promise<void> {
          throw new Error("Function not implemented.");
        }} children={undefined} />
        <h1>Dark Mode</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
