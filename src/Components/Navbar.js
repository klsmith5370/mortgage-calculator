import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <ToolBar>
                    <Typography variant="h5">
                        Mortgage Bank
                    </Typography>
                </ToolBar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

// Additional Notes on components in MaterialUI:
    // AppBar: The Appbar component of Material UI is used for creating a top navigation bar in the user interface.
    // Container: The Container component of Material UI is used for creating a container element that can be used to create a responsive layout, and center and contain other elements in a user interface.
    // ToolBar: The Toolbar component can contain elements such as buttons, text, and icons, and can also be used for creating a responsive layout that adapts to different screen sizes.
    // Typography: Material UI's typography component is used for applying pre-defined typographic styles to text elements. It helps create a consistent and visually pleasing layout with customizable font family, size, weight and spacing.

